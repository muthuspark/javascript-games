(function() {
    let gridSize = 4; // 4x4 grid of dots (3x3 boxes)
    let horizontalLines = []; // gridSize rows, gridSize-1 columns
    let verticalLines = [];   // gridSize-1 rows, gridSize columns
    let boxes = [];           // gridSize-1 rows, gridSize-1 columns
    let currentPlayer = 1;    // 1 = human, 2 = AI
    let scores = { 1: 0, 2: 0 };
    let gameOver = false;
    let difficulty = 'medium';
    let isAiTurn = false;

    function newGame() {
        const sizeSelect = document.getElementById('gridSizeSelect');
        gridSize = parseInt(sizeSelect.value);

        // Initialize arrays
        horizontalLines = [];
        for (let r = 0; r < gridSize; r++) {
            horizontalLines.push(new Array(gridSize - 1).fill(0));
        }

        verticalLines = [];
        for (let r = 0; r < gridSize - 1; r++) {
            verticalLines.push(new Array(gridSize).fill(0));
        }

        boxes = [];
        for (let r = 0; r < gridSize - 1; r++) {
            boxes.push(new Array(gridSize - 1).fill(0));
        }

        currentPlayer = 1;
        scores = { 1: 0, 2: 0 };
        gameOver = false;
        isAiTurn = false;

        GamePopup.hide();
        render();
        updateStatus();
        updateScores();
    }

    function changeDifficulty() {
        difficulty = document.getElementById('difficultySelect').value;
        newGame();
    }

    function changeGridSize() {
        newGame();
    }

    function drawLine(type, row, col) {
        if (gameOver || isAiTurn) return;

        let lines = type === 'h' ? horizontalLines : verticalLines;

        if (lines[row][col] !== 0) return; // Already drawn

        lines[row][col] = currentPlayer;

        const boxesCompleted = checkBoxes(type, row, col);

        if (boxesCompleted === 0) {
            // No box completed, switch player
            currentPlayer = currentPlayer === 1 ? 2 : 1;
        }

        render();
        updateStatus();
        updateScores();

        // Check if game is over
        if (isGameOver()) {
            gameOver = true;
            announceWinner();
            return;
        }

        // AI turn
        if (currentPlayer === 2 && !gameOver) {
            isAiTurn = true;
            updateStatus();
            setTimeout(makeAIMove, 600);
        }
    }

    function checkBoxes(type, row, col) {
        let completed = 0;

        if (type === 'h') {
            // Horizontal line - check box above and below
            // Box above: row-1, col
            if (row > 0 && isBoxComplete(row - 1, col)) {
                boxes[row - 1][col] = currentPlayer;
                completed++;
            }
            // Box below: row, col
            if (row < gridSize - 1 && isBoxComplete(row, col)) {
                boxes[row][col] = currentPlayer;
                completed++;
            }
        } else {
            // Vertical line - check box to left and right
            // Box to left: row, col-1
            if (col > 0 && isBoxComplete(row, col - 1)) {
                boxes[row][col - 1] = currentPlayer;
                completed++;
            }
            // Box to right: row, col
            if (col < gridSize - 1 && isBoxComplete(row, col)) {
                boxes[row][col] = currentPlayer;
                completed++;
            }
        }

        scores[currentPlayer] += completed;
        return completed;
    }

    function isBoxComplete(boxRow, boxCol) {
        if (boxes[boxRow][boxCol] !== 0) return false; // Already completed

        const top = horizontalLines[boxRow][boxCol];
        const bottom = horizontalLines[boxRow + 1][boxCol];
        const left = verticalLines[boxRow][boxCol];
        const right = verticalLines[boxRow][boxCol + 1];

        return top !== 0 && bottom !== 0 && left !== 0 && right !== 0;
    }

    function countBoxSides(boxRow, boxCol) {
        let count = 0;
        if (horizontalLines[boxRow][boxCol] !== 0) count++;
        if (horizontalLines[boxRow + 1][boxCol] !== 0) count++;
        if (verticalLines[boxRow][boxCol] !== 0) count++;
        if (verticalLines[boxRow][boxCol + 1] !== 0) count++;
        return count;
    }

    function makeAIMove() {
        if (gameOver) {
            isAiTurn = false;
            return;
        }

        const move = getAIMove();

        if (move) {
            const lines = move.type === 'h' ? horizontalLines : verticalLines;
            lines[move.row][move.col] = currentPlayer;

            const boxesCompleted = checkBoxes(move.type, move.row, move.col);

            if (boxesCompleted === 0) {
                currentPlayer = 1;
                isAiTurn = false;
            }

            render();
            updateStatus();
            updateScores();

            if (isGameOver()) {
                gameOver = true;
                isAiTurn = false;
                announceWinner();
                return;
            }

            // AI gets another turn if completed a box
            if (currentPlayer === 2 && !gameOver) {
                setTimeout(makeAIMove, 600);
            } else {
                isAiTurn = false;
            }
        } else {
            isAiTurn = false;
        }
    }

    function getAIMove() {
        const availableMoves = getAvailableMoves();

        if (availableMoves.length === 0) return null;

        if (difficulty === 'easy') {
            return availableMoves[Math.floor(Math.random() * availableMoves.length)];
        }

        // Look for moves that complete a box
        const completingMoves = availableMoves.filter(move => {
            return wouldCompleteBox(move);
        });

        if (completingMoves.length > 0) {
            return completingMoves[Math.floor(Math.random() * completingMoves.length)];
        }

        if (difficulty === 'hard') {
            // Avoid moves that give opponent a box
            const safeMoves = availableMoves.filter(move => {
                return !wouldGiveOpponentBox(move);
            });

            if (safeMoves.length > 0) {
                return safeMoves[Math.floor(Math.random() * safeMoves.length)];
            }

            // If all moves are bad, pick the one that gives fewest boxes
            let bestMove = availableMoves[0];
            let minBoxes = countBoxesGiven(availableMoves[0]);

            for (let i = 1; i < availableMoves.length; i++) {
                const boxesGiven = countBoxesGiven(availableMoves[i]);
                if (boxesGiven < minBoxes) {
                    minBoxes = boxesGiven;
                    bestMove = availableMoves[i];
                }
            }

            return bestMove;
        }

        // Medium: 50% chance to play optimally
        if (Math.random() < 0.5) {
            const safeMoves = availableMoves.filter(move => {
                return !wouldGiveOpponentBox(move);
            });

            if (safeMoves.length > 0) {
                return safeMoves[Math.floor(Math.random() * safeMoves.length)];
            }
        }

        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    function getAvailableMoves() {
        const moves = [];

        // Horizontal lines
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize - 1; c++) {
                if (horizontalLines[r][c] === 0) {
                    moves.push({ type: 'h', row: r, col: c });
                }
            }
        }

        // Vertical lines
        for (let r = 0; r < gridSize - 1; r++) {
            for (let c = 0; c < gridSize; c++) {
                if (verticalLines[r][c] === 0) {
                    moves.push({ type: 'v', row: r, col: c });
                }
            }
        }

        return moves;
    }

    function wouldCompleteBox(move) {
        if (move.type === 'h') {
            // Check box above
            if (move.row > 0 && boxes[move.row - 1][move.col] === 0) {
                if (countBoxSides(move.row - 1, move.col) === 3) return true;
            }
            // Check box below
            if (move.row < gridSize - 1 && boxes[move.row][move.col] === 0) {
                if (countBoxSides(move.row, move.col) === 3) return true;
            }
        } else {
            // Check box to left
            if (move.col > 0 && boxes[move.row][move.col - 1] === 0) {
                if (countBoxSides(move.row, move.col - 1) === 3) return true;
            }
            // Check box to right
            if (move.col < gridSize - 1 && boxes[move.row][move.col] === 0) {
                if (countBoxSides(move.row, move.col) === 3) return true;
            }
        }
        return false;
    }

    function wouldGiveOpponentBox(move) {
        if (move.type === 'h') {
            // Check box above - would have 3 sides after this move
            if (move.row > 0 && boxes[move.row - 1][move.col] === 0) {
                if (countBoxSides(move.row - 1, move.col) === 2) return true;
            }
            // Check box below
            if (move.row < gridSize - 1 && boxes[move.row][move.col] === 0) {
                if (countBoxSides(move.row, move.col) === 2) return true;
            }
        } else {
            // Check box to left
            if (move.col > 0 && boxes[move.row][move.col - 1] === 0) {
                if (countBoxSides(move.row, move.col - 1) === 2) return true;
            }
            // Check box to right
            if (move.col < gridSize - 1 && boxes[move.row][move.col] === 0) {
                if (countBoxSides(move.row, move.col) === 2) return true;
            }
        }
        return false;
    }

    function countBoxesGiven(move) {
        let count = 0;
        if (move.type === 'h') {
            if (move.row > 0 && boxes[move.row - 1][move.col] === 0) {
                if (countBoxSides(move.row - 1, move.col) === 2) count++;
            }
            if (move.row < gridSize - 1 && boxes[move.row][move.col] === 0) {
                if (countBoxSides(move.row, move.col) === 2) count++;
            }
        } else {
            if (move.col > 0 && boxes[move.row][move.col - 1] === 0) {
                if (countBoxSides(move.row, move.col - 1) === 2) count++;
            }
            if (move.col < gridSize - 1 && boxes[move.row][move.col] === 0) {
                if (countBoxSides(move.row, move.col) === 2) count++;
            }
        }
        return count;
    }

    function isGameOver() {
        const totalBoxes = (gridSize - 1) * (gridSize - 1);
        return scores[1] + scores[2] === totalBoxes;
    }

    function announceWinner() {
        if (scores[1] > scores[2]) {
            GamePopup.show({
                title: 'Congratulations!',
                message: `You win ${scores[1]} to ${scores[2]}!`,
                showConfetti: true
            });
        } else if (scores[2] > scores[1]) {
            GamePopup.show({
                title: 'Better luck next time!',
                message: `AI wins ${scores[2]} to ${scores[1]}.`
            });
        } else {
            GamePopup.show({
                title: 'Tie!',
                message: `It's a tie! ${scores[1]} - ${scores[2]}`
            });
        }
    }

    function updateStatus() {
        const statusEl = document.getElementById('gameStatus');
        if (gameOver) {
            statusEl.textContent = 'Game Over';
        } else if (isAiTurn) {
            statusEl.textContent = 'AI is thinking...';
        } else if (currentPlayer === 1) {
            statusEl.textContent = 'Your turn - Click a line to draw';
        } else {
            statusEl.textContent = 'AI turn';
        }
    }

    function updateScores() {
        document.getElementById('playerScore').textContent = scores[1];
        document.getElementById('aiScore').textContent = scores[2];
    }

    function render() {
        const container = document.getElementById('gameBoard');
        container.innerHTML = '';

        const boardSize = Math.min(400, window.innerWidth - 60);
        const cellSize = boardSize / gridSize;
        const dotSize = 12;
        const lineWidth = 6;

        container.style.width = boardSize + 'px';
        container.style.height = boardSize + 'px';
        container.style.position = 'relative';

        // Draw boxes (filled squares)
        for (let r = 0; r < gridSize - 1; r++) {
            for (let c = 0; c < gridSize - 1; c++) {
                if (boxes[r][c] !== 0) {
                    const box = document.createElement('div');
                    box.className = 'box player-' + boxes[r][c];
                    box.style.left = (c * cellSize + dotSize / 2) + 'px';
                    box.style.top = (r * cellSize + dotSize / 2) + 'px';
                    box.style.width = (cellSize - dotSize) + 'px';
                    box.style.height = (cellSize - dotSize) + 'px';
                    container.appendChild(box);
                }
            }
        }

        // Draw horizontal lines
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize - 1; c++) {
                const line = document.createElement('div');
                line.className = 'line horizontal';
                if (horizontalLines[r][c] !== 0) {
                    line.classList.add('drawn', 'player-' + horizontalLines[r][c]);
                } else {
                    line.classList.add('available');
                    line.onclick = () => drawLine('h', r, c);
                }
                line.style.left = (c * cellSize + dotSize / 2) + 'px';
                line.style.top = (r * cellSize - lineWidth / 2 + dotSize / 2) + 'px';
                line.style.width = (cellSize - dotSize) + 'px';
                line.style.height = lineWidth + 'px';
                container.appendChild(line);
            }
        }

        // Draw vertical lines
        for (let r = 0; r < gridSize - 1; r++) {
            for (let c = 0; c < gridSize; c++) {
                const line = document.createElement('div');
                line.className = 'line vertical';
                if (verticalLines[r][c] !== 0) {
                    line.classList.add('drawn', 'player-' + verticalLines[r][c]);
                } else {
                    line.classList.add('available');
                    line.onclick = () => drawLine('v', r, c);
                }
                line.style.left = (c * cellSize - lineWidth / 2 + dotSize / 2) + 'px';
                line.style.top = (r * cellSize + dotSize / 2) + 'px';
                line.style.width = lineWidth + 'px';
                line.style.height = (cellSize - dotSize) + 'px';
                container.appendChild(line);
            }
        }

        // Draw dots (centered on grid points)
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                dot.style.left = (c * cellSize) + 'px';
                dot.style.top = (r * cellSize) + 'px';
                dot.style.width = dotSize + 'px';
                dot.style.height = dotSize + 'px';
                container.appendChild(dot);
            }
        }
    }

    // Expose functions to window
    window.newGame = newGame;
    window.changeDifficulty = changeDifficulty;
    window.changeGridSize = changeGridSize;
})();
