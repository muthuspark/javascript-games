<template>
  <article class="container py-4" itemscope itemtype="https://schema.org/VideoGame">
    <Breadcrumb :items="breadcrumbItems" />

    <header class="mb-4">
      <h1 class="mb-2" itemprop="name">{{ game.title }}</h1>
      <p class="text-muted lead" itemprop="description">{{ game.description }}</p>
      <div class="mb-3">
        <span v-for="category in game.categories" :key="category" class="badge bg-success me-2" itemprop="genre">
          {{ category }}
        </span>
      </div>
    </header>

    <section id="game_main_container" class="game-section" aria-label="Game Area">
      <div class="game-controls">
        <label for="boardSizeSelect">Board Size:</label>
        <select id="boardSizeSelect" onchange="changeBoardSize()">
          <option value="5">5x5</option>
          <option value="7" selected>7x7</option>
          <option value="9">9x9</option>
          <option value="11">11x11</option>
        </select>

        <label for="difficultySelect">Difficulty:</label>
        <select id="difficultySelect" onchange="changeDifficulty()">
          <option value="easy">Easy</option>
          <option value="medium" selected>Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button class="new-game-btn" onclick="newGame()">New Game</button>
      </div>

      <div id="gameStatus">Your turn - Click a cell to place your piece</div>

      <div class="game-info">
        <div class="player-info">
          <div class="player-indicator blue"></div>
          <span class="player-label">You (Blue) - Connect Top to Bottom</span>
        </div>
        <div class="player-info">
          <div class="player-indicator red"></div>
          <span class="player-label">AI (Red) - Connect Left to Right</span>
        </div>
      </div>

      <div class="board-container">
        <div id="hexBoard"></div>
      </div>

      <div class="instructions-box">
        <h3>How to Play Hex</h3>
        <ul>
          <li><span class="goal-indicator"><span class="color-box blue"></span> Blue (You)</span>: Connect the top edge to the bottom edge</li>
          <li><span class="goal-indicator"><span class="color-box red"></span> Red (AI)</span>: Connect the left edge to the right edge</li>
          <li>Take turns placing one piece on any empty cell</li>
          <li>First player to create a connected path between their two sides wins</li>
          <li>There are no draws in Hex - someone always wins!</li>
        </ul>
      </div>
    </section>

    <GameFaqs :faqs="game.faqs" />
    <RelatedGames :currentSlug="game.slug" :categories="game.categories" />

    <meta itemprop="url" :content="`https://games.muthu.co/posts/${game.slug}/`">
    <meta itemprop="image" :content="`https://games.muthu.co/posts/${game.slug}/thumbnail.png`">
    <meta itemprop="applicationCategory" content="Game">
    <meta itemprop="operatingSystem" content="Web Browser">
    <span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="display:none">
      <meta itemprop="price" content="0">
      <meta itemprop="priceCurrency" content="USD">
    </span>
  </article>
</template>

<script setup>
import { useGameLoader } from '../../composables/useGameLoader.js'
import { useGameSeo } from '../../composables/useGameSeo.js'
import Breadcrumb from '../../components/Breadcrumb.vue'
import GameFaqs from '../../components/GameFaqs.vue'
import RelatedGames from '../../components/RelatedGames.vue'

const game = {
  slug: 'hex',
  title: 'Hex Game - Connection Strategy Puzzle',
  shortTitle: 'Hex',
  description: 'Play Hex against AI. Connect your sides of the board before your opponent. A classic connection strategy game with simple rules but deep tactics.',
  metaDescription: 'Play Hex online free against AI. Connect your edges of the hexagonal board before your opponent. Classic strategy game invented by mathematicians with multiple board sizes.',
  thumbnail: 'thumbnail.png',
  categories: ['Strategy Games', 'Logic Games', 'Classic Games'],
  keywords: ['hex game', 'hex board game', 'connection game', 'strategy game', 'hexagonal game', 'Nash game', 'two player game', 'abstract strategy'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'What is the Hex game and how do you play?',
      answer: 'Hex is a two-player abstract strategy game played on a diamond-shaped hexagonal grid. One player (Blue) tries to connect the top edge to the bottom edge, while the other player (Red) tries to connect the left edge to the right edge. Players take turns placing one piece on any empty cell. The first player to create a connected path between their two sides wins. The game was invented independently by mathematician Piet Hein in 1942 and John Nash in 1948.'
    },
    {
      question: 'Is there always a winner in Hex?',
      answer: 'Yes! Unlike many strategy games, Hex cannot end in a draw. This is because the board can only be completely filled when one player has formed a winning connection. Mathematically, this is known as the "Hex theorem" - when the board is full, exactly one player must have a winning path.'
    },
    {
      question: 'What is a good strategy for Hex?',
      answer: 'Key strategies include: 1) Control the center of the board, as central positions connect to more cells. 2) Create "bridges" - pairs of cells that can be connected on your next turn regardless of your opponent\'s move. 3) Think ahead and visualize possible paths. 4) Block your opponent while building your own connection. The first player has a theoretical advantage, which is why the "swap rule" is sometimes used in competitive play.'
    },
    {
      question: 'What do the different difficulty levels mean?',
      answer: 'Easy: AI makes random moves. Medium: AI uses simple heuristics like preferring center positions and building connections. Hard: AI evaluates board positions more deeply, looking for winning moves and blocking opportunities. Larger board sizes (9x9, 11x11) provide more complex strategic depth.'
    }
  ]
}

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/' },
  { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
]

useGameLoader(game.slug, game.initCode)
useGameSeo(game)
</script>

<style scoped>
h1 { font-weight: 400; }
.game-section { min-height: 400px; }
</style>
