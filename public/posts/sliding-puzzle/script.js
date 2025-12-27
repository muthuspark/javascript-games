let board = [];
let emptyCell = { row: 0, col: 0 };
let moveCount = 0;
let currentLevel = 1;
let bestScores = {};
let isSolving = false;

const LEVEL_CONFIGS = {
    1: { rows: 3, cols: 3 },
    2: { rows: 3, cols: 4 },
    3: { rows: 4, cols: 4 },
    4: { rows: 4, cols: 5 },
    5: { rows: 5, cols: 5 },
    6: { rows: 5, cols: 6 },
    7: { rows: 6, cols: 6 },
    8: { rows: 6, cols: 7 },
    9: { rows: 7, cols: 7 },
    10: { rows: 7, cols: 8 }
};

function getGridSize() {
    return LEVEL_CONFIGS[currentLevel];
}

function createBoard() {
    const { rows, cols } = getGridSize();
    const boardElement = document.querySelector('.board');
    boardElement.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    boardElement.innerHTML = '';
    board = [];
    let counter = 1;

    // Calculate tile size based on grid dimensions
    const tileSize = Math.min(500 / Math.max(rows, cols), 80);
    const fontSize = Math.max(tileSize / 3, 16);

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.style.width = `${tileSize}px`;
            tile.style.fontSize = `${fontSize}px`;

            if (i === rows - 1 && j === cols - 1) {
                tile.classList.add('empty');
                board[i][j] = 0;
                emptyCell = { row: i, col: j };
            } else {
                tile.textContent = counter;
                board[i][j] = counter;
                counter++;
            }

            tile.addEventListener('click', () => handleTileClick(i, j));
            boardElement.appendChild(tile);
        }
    }
    updateBoardDisplay();
}

function handleTileClick(row, col) {
    if (isAdjacent(row, col, emptyCell.row, emptyCell.col)) {
        moveTile(row, col);
        moveCount++;
        document.getElementById('moveCount').textContent = moveCount;

        if (checkWin()) {
            const currentBest = bestScores[currentLevel] || Infinity;
            if (moveCount < currentBest) {
                bestScores[currentLevel] = moveCount;
                updateBestScore();
            }
            showWinMessage('You solved this level! Try beating your best score.');
        }
    }
}

function isAdjacent(row1, col1, row2, col2) {
    return (Math.abs(row1 - row2) === 1 && col1 === col2) ||
        (Math.abs(col1 - col2) === 1 && row1 === row2);
}

function moveTile(row, col) {
    board[emptyCell.row][emptyCell.col] = board[row][col];
    board[row][col] = 0;
    emptyCell = { row, col };
    updateBoardDisplay();
}

function updateBoardDisplay() {
    const tiles = document.querySelectorAll('.tile');
    let index = 0;
    const { rows, cols } = getGridSize();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const tile = tiles[index];
            if (board[i][j] === 0) {
                tile.textContent = '';
                tile.classList.add('empty');
            } else {
                tile.textContent = board[i][j];
                tile.classList.remove('empty');
            }
            index++;
        }
    }
}

function checkWin() {
    const { rows, cols } = getGridSize();
    let counter = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i === rows - 1 && j === cols - 1) {
                if (board[i][j] !== 0) return false;
            } else {
                if (board[i][j] !== counter) return false;
                counter++;
            }
        }
    }
    return true;
}

function shuffleBoard() {
    const { rows, cols } = getGridSize();
    const moves = rows * cols * 20; // More shuffles for larger boards

    if (rows >= 4 && cols >= 4) {
        document.getElementById('solveButton').style.display = 'none';
    } else {
        document.getElementById('solveButton').style.display = 'block';
    }
    for (let i = 0; i < moves; i++) {
        const possibleMoves = [];

        if (emptyCell.row > 0) possibleMoves.push({ row: emptyCell.row - 1, col: emptyCell.col });
        if (emptyCell.row < rows - 1) possibleMoves.push({ row: emptyCell.row + 1, col: emptyCell.col });
        if (emptyCell.col > 0) possibleMoves.push({ row: emptyCell.row, col: emptyCell.col - 1 });
        if (emptyCell.col < cols - 1) possibleMoves.push({ row: emptyCell.row, col: emptyCell.col + 1 });

        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        moveTile(randomMove.row, randomMove.col);
    }

    moveCount = 0;
    document.getElementById('moveCount').textContent = moveCount;
    hideWinMessage();
}

function changeLevel() {
    currentLevel = parseInt(document.getElementById('levelSelect').value);
    newGame();
}

function updateBestScore() {
    const bestScoreElement = document.getElementById('bestScore');
    bestScoreElement.textContent = bestScores[currentLevel] || '-';
}



function newGame() {
    createBoard();
    shuffleBoard();
    updateBestScore();
}

// New solver-related code
class PuzzleNode {
    constructor(board, empty, g, parent = null, lastMove = null) {
        this.board = board.map(row => [...row]);
        this.empty = { ...empty };
        this.g = g; // cost to reach this node
        this.h = this.calculateHeuristic(); // estimated cost to goal
        this.f = this.g + this.h; // total estimated cost
        this.parent = parent;
        this.lastMove = lastMove;
    }

    calculateHeuristic() {
        let distance = 0;
        const { rows, cols } = getGridSize();
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const value = this.board[i][j];
                if (value !== 0) {
                    const targetRow = Math.floor((value - 1) / cols);
                    const targetCol = (value - 1) % cols;
                    distance += Math.abs(i - targetRow) + Math.abs(j - targetCol);
                }
            }
        }
        return distance;
    }

    getKey() {
        return this.board.flat().join(',');
    }

    getPossibleMoves() {
        const moves = [];
        const { rows, cols } = getGridSize();
        const directions = [
            [-1, 0, 'up'],
            [1, 0, 'down'],
            [0, -1, 'left'],
            [0, 1, 'right']
        ];

        for (const [dx, dy, direction] of directions) {
            const newRow = this.empty.row + dx;
            const newCol = this.empty.col + dy;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                moves.push({ row: newRow, col: newCol, direction });
            }
        }

        return moves;
    }
}

async function findSolution() {
    const startNode = new PuzzleNode(board, emptyCell, 0);
    const openSet = [startNode];
    const closedSet = new Set();

    while (openSet.length > 0) {
        const current = openSet.reduce((min, node) =>
            node.f < min.f ? node : min, openSet[0]);

        if (current.h === 0) {
            return reconstructPath(current);
        }

        openSet.splice(openSet.indexOf(current), 1);
        closedSet.add(current.getKey());

        for (const move of current.getPossibleMoves()) {
            const newBoard = current.board.map(row => [...row]);
            const value = newBoard[move.row][move.col];
            newBoard[current.empty.row][current.empty.col] = value;
            newBoard[move.row][move.col] = 0;

            const newNode = new PuzzleNode(
                newBoard,
                { row: move.row, col: move.col },
                current.g + 1,
                current,
                { row: move.row, col: move.col }
            );

            if (closedSet.has(newNode.getKey())) continue;

            const existingOpen = openSet.find(node =>
                node.getKey() === newNode.getKey()
            );

            if (!existingOpen) {
                openSet.push(newNode);
            } else if (newNode.g < existingOpen.g) {
                existingOpen.g = newNode.g;
                existingOpen.f = newNode.f;
                existingOpen.parent = current;
            }
        }
    }

    return null;
}

function reconstructPath(node) {
    const path = [];
    let current = node;

    while (current.parent) {
        path.unshift(current.lastMove);
        current = current.parent;
    }

    return path;
}

async function animateMove(move) {
    return new Promise(resolve => {
        const tiles = document.querySelectorAll('.tile');
        const { rows, cols } = getGridSize();
        const index = move.row * cols + move.col;
        const tile = tiles[index];

        tile.classList.add('highlight');
        setTimeout(() => {
            moveTile(move.row, move.col);
            tile.classList.remove('highlight');
            resolve();
        }, 300);
    });
}

async function startSolving() {
    if (isSolving) return;

    const solveButton = document.getElementById('solveButton');
    const solvingStatus = document.getElementById('solvingStatus');
    solveButton.disabled = true;
    solvingStatus.style.display = 'block';
    isSolving = true;
    solvingStatus.textContent = 'Thinking...';
    try {
        const solution = await findSolution();
        if (solution) {
            for (const move of solution) {
                await animateMove(move);
                await new Promise(resolve => setTimeout(resolve, 300));
            }
            solvingStatus.textContent = `Solved in ${solution.length} moves!`;
        } else {
            solvingStatus.textContent = 'No solution found!';
        }
    } catch (error) {
        console.error('Solving error:', error);
        solvingStatus.textContent = 'Error solving puzzle!';
    }

    isSolving = false;
    solveButton.disabled = false;
}