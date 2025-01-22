let currentSize = 3;
let selectedCell = null;
let puzzle = [];
let solution = [];
let fixed = [];

function initializePuzzle() {
    // Generate a solved Latin square
    solution = generateLatinSquare(currentSize);

    // Create puzzle by removing some numbers
    puzzle = solution.map(row => [...row]);
    fixed = solution.map(row => row.map(() => false));

    // Remove random numbers (more removals for larger puzzles)
    const removals = Math.floor(currentSize * currentSize * 0.6);
    for (let i = 0; i < removals; i++) {
        const row = Math.floor(Math.random() * currentSize);
        const col = Math.floor(Math.random() * currentSize);
        if (puzzle[row][col] !== 0) {
            puzzle[row][col] = 0;
        }
    }

    // Mark fixed cells
    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            if (puzzle[i][j] !== 0) {
                fixed[i][j] = true;
            }
        }
    }
}

function generateLatinSquare(size) {
    const square = Array(size).fill().map(() => Array(size).fill(0));

    // Fill first row with sequential numbers
    for (let i = 0; i < size; i++) {
        square[0][i] = i + 1;
    }

    // Fill remaining rows with cyclic permutations
    for (let i = 1; i < size; i++) {
        for (let j = 0; j < size; j++) {
            square[i][j] = ((square[0][j] + i - 1) % size) + 1;
        }
    }

    // Shuffle rows and columns randomly
    for (let i = 0; i < size * 2; i++) {
        const r1 = Math.floor(Math.random() * size);
        const r2 = Math.floor(Math.random() * size);

        // Swap rows
        [square[r1], square[r2]] = [square[r2], square[r1]];

        // Swap columns
        for (let j = 0; j < size; j++) {
            [square[j][r1], square[j][r2]] = [square[j][r2], square[j][r1]];
        }
    }

    return square;
}

function renderGrid() {
    const grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 50px)`;
    grid.innerHTML = '';

    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (fixed[i][j]) {
                cell.classList.add('fixed');
            }
            cell.textContent = puzzle[i][j] || '';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.onclick = () => selectCell(i, j);
            grid.appendChild(cell);
        }
    }

    renderNumberSelect();
}

function renderNumberSelect() {
    const numberSelect = document.getElementById('numberSelect');
    numberSelect.innerHTML = '';

    for (let i = 1; i <= currentSize; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => placeNumber(i);
        numberSelect.appendChild(button);
    }
}

function selectCell(row, col) {
    if (fixed[row][col]) return;

    // Remove previous selection
    if (selectedCell) {
        document.querySelector(`[data-row="${selectedCell.row}"][data-col="${selectedCell.col}"]`)
            .classList.remove('selected');
    }

    selectedCell = { row, col };
    document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
        .classList.add('selected');
}

function placeNumber(num) {
    if (!selectedCell) return;

    const { row, col } = selectedCell;
    puzzle[row][col] = num;
    renderGrid();

    if (checkWin()) {
        document.getElementById('status').textContent = 'Congratulations! You solved the puzzle!';
    }
}

function checkWin() {
    // Check if puzzle matches solution
    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            if (puzzle[i][j] !== solution[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function getHint() {
    // Find a random empty or incorrect cell
    let emptyCells = [];
    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            if (!fixed[i][j] && puzzle[i][j] !== solution[i][j]) {
                emptyCells.push({ row: i, col: j });
            }
        }
    }

    if (emptyCells.length === 0) {
        document.getElementById('status').textContent = 'No more hints needed!';
        return;
    }

    const hintCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    puzzle[hintCell.row][hintCell.col] = solution[hintCell.row][hintCell.col];
    fixed[hintCell.row][hintCell.col] = true;
    renderGrid();
}

function checkSolution() {
    let isCorrect = true;
    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
            if (puzzle[i][j] !== solution[i][j]) {
                cell.classList.add('incorrect');
                isCorrect = false;
            } else {
                cell.classList.remove('incorrect');
            }
        }
    }

    document.getElementById('status').textContent = isCorrect ?
        'Perfect! All numbers are correct!' :
        'Some numbers are incorrect. Keep trying!';
}

function resetPuzzle() {
    initializePuzzle();
    renderGrid();
    document.getElementById('status').textContent = '';
    selectedCell = null;
}

function setLevel(size) {
    currentSize = size;
    resetPuzzle();
}