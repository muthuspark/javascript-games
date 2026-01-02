(function() {
  let board = [];
  let solution = [];
  let size = 6;
  let currentDifficulty = 'easy';
  let timerInterval;
  let startTime;

  const difficulties = {
    easy: { size: 6, cellsToRemove: 12 },
    medium: { size: 8, cellsToRemove: 24 },
    hard: { size: 10, cellsToRemove: 40 }
  };

  function setDifficulty(difficulty) {
    currentDifficulty = difficulty;
    document.querySelectorAll('.difficulty').forEach(button => {
      button.classList.remove('selected');
    });
    document.querySelector(`.difficulty.${difficulty}`).classList.add('selected');
    newGame();
  }

  function generateSolution(n) {
    // Generate a valid binary puzzle solution
    const grid = Array(n).fill(null).map(() => Array(n).fill(-1));

    if (solve(grid, n, 0, 0)) {
      return grid;
    }
    return null;
  }

  function solve(grid, n, row, col) {
    if (row === n) return true;

    const nextRow = col === n - 1 ? row + 1 : row;
    const nextCol = col === n - 1 ? 0 : col + 1;

    // Try placing 0 and 1 in random order
    const values = Math.random() < 0.5 ? [0, 1] : [1, 0];

    for (const val of values) {
      grid[row][col] = val;
      if (isValidPlacement(grid, n, row, col) && solve(grid, n, nextRow, nextCol)) {
        return true;
      }
    }

    grid[row][col] = -1;
    return false;
  }

  function isValidPlacement(grid, n, row, col) {
    const val = grid[row][col];
    if (val === -1) return true;

    // Check for more than 2 consecutive same values in row
    if (col >= 2 && grid[row][col-1] === val && grid[row][col-2] === val) return false;

    // Check for more than 2 consecutive same values in column
    if (row >= 2 && grid[row-1][col] === val && grid[row-2][col] === val) return false;

    // Count values in row
    let rowCount0 = 0, rowCount1 = 0;
    for (let c = 0; c < n; c++) {
      if (grid[row][c] === 0) rowCount0++;
      if (grid[row][c] === 1) rowCount1++;
    }
    if (rowCount0 > n / 2 || rowCount1 > n / 2) return false;

    // Count values in column
    let colCount0 = 0, colCount1 = 0;
    for (let r = 0; r < n; r++) {
      if (grid[r][col] === 0) colCount0++;
      if (grid[r][col] === 1) colCount1++;
    }
    if (colCount0 > n / 2 || colCount1 > n / 2) return false;

    // Check row uniqueness only when row is complete
    const isRowComplete = grid[row].every(v => v !== -1);
    if (isRowComplete) {
      for (let r = 0; r < row; r++) {
        if (grid[r].every(v => v !== -1) && arraysEqual(grid[r], grid[row])) {
          return false;
        }
      }
    }

    // Check column uniqueness only when column is complete
    const isColComplete = grid.every(r => r[col] !== -1);
    if (isColComplete) {
      for (let c = 0; c < col; c++) {
        const colComplete = grid.every(r => r[c] !== -1);
        if (colComplete) {
          let same = true;
          for (let r = 0; r < n; r++) {
            if (grid[r][c] !== grid[r][col]) {
              same = false;
              break;
            }
          }
          if (same) return false;
        }
      }
    }

    return true;
  }

  function arraysEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function createPuzzle() {
    const config = difficulties[currentDifficulty];
    size = config.size;

    // Generate solution
    solution = generateSolution(size);

    // Copy solution to board
    board = solution.map(row => [...row]);

    // Remove cells to create puzzle
    let removed = 0;
    const positions = [];
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        positions.push([r, c]);
      }
    }

    // Shuffle positions
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    for (const [r, c] of positions) {
      if (removed >= config.cellsToRemove) break;
      board[r][c] = -1;
      removed++;
    }
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    const timerElement = document.getElementById('timer');
    if (!timerElement) {
      clearInterval(timerInterval);
      return;
    }
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    timerElement.textContent =
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function renderBoard() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    gridElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = r;
        cell.dataset.col = c;

        if (board[r][c] !== -1) {
          cell.textContent = board[r][c];
          cell.classList.add('given');
        } else {
          cell.addEventListener('click', () => handleCellClick(r, c));
        }

        gridElement.appendChild(cell);
      }
    }
  }

  function handleCellClick(row, col) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    const currentValue = cell.textContent;

    // Cycle through empty -> 0 -> 1 -> empty
    if (currentValue === '') {
      cell.textContent = '0';
      board[row][col] = 0;
    } else if (currentValue === '0') {
      cell.textContent = '1';
      board[row][col] = 1;
    } else {
      cell.textContent = '';
      board[row][col] = -1;
    }

    validateBoard();
    checkSolution();
  }

  function validateBoard() {
    // Clear all error highlights
    document.querySelectorAll('.cell').forEach(cell => {
      cell.classList.remove('invalid');
    });

    const errors = new Set();

    // Check rows
    for (let r = 0; r < size; r++) {
      // Check consecutive values
      for (let c = 0; c < size - 2; c++) {
        if (board[r][c] !== -1 && board[r][c] === board[r][c+1] && board[r][c] === board[r][c+2]) {
          errors.add(`${r},${c}`);
          errors.add(`${r},${c+1}`);
          errors.add(`${r},${c+2}`);
        }
      }

      // Check count
      let count0 = 0, count1 = 0;
      for (let c = 0; c < size; c++) {
        if (board[r][c] === 0) count0++;
        if (board[r][c] === 1) count1++;
      }
      if (count0 > size / 2 || count1 > size / 2) {
        for (let c = 0; c < size; c++) {
          if (board[r][c] !== -1) errors.add(`${r},${c}`);
        }
      }
    }

    // Check columns
    for (let c = 0; c < size; c++) {
      // Check consecutive values
      for (let r = 0; r < size - 2; r++) {
        if (board[r][c] !== -1 && board[r][c] === board[r+1][c] && board[r][c] === board[r+2][c]) {
          errors.add(`${r},${c}`);
          errors.add(`${r+1},${c}`);
          errors.add(`${r+2},${c}`);
        }
      }

      // Check count
      let count0 = 0, count1 = 0;
      for (let r = 0; r < size; r++) {
        if (board[r][c] === 0) count0++;
        if (board[r][c] === 1) count1++;
      }
      if (count0 > size / 2 || count1 > size / 2) {
        for (let r = 0; r < size; r++) {
          if (board[r][c] !== -1) errors.add(`${r},${c}`);
        }
      }
    }

    // Check duplicate rows
    for (let r1 = 0; r1 < size; r1++) {
      if (board[r1].some(v => v === -1)) continue;
      for (let r2 = r1 + 1; r2 < size; r2++) {
        if (board[r2].some(v => v === -1)) continue;
        if (arraysEqual(board[r1], board[r2])) {
          for (let c = 0; c < size; c++) {
            errors.add(`${r1},${c}`);
            errors.add(`${r2},${c}`);
          }
        }
      }
    }

    // Check duplicate columns
    for (let c1 = 0; c1 < size; c1++) {
      const col1 = board.map(row => row[c1]);
      if (col1.some(v => v === -1)) continue;
      for (let c2 = c1 + 1; c2 < size; c2++) {
        const col2 = board.map(row => row[c2]);
        if (col2.some(v => v === -1)) continue;
        if (arraysEqual(col1, col2)) {
          for (let r = 0; r < size; r++) {
            errors.add(`${r},${c1}`);
            errors.add(`${r},${c2}`);
          }
        }
      }
    }

    // Apply error highlighting
    errors.forEach(key => {
      const [r, c] = key.split(',');
      const cell = document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
      if (cell && !cell.classList.contains('given')) {
        cell.classList.add('invalid');
      }
    });
  }

  function checkSolution() {
    // Check if board is complete
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === -1) return;
      }
    }

    // Check if solution matches
    let correct = true;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] !== solution[r][c]) {
          correct = false;
          break;
        }
      }
      if (!correct) break;
    }

    // Even if it doesn't match our solution, check if it's valid
    if (!correct) {
      correct = isValidComplete(board);
    }

    if (correct) {
      clearInterval(timerInterval);
      const timeStr = document.getElementById('timer').textContent;
      GamePopup.show({
        title: 'Congratulations!',
        message: `You solved the ${currentDifficulty} ${size}x${size} Binary Puzzle in ${timeStr}!`,
        showConfetti: true
      });
    }
  }

  function isValidComplete(grid) {
    const n = grid.length;

    // Check rows
    for (let r = 0; r < n; r++) {
      let count0 = 0, count1 = 0;
      for (let c = 0; c < n; c++) {
        if (grid[r][c] === 0) count0++;
        if (grid[r][c] === 1) count1++;
        // Check consecutive
        if (c >= 2 && grid[r][c] === grid[r][c-1] && grid[r][c] === grid[r][c-2]) {
          return false;
        }
      }
      if (count0 !== n / 2 || count1 !== n / 2) return false;
    }

    // Check columns
    for (let c = 0; c < n; c++) {
      let count0 = 0, count1 = 0;
      for (let r = 0; r < n; r++) {
        if (grid[r][c] === 0) count0++;
        if (grid[r][c] === 1) count1++;
        // Check consecutive
        if (r >= 2 && grid[r][c] === grid[r-1][c] && grid[r][c] === grid[r-2][c]) {
          return false;
        }
      }
      if (count0 !== n / 2 || count1 !== n / 2) return false;
    }

    // Check unique rows
    for (let r1 = 0; r1 < n; r1++) {
      for (let r2 = r1 + 1; r2 < n; r2++) {
        if (arraysEqual(grid[r1], grid[r2])) return false;
      }
    }

    // Check unique columns
    for (let c1 = 0; c1 < n; c1++) {
      for (let c2 = c1 + 1; c2 < n; c2++) {
        let same = true;
        for (let r = 0; r < n; r++) {
          if (grid[r][c1] !== grid[r][c2]) {
            same = false;
            break;
          }
        }
        if (same) return false;
      }
    }

    return true;
  }

  function newGame() {
    createPuzzle();
    renderBoard();
    document.getElementById('message').textContent = '';
    startTimer();
  }

  // Expose functions to window for onclick handlers
  window.setDifficulty = setDifficulty;
  window.newGame = newGame;
})();
