let board = [];
let gameConfig = {
    easy: { rows: 9, cols: 9, mines: 10 },
    medium: { rows: 16, cols: 16, mines: 40 },
    hard: { rows: 16, cols: 30, mines: 99 }
};
let currentConfig;
let gameOver = false;
let flagsPlaced = 0;
let revealedCells = 0;

function setDifficulty(level) {
    currentConfig = gameConfig[level];
    initGame();
}

function initGame() {
    if (!currentConfig) {
        currentConfig = gameConfig.easy;
    }
    
    gameOver = false;
    flagsPlaced = 0;
    revealedCells = 0;
    board = [];
    
    // Initialize empty board
    for (let i = 0; i < currentConfig.rows; i++) {
        board[i] = [];
        for (let j = 0; j < currentConfig.cols; j++) {
            board[i][j] = {
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                neighborMines: 0
            };
        }
    }

    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < currentConfig.mines) {
        const row = Math.floor(Math.random() * currentConfig.rows);
        const col = Math.floor(Math.random() * currentConfig.cols);
        if (!board[row][col].isMine) {
            board[row][col].isMine = true;
            minesPlaced++;
        }
    }

    // Calculate neighbor mines
    for (let row = 0; row < currentConfig.rows; row++) {
        for (let col = 0; col < currentConfig.cols; col++) {
            if (!board[row][col].isMine) {
                board[row][col].neighborMines = countNeighborMines(row, col);
            }
        }
    }

    updateBoard();
    updateStatus();
}

function countNeighborMines(row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < currentConfig.rows &&
                newCol >= 0 && newCol < currentConfig.cols &&
                board[newRow][newCol].isMine) {
                count++;
            }
        }
    }
    return count;
}

function updateBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.style.gridTemplateColumns = `repeat(${currentConfig.cols}, 30px)`;
    gameBoard.innerHTML = '';

    for (let row = 0; row < currentConfig.rows; row++) {
        for (let col = 0; col < currentConfig.cols; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            if (board[row][col].isRevealed) {
                cell.classList.add('revealed');
                if (board[row][col].isMine) {
                    cell.classList.add('mine');
                } else if (board[row][col].neighborMines > 0) {
                    cell.textContent = board[row][col].neighborMines;
                    cell.classList.add(`n${board[row][col].neighborMines}`);
                }
            } else if (board[row][col].isFlagged) {
                cell.classList.add('flag');
            }

            cell.addEventListener('click', handleLeftClick);
            cell.addEventListener('contextmenu', handleRightClick);
            gameBoard.appendChild(cell);
        }
    }
}

function handleLeftClick(event) {
    if (gameOver) return;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    
    if (!board[row][col].isFlagged) {
        revealCell(row, col);
        updateBoard();
        checkWinCondition();
    }
}

function handleRightClick(event) {
    event.preventDefault();
    if (gameOver) return;
    
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    
    if (!board[row][col].isRevealed) {
        toggleFlag(row, col);
        updateBoard();
        updateStatus();
    }
}

function revealCell(row, col) {
    if (board[row][col].isRevealed || board[row][col].isFlagged) return;

    board[row][col].isRevealed = true;
    revealedCells++;

    if (board[row][col].isMine) {
        gameOver = true;
        revealAllMines();
        updateStatus('Game Over!');
        return;
    }

    if (board[row][col].neighborMines === 0) {
        // Reveal neighboring cells
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newRow = row + i;
                const newCol = col + j;
                if (newRow >= 0 && newRow < currentConfig.rows &&
                    newCol >= 0 && newCol < currentConfig.cols) {
                    revealCell(newRow, newCol);
                }
            }
        }
    }
}

function toggleFlag(row, col) {
    if (!board[row][col].isFlagged && flagsPlaced >= currentConfig.mines) return;
    
    board[row][col].isFlagged = !board[row][col].isFlagged;
    flagsPlaced += board[row][col].isFlagged ? 1 : -1;
}

function revealAllMines() {
    for (let row = 0; row < currentConfig.rows; row++) {
        for (let col = 0; col < currentConfig.cols; col++) {
            if (board[row][col].isMine) {
                board[row][col].isRevealed = true;
            }
        }
    }
}

function checkWinCondition() {
    const totalCells = currentConfig.rows * currentConfig.cols;
    const targetRevealed = totalCells - currentConfig.mines;
    
    if (revealedCells === targetRevealed && !gameOver) {
        gameOver = true;
        updateStatus('You Won! 🎉');
    }
}

function updateStatus(message) {
    const statusDiv = document.getElementById('status');
    const mineCountDiv = document.getElementById('mine-count');
    
    mineCountDiv.textContent = `Mines: ${currentConfig.mines - flagsPlaced}`;
    statusDiv.textContent = message || '';
}
