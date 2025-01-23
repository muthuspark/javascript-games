let size = 4;
let board = [];
let solution = null;
let queens = new Set();

// Initialize the puzzle
function initializePuzzle() {
    board = Array(size).fill().map(() => Array(size).fill(false));
    queens.clear();
    solution = findSolution();
    renderBoard();
    updateQueenCount();
    document.getElementById('status').textContent = '';
}

// Find a valid solution for the current board size
function findSolution() {
    const sol = Array(size).fill().map(() => Array(size).fill(false));
    
    function isSafe(row, col) {
        // Check row and column
        for (let i = 0; i < size; i++) {
            if (sol[row][i] || sol[i][col]) return false;
        }
        
        // Check diagonals
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (sol[i][j] && 
                    (Math.abs(row - i) === Math.abs(col - j))) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    function solveNQueens(col) {
        if (col >= size) return true;
        
        for (let row = 0; row < size; row++) {
            if (isSafe(row, col)) {
                sol[row][col] = true;
                
                if (solveNQueens(col + 1)) return true;
                
                sol[row][col] = false;
            }
        }
        
        return false;
    }
    
    solveNQueens(0);
    return sol;
}

// Check if a position is threatened by existing queens
function isThreatened(row, col) {
    for (const [qRow, qCol] of queens) {
        if (row === qRow || col === qCol || 
            Math.abs(row - qRow) === Math.abs(col - qCol)) {
            return true;
        }
    }
    return false;
}

// Handle cell click
function handleCellClick(row, col) {
    if (board[row][col]) {
        board[row][col] = false;
        queens.delete(`${row},${col}`);
    } else {
        board[row][col] = true;
        queens.add(`${row},${col}`);
    }
    
    renderBoard();
    updateQueenCount();
    
    if (queens.size === size) {
        checkSolution();
    }
}

// Render the chess board
function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.style.gridTemplateColumns = `repeat(${size}, 60px)`;
    boardElement.innerHTML = '';

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cell = document.createElement('div');
            cell.className = `cell ${(row + col) % 2 === 0 ? 'light' : 'dark'}`;
            
            if (board[row][col]) {
                cell.classList.add('has-queen');
            } else if (queens.size > 0 && isThreatened(row, col)) {
                cell.classList.add('threatened');
            }
            
            cell.onclick = () => handleCellClick(row, col);
            boardElement.appendChild(cell);
        }
    }
}

// Update queen count display
function updateQueenCount() {
    document.getElementById('queenCount').textContent = 
        `Queens placed: ${queens.size}/${size}`;
}

// Check if the current solution is valid
function checkSolution() {
    if (queens.size !== size) {
        document.getElementById('status').textContent = 
            `Place all ${size} queens on the board`;
        return;
    }
    
    let isValid = true;
    const positions = Array.from(queens).map(pos => pos.split(',').map(Number));
    
    for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
            const [row1, col1] = positions[i];
            const [row2, col2] = positions[j];
            
            if (row1 === row2 || col1 === col2 || 
                Math.abs(row1 - row2) === Math.abs(col1 - col2)) {
                isValid = false;
                break;
            }
        }
    }
    
    document.getElementById('status').textContent = isValid ? 
        'Congratulations! You solved the puzzle!' : 
        'Some queens are threatening each other. Try again!';
}

// Provide a hint by placing a queen in a valid position
function getHint() {
    if (queens.size >= size) {
        document.getElementById('status').textContent = 
            'Remove some queens to get a hint';
        return;
    }
    
    // Find a valid position from the solution
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (solution[row][col] && !board[row][col] && !isThreatened(row, col)) {
                board[row][col] = true;
                queens.add(`${row},${col}`);
                renderBoard();
                updateQueenCount();
                return;
            }
        }
    }
}

// Reset the puzzle
function resetPuzzle() {
    initializePuzzle();
}

// Set board size
function setLevel(newSize) {
    size = newSize;
    initializePuzzle();
}
