let currentPlayer = 'X';
let gameState = [];
let gameActive = true;
let size = 3;
let difficulty = 'easy';

function initializeGame() {
    size = parseInt(document.getElementById('gridSize').value);
    difficulty = document.getElementById('difficulty').value;
    gameState = Array(size * size).fill('');
    gameActive = true;
    currentPlayer = 'X';

    // Update grid CSS
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.style.gridTemplateColumns = `repeat(${size}, 60px)`;

    // Create cells
    gameBoard.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', () => handleCellClick(i));
        gameBoard.appendChild(cell);
    }

    updateStatus(`Player ${currentPlayer}'s turn`);
}

function handleCellClick(index) {
    if (!gameActive || gameState[index] !== '') return;

    makeMove(index);

    if (gameActive) {
        currentPlayer = 'O';
        updateStatus('Computer is thinking...');
        setTimeout(computerMove, 500);
    }
}

function makeMove(index) {
    gameState[index] = currentPlayer;
    document.querySelector(`[data-index="${index}"]`).textContent = currentPlayer;

    if (checkWinner()) {
        gameActive = false;
        updateStatus(`Player ${currentPlayer} wins!`);
        return;
    }

    if (!gameState.includes('')) {
        gameActive = false;
        updateStatus("It's a draw!");
        return;
    }
}

function computerMove() {
    if (!gameActive) return;

    let move;
    switch (difficulty) {
        case 'easy':
            move = makeEasyMove();
            break;
        case 'medium':
            move = Math.random() < 0.5 ? makeSmartMove() : makeEasyMove();
            break;
        case 'hard':
            move = makeSmartMove();
            break;
    }

    makeMove(move);
    currentPlayer = 'X';
    if (gameActive) {
        updateStatus(`Player ${currentPlayer}'s turn`);
    }
}

function makeEasyMove() {
    const emptyCells = gameState.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
    }, []);
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function makeSmartMove() {
    // First try to win
    const winMove = findWinningMove('O');
    if (winMove !== -1) return winMove;

    // Then block player from winning
    const blockMove = findWinningMove('X');
    if (blockMove !== -1) return blockMove;

    // Try to take center if available
    const center = Math.floor(size * size / 2);
    if (gameState[center] === '') return center;

    // Take corners if available
    const corners = [0, size - 1, size * (size - 1), size * size - 1];
    const emptyCorners = corners.filter(corner => gameState[corner] === '');
    if (emptyCorners.length > 0) {
        return emptyCorners[Math.floor(Math.random() * emptyCorners.length)];
    }

    // Take any available space
    return makeEasyMove();
}

function findWinningMove(player) {
    // Check each empty cell
    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] === '') {
            gameState[i] = player;
            if (checkWinner()) {
                gameState[i] = '';
                return i;
            }
            gameState[i] = '';
        }
    }
    return -1;
}

function checkWinner() {
    // Check rows
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(gameState[i * size + j]);
        }
        if (checkLine(row)) return true;
    }

    // Check columns
    for (let i = 0; i < size; i++) {
        let column = [];
        for (let j = 0; j < size; j++) {
            column.push(gameState[j * size + i]);
        }
        if (checkLine(column)) return true;
    }

    // Check diagonals
    let diagonal1 = [];
    let diagonal2 = [];
    for (let i = 0; i < size; i++) {
        diagonal1.push(gameState[i * size + i]);
        diagonal2.push(gameState[i * size + (size - 1 - i)]);
    }
    if (checkLine(diagonal1) || checkLine(diagonal2)) return true;

    return false;
}

function checkLine(line) {
    return line.every(cell => cell === line[0] && cell !== '');
}

function updateStatus(message) {
    document.getElementById('status').textContent = message;
}

function startNewGame() {
    initializeGame();
}
