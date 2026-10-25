import test from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../public/posts/word-search/script.js', import.meta.url), 'utf8')

function fixture() {
  let seed = 42
  const math = Object.create(Math)
  math.random = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 2 ** 32)
  const elements = new Map()
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, new EventTarget())
      return elements.get(id)
    }
  }
  const context = { window: {}, document, Math: math, AbortController }
  vm.runInNewContext(source, context)
  const Game = context.window.WordSearchGame
  // Keep the real generation, selection, feedback, and event lifecycle code.
  // Browser checks cover rendering; these stand-ins avoid a DOM dependency.
  class TestGame extends Game {
    renderOptions() {}
    updateOptions() {}
    renderWordList() {}
    focusCell(cell) { this.focused = cell }
    renderBoard() {
      this.cells = this.gameBoard.flatMap((row, r) => row.map((letter, c) => {
        const classes = new Set()
        return {
          textContent: letter, dataset: { row: String(r), col: String(c) },
          classList: { add: cls => classes.add(cls), remove: cls => classes.delete(cls) },
          setAttribute() {}, classes
        }
      }))
    }
  }
  return { game: new TestGame(), elements, document }
}

test('every category and size produces ten findable words', () => {
  const { game } = fixture()
  const categories = ['programming', 'animals', 'countries', 'fruits', 'sports', 'colors',
    'vegetables', 'cars', 'professions', 'superheroes', 'weather', 'instruments',
    'movies', 'cities', 'bodyParts', 'planets']
  for (const category of categories) for (const size of [10, 20, 30, 40]) {
    game.currentCategory = category
    game.gridSize = size
    for (let sample = 0; sample < 10; sample++) {
      game.newGame()
      assert.equal(game.words.length, 10, `${category}, ${size}, sample ${sample}`)
      for (const word of game.words) {
        assert(word.length <= size)
        const positions = game.wordLocations.get(word)
        assert(positions, `Missing ${word}`)
        assert.equal(positions.map(([r, c]) => game.gameBoard[r][c]).join(''), word)
      }
      assert(game.gameBoard.every(row => row.every(letter => /^[A-Z]$/.test(letter))))
    }
  }
  game.destroy()
})

test('endpoint selection, reverse selection, duplicates, and completion feedback', () => {
  const { game } = fixture()
  game.newGame()
  for (const [index, word] of [...game.words].entries()) {
    const path = game.wordLocations.get(word)
    const first = path[0], last = path.at(-1)
    const start = index % 2 ? last : first, end = index % 2 ? first : last
    game.chooseCell(game.cellAt(...start))
    game.chooseCell(game.cellAt(...end))
    assert(game.foundWords.has(word))
    assert.equal(game.anchor, null)
    assert.equal(game.selectedCells.length, 0)
  }
  assert.match(game.status.textContent, /Puzzle complete/)
  assert.equal(game.progress.textContent, '10 of 10 words found')
  const path = game.wordLocations.get(game.words[0])
  game.chooseCell(game.cellAt(...path[0]))
  game.chooseCell(game.cellAt(...path.at(-1)))
  assert.match(game.status.textContent, /already found/)
  assert.equal(game.foundWords.size, 10)
  game.newGame()
  assert.equal(game.foundWords.size, 0)
  assert.equal(game.progress.textContent, '0 of 10 words found')
  game.destroy()
})

test('keyboard selection can be cancelled and diagonal paths are constrained', () => {
  const { game } = fixture()
  game.newGame()
  game.chooseCell(game.cellAt(0, 0))
  game.selectTo(game.cellAt(1, 2))
  assert.equal(game.selectedCells.length, 0)
  const cell = game.cellAt(0, 0)
  let prevented = false
  game.onKeyDown({ key: 'Escape', target: { closest: () => cell }, preventDefault: () => { prevented = true } })
  assert(prevented)
  assert.equal(game.anchor, null)
  assert.equal(game.selectedCells.length, 0)
  game.destroy()
})

test('destroy removes delegated handlers and leaves later route instances independent', () => {
  const { game, elements } = fixture()
  game.newGame()
  const board = game.gameBoard
  game.destroy()
  elements.get('newPuzzle').dispatchEvent(new Event('click'))
  assert.equal(game.gameBoard, board)
  const next = fixture().game
  next.newGame()
  assert.equal(next.words.length, 10)
  next.destroy()
})

test('pointer clicks remain on cells; dragging selects a word and suppresses its trailing click', () => {
  const { game, document } = fixture()
  game.newGame()
  const word = game.words[0], path = game.wordLocations.get(word)
  const start = game.cellAt(...path[0]), end = game.cellAt(...path.at(-1))
  const target = cell => ({ closest: () => cell })
  let captured = false
  game.grid.setPointerCapture = () => { captured = true }
  game.grid.hasPointerCapture = () => captured
  game.grid.releasePointerCapture = () => { captured = false }
  game.grid.contains = () => true
  const down = { button: 0, isPrimary: true, pointerId: 1, pointerType: 'mouse', target: target(start) }
  game.onPointerDown(down)
  assert.equal(captured, false, 'Capturing before drag would retarget endpoint clicks to the grid')
  game.onPointerUp(down)
  game.onClick({ target: target(start) })
  assert(game.anchor)
  game.cancelSelection()
  game.onPointerDown(down)
  document.elementFromPoint = () => target(end)
  game.onPointerMove({ pointerId: 1, pointerType: 'mouse', clientX: 0, clientY: 0 })
  assert.equal(captured, true)
  game.onPointerUp(down)
  assert(game.foundWords.has(word))
  game.onClick({ target: target(end) })
  assert.equal(game.anchor, null)
  game.destroy()
})
