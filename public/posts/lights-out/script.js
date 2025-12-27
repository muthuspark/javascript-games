(function() {
const LEVEL_CONFIGS = {
    1: { size: 3, shuffles: 3 },
    2: { size: 4, shuffles: 5 },
    3: { size: 5, shuffles: 8 },
    4: { size: 6, shuffles: 12 },
    5: { size: 7, shuffles: 15 }
};

let currentLevel = 3;
let grid = [];
let moves = 0;
let bestScores = {};
let gameWon = false;

function getConfig() {
    return LEVEL_CONFIGS[currentLevel];
}

function createGrid() {
    const config = getConfig();
    const board = document.getElementById('board');
    board.style.gridTemplateColumns = `repeat(${config.size}, 1fr)`;
    board.innerHTML = '';

    grid = [];
    for (let i = 0; i < config.size; i++) {
        grid[i] = [];
        for (let j = 0; j < config.size; j++) {
            grid[i][j] = false;
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', () => handleClick(i, j));
            board.appendChild(cell);
        }
    }
}

function handleClick(row, col) {
    if (gameWon) return;

    toggleLight(row, col);
    toggleLight(row - 1, col);
    toggleLight(row + 1, col);
    toggleLight(row, col - 1);
    toggleLight(row, col + 1);

    moves++;
    updateMoves();
    updateDisplay();
    checkWin();
}

function toggleLight(row, col) {
    const config = getConfig();
    if (row < 0 || row >= config.size || col < 0 || col >= config.size) {
        return;
    }
    grid[row][col] = !grid[row][col];
}

function updateDisplay() {
    const config = getConfig();
    const cells = document.querySelectorAll('.cell');
    let index = 0;

    for (let i = 0; i < config.size; i++) {
        for (let j = 0; j < config.size; j++) {
            if (grid[i][j]) {
                cells[index].classList.add('on');
            } else {
                cells[index].classList.remove('on');
            }
            index++;
        }
    }
}

function checkWin() {
    const config = getConfig();
    for (let i = 0; i < config.size; i++) {
        for (let j = 0; j < config.size; j++) {
            if (grid[i][j]) return;
        }
    }

    gameWon = true;
    const currentBest = bestScores[currentLevel];
    if (!currentBest || moves < currentBest) {
        bestScores[currentLevel] = moves;
        updateBestScore();
    }
    showMessage(`You won in ${moves} moves!`);
}

function shuffleGrid() {
    const config = getConfig();

    // Start with all lights off
    for (let i = 0; i < config.size; i++) {
        for (let j = 0; j < config.size; j++) {
            grid[i][j] = false;
        }
    }

    // Make random valid moves to ensure puzzle is solvable
    for (let i = 0; i < config.shuffles; i++) {
        const row = Math.floor(Math.random() * config.size);
        const col = Math.floor(Math.random() * config.size);

        toggleLight(row, col);
        toggleLight(row - 1, col);
        toggleLight(row + 1, col);
        toggleLight(row, col - 1);
        toggleLight(row, col + 1);
    }

    // Make sure at least one light is on
    let hasLight = false;
    for (let i = 0; i < config.size && !hasLight; i++) {
        for (let j = 0; j < config.size && !hasLight; j++) {
            if (grid[i][j]) hasLight = true;
        }
    }

    if (!hasLight) {
        // If all lights are off, do one more toggle
        const row = Math.floor(Math.random() * config.size);
        const col = Math.floor(Math.random() * config.size);
        toggleLight(row, col);
        toggleLight(row - 1, col);
        toggleLight(row + 1, col);
        toggleLight(row, col - 1);
        toggleLight(row, col + 1);
    }

    updateDisplay();
}

function updateMoves() {
    document.getElementById('moveCount').textContent = moves;
}

function updateBestScore() {
    const best = bestScores[currentLevel];
    document.getElementById('bestScore').textContent = best ? best + ' moves' : '-';
}

function showMessage(text) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.style.display = 'block';
}

function hideMessage() {
    document.getElementById('message').style.display = 'none';
}

function countLightsOn() {
    const config = getConfig();
    let count = 0;
    for (let i = 0; i < config.size; i++) {
        for (let j = 0; j < config.size; j++) {
            if (grid[i][j]) count++;
        }
    }
    return count;
}

function updateLightsCount() {
    document.getElementById('lightsOn').textContent = countLightsOn();
}

function changeLevel() {
    currentLevel = parseInt(document.getElementById('levelSelect').value);
    newGame();
}

function newGame() {
    moves = 0;
    gameWon = false;
    createGrid();
    shuffleGrid();
    updateMoves();
    updateBestScore();
    updateLightsCount();
    hideMessage();
}

// Update lights count after each move
const originalHandleClick = handleClick;
window.handleClickWrapper = function(row, col) {
    originalHandleClick(row, col);
    updateLightsCount();
};

// Override to update count
const board = document.getElementById('board');
if (board) {
    board.addEventListener('click', function(e) {
        if (e.target.classList.contains('cell')) {
            updateLightsCount();
        }
    });
}

window.newGame = newGame;
window.changeLevel = changeLevel;
})();
