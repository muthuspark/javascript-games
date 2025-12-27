let gameSize = 3;
let board = [];
let solution = [];
let magicSum = 0;
let hintsUsed = 0;

function setDifficulty(size) {
    gameSize = size;
    initGame();
}

function calculateMagicSum(n) {
    return n * (n * n + 1) / 2;
}


function rotateMatrix(matrix) {
    let n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}


function generateSolution(size) {
    let matrix = Array(size).fill().map(() => Array(size).fill(0));
    let number = 1;

    switch (size) {
        case 3:
            // Use the Siamese method for 3x3
            matrix[0] = [2, 7, 6];
            matrix[1] = [9, 5, 1];
            matrix[2] = [4, 3, 8];
            const rotations = Math.floor(Math.random() * 3);
            for (let i = 0; i < rotations; i++) {
                matrix = rotateMatrix(matrix);
            }
            return matrix;
        case 4:
            // Strachey's method for 4x4
            for (let row = 0; row < size; row++) {
                for (let col = 0; col < size; col++) {
                    matrix[row][col] = number;
                    number++;
                }
            }

            // Swap corners using Strachey's method for doubly even squares
            for (let i = 0; i < size / 4; i++) {
                for (let j = 0; j < size / 4; j++) {
                    matrix[i][j] = number - matrix[i][j];
                    matrix[i][size - j - 1] = number - matrix[i][size - j - 1];
                    matrix[size - i - 1][j] = number - matrix[size - i - 1][j];
                    matrix[size - i - 1][size - j - 1] = number - matrix[size - i - 1][size - j - 1];
                }
            }

            return matrix;
        case 5:
            // Use the Siamese method for 5x5
            let row = 0;
            let col = Math.floor(size / 2);

            while (number <= size * size) {
                if (row < 0 && col >= size) {
                    row += 2;
                    col--;
                } else {
                    if (row < 0) row = size - 1;
                    if (col >= size) col = 0;
                }

                if (matrix[row][col] !== 0) {
                    row += 2;
                    col--;
                    continue;
                }

                matrix[row][col] = number;
                number++;
                row--;
                col++;
            }

            return matrix;
    }
}

function initGame() {
    solution = generateSolution(gameSize);
    magicSum = calculateMagicSum(gameSize);
    board = Array(gameSize).fill().map(() => Array(gameSize).fill(0));
    hintsUsed = 0;

    // Prefill some cells (about 30% of the board)
    const cellsToFill = Math.floor(gameSize * gameSize * 0.3);
    for (let i = 0; i < cellsToFill; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * gameSize);
            col = Math.floor(Math.random() * gameSize);
        } while (board[row][col] !== 0);
        board[row][col] = solution[row][col];
    }

    updateBoard();
    document.getElementById('magic-sum').textContent = magicSum;
    updateStatus('Game started! Fill in the numbers to make all rows, columns, and diagonals sum to ' + magicSum);
}

function updateBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.style.gridTemplateColumns = `repeat(${gameSize}, 60px)`;
    gameBoard.innerHTML = '';

    for (let row = 0; row < gameSize; row++) {
        for (let col = 0; col < gameSize; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            if (board[row][col] === 0) {
                const input = document.createElement('input');
                input.type = 'number';
                input.min = '1';
                input.max = (gameSize * gameSize).toString();
                input.dataset.row = row;
                input.dataset.col = col;
                input.addEventListener('input', handleInput);
                cell.appendChild(input);
            } else {
                cell.textContent = board[row][col];
            }

            gameBoard.appendChild(cell);
        }
    }

    checkBoard();
}

function handleInput(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    const value = parseInt(event.target.value) || 0;

    if (value >= 1 && value <= gameSize * gameSize) {
        board[row][col] = value;
        checkBoard();
        if (isBoardComplete() && isBoardCorrect()) {
            updateStatus('Congratulations! You solved the magic square! 🎉');
        }
    }
}

function checkBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('correct', 'incorrect');
    });

    // Check rows
    for (let i = 0; i < gameSize; i++) {
        const sum = board[i].reduce((a, b) => a + b, 0);
        if (sum === magicSum) {
            for (let j = 0; j < gameSize; j++) {
                cells[i * gameSize + j].classList.add('correct');
            }
        } else if (sum !== 0) {
            for (let j = 0; j < gameSize; j++) {
                cells[i * gameSize + j].classList.add('incorrect');
            }
        }
    }

    // Check columns
    for (let j = 0; j < gameSize; j++) {
        let sum = 0;
        for (let i = 0; i < gameSize; i++) {
            sum += board[i][j];
        }
        if (sum === magicSum) {
            for (let i = 0; i < gameSize; i++) {
                cells[i * gameSize + j].classList.add('correct');
            }
        } else if (sum !== 0) {
            for (let i = 0; i < gameSize; i++) {
                cells[i * gameSize + j].classList.add('incorrect');
            }
        }
    }
}

function giveHint() {
    if (hintsUsed >= 3) {
        updateStatus('Maximum hints used!');
        return;
    }

    // Find an empty cell
    let emptyCells = [];
    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (board[i][j] === 0) {
                emptyCells.push({ row: i, col: j });
            }
        }
    }

    if (emptyCells.length === 0) {
        updateStatus('No empty cells to give hints for!');
        return;
    }

    // Randomly select an empty cell and fill it
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[randomCell.row][randomCell.col] = solution[randomCell.row][randomCell.col];
    hintsUsed++;
    updateBoard();
    updateStatus(`Hint used! (${3 - hintsUsed} remaining)`);
}

function solve() {
    board = JSON.parse(JSON.stringify(solution));
    updateBoard();
    updateStatus('Puzzle solved! Try solving it yourself in a new game.');
}

function isBoardComplete() {
    return board.every(row => row.every(cell => cell !== 0));
}

function isBoardCorrect() {
    // Check rows
    for (let i = 0; i < gameSize; i++) {
        if (board[i].reduce((a, b) => a + b, 0) !== magicSum) return false;
    }

    // Check columns
    for (let j = 0; j < gameSize; j++) {
        let sum = 0;
        for (let i = 0; i < gameSize; i++) {
            sum += board[i][j];
        }
        if (sum !== magicSum) return false;
    }

    // Check diagonals
    let diag1 = 0, diag2 = 0;
    for (let i = 0; i < gameSize; i++) {
        diag1 += board[i][i];
        diag2 += board[i][gameSize - 1 - i];
    }
    return diag1 === magicSum && diag2 === magicSum;
}

function updateStatus(message) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
}