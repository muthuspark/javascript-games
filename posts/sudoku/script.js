let board = [];
let solution = [];
let currentDifficulty = 'easy';
let timerInterval;
let startTime;
let hintsRemaining;

const difficulties = {
    easy: { cellsToRemove: 30, maxHints: 2 },
    medium: { cellsToRemove: 45, maxHints: 2 },
    hard: { cellsToRemove: 55, maxHints: 1 }
};

function setDifficulty(difficulty) {
    currentDifficulty = difficulty;
    // Update button styles
    document.querySelectorAll('.difficulty').forEach(button => {
        button.classList.remove('selected');
    });
    document.querySelector(`.difficulty.${difficulty}`).classList.add('selected');
    newGame();
}

function createBoard() {
    // Initialize empty board
    board = Array(9).fill().map(() => Array(9).fill(0));
    solution = Array(9).fill().map(() => Array(9).fill(0));
    
    // Generate solution
    solveSudoku(solution);
    
    // Create puzzle by removing numbers
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            board[i][j] = solution[i][j];
        }
    }
    
    // Remove numbers based on difficulty
    const cellsToRemove = difficulties[currentDifficulty].cellsToRemove;
    hintsRemaining = difficulties[currentDifficulty].maxHints;
    
    let removedCells = 0;
    while (removedCells < cellsToRemove) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) {
            board[row][col] = 0;
            removedCells++;
        }
    }
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function hint() {
    if (hintsRemaining <= 0) {
        document.getElementById('message').textContent = 'No hints remaining!';
        return;
    }

    const cells = document.getElementsByClassName('cell');
    const emptyPositions = [];
    
    // Find all empty cells
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (!cells[i * 9 + j].value) {
                emptyPositions.push([i, j]);
            }
        }
    }

    if (emptyPositions.length === 0) {
        document.getElementById('message').textContent = 'No empty cells to fill!';
        return;
    }

    // Randomly select an empty position
    const [row, col] = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    const cell = cells[row * 9 + col];
    cell.value = solution[row][col];
    cell.classList.add('given');
    hintsRemaining--;

    document.getElementById('message').textContent = 
        `Hint used! ${hintsRemaining} hint${hintsRemaining !== 1 ? 's' : ''} remaining.`;
}

function isValid(grid, row, col, num) {
    // Check row
    for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num) return false;
    }
    
    // Check column
    for (let y = 0; y < 9; y++) {
        if (grid[y][col] === num) return false;
    }
    
    // Check 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[startRow + i][startCol + j] === num) return false;
        }
    }
    
    return true;
}

function solveSudoku(grid) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                // Shuffle numbers for randomization
                for (let i = nums.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                }
                
                for (const num of nums) {
                    if (isValid(grid, row, col, num)) {
                        grid[row][col] = num;
                        if (solveSudoku(grid)) return true;
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function renderBoard() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.className = 'cell';
            cell.maxLength = 1;
            
            if (board[i][j] !== 0) {
                cell.value = board[i][j];
                cell.readOnly = true;
                cell.classList.add('given');
            }
            
            cell.dataset.row = i;
            cell.dataset.col = j;
            
            cell.addEventListener('input', function(e) {
                const value = e.target.value;
                if (value && (isNaN(value) || value < 1 || value > 9)) {
                    e.target.value = '';
                }
                validateCell(cell);
                checkSolution();
            });
            
            gridElement.appendChild(cell);
        }
    }
}

function validateCell(cell) {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const value = parseInt(cell.value);
    
    if (!value) {
        cell.classList.remove('invalid');
        return;
    }
    
    // Temporarily remove current value from board for validation
    const temp = board[row][col];
    board[row][col] = 0;
    
    const valid = isValid(board, row, col, value);
    cell.classList.toggle('invalid', !valid);
    
    // Restore value
    board[row][col] = value;
}

function checkSolution() {
    const cells = document.getElementsByClassName('cell');
    let complete = true;
    let correct = true;
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = cells[i * 9 + j];
            const value = parseInt(cell.value);
            
            if (!value) {
                complete = false;
            } else if (value !== solution[i][j]) {
                correct = false;
            }
        }
    }
    
    const messageElement = document.getElementById('message');
    // if (!complete) {
    //     messageElement.textContent = 'Please fill in all cells!';
    // } else if (!correct) {
    //     messageElement.textContent = 'Some numbers are incorrect. Keep trying!';
    // } else {
    //     clearInterval(timerInterval);
    //     const timeStr = document.getElementById('timer').textContent;
    //     messageElement.textContent = `Congratulations! You solved the ${currentDifficulty} puzzle in ${timeStr}!`;
    // }
    if (complete && correct) {
        clearInterval(timerInterval);
        const timeStr = document.getElementById('timer').textContent;
        messageElement.textContent = `Congratulations! You solved the ${currentDifficulty} puzzle in ${timeStr}!`;
    }
}

function newGame() {
    createBoard();
    renderBoard();
    document.getElementById('message').textContent = '';
    startTimer();
}