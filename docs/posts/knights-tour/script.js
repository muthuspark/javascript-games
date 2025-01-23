const BOARD_SIZE = 8;
let currentPosition = null;
let visitedPositions = new Set();
let moveCount = 0;
// let startTime = null;
// let timerInterval = null;
let bestScores = JSON.parse(localStorage.getItem('knightsTourBestScores')) || [];

// Knight's possible moves
const MOVES = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
];

function initializeGame() {
    currentPosition = [0, 0];
    visitedPositions = new Set([positionToKey(currentPosition)]);
    moveCount = 1;
    startTime = Date.now();
    // updateTimer();
    // timerInterval = setInterval(updateTimer, 1000);
    renderBoard();
    displayBestScores();
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = `Time: ${elapsed}s`;
}

function positionToKey([row, col]) {
    return `${row},${col}`;
}

function getPossibleMoves([row, col]) {
    return MOVES.map(([dr, dc]) => [row + dr, col + dc])
        .filter(([r, c]) =>
            r >= 0 && r < BOARD_SIZE &&
            c >= 0 && c < BOARD_SIZE &&
            !visitedPositions.has(positionToKey([r, c]))
        );
}

function handleMove(row, col) {
    const possibleMoves = getPossibleMoves(currentPosition);
    const isValidMove = possibleMoves.some(([r, c]) => r === row && c === col);

    if (isValidMove) {
        currentPosition = [row, col];
        visitedPositions.add(positionToKey(currentPosition));
        moveCount++;
        renderBoard();

        if (visitedPositions.size === BOARD_SIZE * BOARD_SIZE) {
            handleWin();
        } else if (getPossibleMoves(currentPosition).length === 0) {
            handleLoss();
        }
    }
}

function handleWin() {
    // clearInterval(timerInterval);
    // const time = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('status').textContent =
        `Congratulations! You completed the tour!`;

    // updateBestScores(time);
    // displayBestScores();
}

function handleLoss() {
    // clearInterval(timerInterval);
    document.getElementById('status').textContent =
        'No more moves available. Game Over!';
}

function renderBoard() {
    const board = document.getElementById('board');
    board.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 60px)`;
    board.innerHTML = '';

    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            const cell = document.createElement('div');
            cell.className = `cell ${(row + col) % 2 === 0 ? 'light' : 'dark'}`;

            const posKey = positionToKey([row, col]);
            if (visitedPositions.has(posKey)) {
                cell.classList.add('visited');
                if (visitedPositions.has(posKey)) {
                    const moveNumber = Array.from(visitedPositions)
                        .indexOf(posKey) + 1;
                    const numberDiv = document.createElement('div');
                    numberDiv.className = 'move-number';
                    numberDiv.textContent = moveNumber;
                    cell.appendChild(numberDiv);
                }
            }

            if (currentPosition[0] === row && currentPosition[1] === col) {
                cell.classList.add('current');
                cell.classList.add('knight');
            }

            const possibleMoves = getPossibleMoves(currentPosition);
            if (possibleMoves.some(([r, c]) => r === row && c === col)) {
                cell.classList.add('possible-move');
            }

            cell.onclick = () => handleMove(row, col);
            board.appendChild(cell);
        }
    }
}

function updateBestScores(time) {
    bestScores.push(time);
    bestScores.sort((a, b) => a - b);
    bestScores = bestScores.slice(0, 5);
    localStorage.setItem('knightsTourBestScores', JSON.stringify(bestScores));
}

function displayBestScores() {
    const scoresDiv = document.getElementById('bestScores');
    if (bestScores.length === 0) {
        scoresDiv.textContent = 'No scores yet';
        return;
    }

    scoresDiv.innerHTML = bestScores
        .map((time, index) => `#${index + 1}: ${time}s`)
        .join('<br>');
}

function showHint() {
    const possibleMoves = getPossibleMoves(currentPosition);
    if (possibleMoves.length === 0) return;

    // Use Warnsdorff's rule to find the best move
    const bestMove = possibleMoves.reduce((best, move) => {
        const nextMoves = getPossibleMoves(move).length;
        return (!best || nextMoves < getPossibleMoves(best).length) ? move : best;
    });

    const [row, col] = bestMove;
    const cells = document.querySelectorAll('.cell');
    cells[row * BOARD_SIZE + col].style.backgroundColor = '#ff9800';
    setTimeout(() => renderBoard(), 1000);
}

function resetGame() {
    // clearInterval(timerInterval);
    document.getElementById('status').textContent = '';
    initializeGame();
}