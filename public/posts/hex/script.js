(function() {
    let boardSize = 7;
    let board = []; // 0 = empty, 1 = player (blue), 2 = AI (red)
    let currentPlayer = 1;
    let gameOver = false;
    let difficulty = 'medium';
    let isAiTurn = false;

    function newGame() {
        const sizeSelect = document.getElementById('boardSizeSelect');
        boardSize = parseInt(sizeSelect.value);

        board = [];
        for (let r = 0; r < boardSize; r++) {
            board.push(new Array(boardSize).fill(0));
        }

        currentPlayer = 1;
        gameOver = false;
        isAiTurn = false;

        hideWinMessage();
        render();
        updateStatus();
    }

    function changeDifficulty() {
        difficulty = document.getElementById('difficultySelect').value;
        newGame();
    }

    function changeBoardSize() {
        newGame();
    }

    function makeMove(row, col) {
        if (gameOver || isAiTurn || board[row][col] !== 0) return;

        board[row][col] = currentPlayer;

        if (checkWin(currentPlayer)) {
            gameOver = true;
            render();
            if (currentPlayer === 1) {
                showWinMessage('You connected top to bottom! You win!');
            } else {
                showLostMessage('AI connected left to right. AI wins!');
            }
            return;
        }

        currentPlayer = currentPlayer === 1 ? 2 : 1;
        render();
        updateStatus();

        if (currentPlayer === 2 && !gameOver) {
            isAiTurn = true;
            updateStatus();
            setTimeout(makeAIMove, 500);
        }
    }

    function makeAIMove() {
        if (gameOver) {
            isAiTurn = false;
            return;
        }

        const move = getAIMove();
        if (move) {
            board[move.row][move.col] = 2;

            if (checkWin(2)) {
                gameOver = true;
                render();
                showLostMessage('AI connected left to right. AI wins!');
                isAiTurn = false;
                return;
            }

            currentPlayer = 1;
            isAiTurn = false;
            render();
            updateStatus();
        }
    }

    function getAIMove() {
        const availableMoves = getAvailableMoves();
        if (availableMoves.length === 0) return null;

        if (difficulty === 'easy') {
            return availableMoves[Math.floor(Math.random() * availableMoves.length)];
        }

        // Check for winning move
        for (const move of availableMoves) {
            board[move.row][move.col] = 2;
            if (checkWin(2)) {
                board[move.row][move.col] = 0;
                return move;
            }
            board[move.row][move.col] = 0;
        }

        // Check for blocking move (prevent player from winning)
        for (const move of availableMoves) {
            board[move.row][move.col] = 1;
            if (checkWin(1)) {
                board[move.row][move.col] = 0;
                return move;
            }
            board[move.row][move.col] = 0;
        }

        if (difficulty === 'hard') {
            // Use evaluation-based strategy
            let bestMove = null;
            let bestScore = -Infinity;

            for (const move of availableMoves) {
                board[move.row][move.col] = 2;
                const score = evaluatePosition(2) - evaluatePosition(1) * 0.8;
                board[move.row][move.col] = 0;

                if (score > bestScore) {
                    bestScore = score;
                    bestMove = move;
                }
            }

            if (bestMove) return bestMove;
        }

        // Medium: Use simple heuristics
        if (difficulty === 'medium' || difficulty === 'hard') {
            // Prefer center positions
            const scoredMoves = availableMoves.map(move => {
                const centerScore = -Math.abs(move.row - boardSize / 2) - Math.abs(move.col - boardSize / 2);
                const connectionScore = countNeighbors(move.row, move.col, 2) * 2;
                return { ...move, score: centerScore + connectionScore + Math.random() * 0.5 };
            });

            scoredMoves.sort((a, b) => b.score - a.score);
            return scoredMoves[0];
        }

        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    function getAvailableMoves() {
        const moves = [];
        for (let r = 0; r < boardSize; r++) {
            for (let c = 0; c < boardSize; c++) {
                if (board[r][c] === 0) {
                    moves.push({ row: r, col: c });
                }
            }
        }
        return moves;
    }

    function countNeighbors(row, col, player) {
        const neighbors = getNeighbors(row, col);
        let count = 0;
        for (const n of neighbors) {
            if (board[n.row][n.col] === player) count++;
        }
        return count;
    }

    function getNeighbors(row, col) {
        // Hex grid neighbors (6 directions)
        const directions = [
            [-1, 0], [-1, 1],  // top-left, top-right
            [0, -1], [0, 1],   // left, right
            [1, -1], [1, 0]    // bottom-left, bottom-right
        ];

        const neighbors = [];
        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;
            if (nr >= 0 && nr < boardSize && nc >= 0 && nc < boardSize) {
                neighbors.push({ row: nr, col: nc });
            }
        }
        return neighbors;
    }

    function evaluatePosition(player) {
        // Calculate shortest path distance for the player
        // Player 1 (blue): top to bottom
        // Player 2 (red): left to right

        const distance = shortestPathDistance(player);
        if (distance === 0) return 10000; // Already won
        if (distance === Infinity) return -100;
        return 100 / distance;
    }

    function shortestPathDistance(player) {
        // BFS to find shortest path (counting empty cells as distance)
        const visited = new Set();
        const queue = [];

        // Initialize starting positions
        if (player === 1) {
            // Blue: start from top row
            for (let c = 0; c < boardSize; c++) {
                if (board[0][c] === player) {
                    queue.push({ row: 0, col: c, dist: 0 });
                    visited.add(`0,${c}`);
                } else if (board[0][c] === 0) {
                    queue.push({ row: 0, col: c, dist: 1 });
                    visited.add(`0,${c}`);
                }
            }
        } else {
            // Red: start from left column
            for (let r = 0; r < boardSize; r++) {
                if (board[r][0] === player) {
                    queue.push({ row: r, col: 0, dist: 0 });
                    visited.add(`${r},0`);
                } else if (board[r][0] === 0) {
                    queue.push({ row: r, col: 0, dist: 1 });
                    visited.add(`${r},0`);
                }
            }
        }

        // Sort by distance for Dijkstra-like behavior
        queue.sort((a, b) => a.dist - b.dist);

        while (queue.length > 0) {
            const { row, col, dist } = queue.shift();

            // Check if reached goal
            if (player === 1 && row === boardSize - 1) return dist;
            if (player === 2 && col === boardSize - 1) return dist;

            const neighbors = getNeighbors(row, col);
            for (const n of neighbors) {
                const key = `${n.row},${n.col}`;
                if (visited.has(key)) continue;
                if (board[n.row][n.col] !== player && board[n.row][n.col] !== 0) continue;

                visited.add(key);
                const newDist = dist + (board[n.row][n.col] === player ? 0 : 1);
                queue.push({ row: n.row, col: n.col, dist: newDist });
                queue.sort((a, b) => a.dist - b.dist);
            }
        }

        return Infinity;
    }

    function checkWin(player) {
        // Player 1 (blue): connect top to bottom
        // Player 2 (red): connect left to right

        const visited = new Set();
        const queue = [];

        // Initialize starting positions
        if (player === 1) {
            // Blue: start from top row
            for (let c = 0; c < boardSize; c++) {
                if (board[0][c] === player) {
                    queue.push({ row: 0, col: c });
                    visited.add(`0,${c}`);
                }
            }
        } else {
            // Red: start from left column
            for (let r = 0; r < boardSize; r++) {
                if (board[r][0] === player) {
                    queue.push({ row: r, col: 0 });
                    visited.add(`${r},0`);
                }
            }
        }

        // BFS to find connected path
        while (queue.length > 0) {
            const { row, col } = queue.shift();

            // Check if reached goal
            if (player === 1 && row === boardSize - 1) return true;
            if (player === 2 && col === boardSize - 1) return true;

            const neighbors = getNeighbors(row, col);
            for (const n of neighbors) {
                const key = `${n.row},${n.col}`;
                if (!visited.has(key) && board[n.row][n.col] === player) {
                    visited.add(key);
                    queue.push(n);
                }
            }
        }

        return false;
    }

    function updateStatus() {
        const statusEl = document.getElementById('gameStatus');
        if (gameOver) {
            statusEl.textContent = 'Game Over';
        } else if (isAiTurn) {
            statusEl.textContent = 'AI is thinking...';
        } else {
            statusEl.textContent = 'Your turn - Click a cell to place your piece';
        }
    }

    function render() {
        const container = document.getElementById('hexBoard');
        container.innerHTML = '';

        const cellSize = Math.min(45, (window.innerWidth - 100) / (boardSize * 1.5 + 1));
        const hexWidth = cellSize;
        const hexHeight = cellSize * 0.866; // sqrt(3)/2
        const horizontalSpacing = hexWidth * 0.75;
        const verticalSpacing = hexHeight;

        const boardWidth = (boardSize - 1) * horizontalSpacing + hexWidth + (boardSize - 1) * horizontalSpacing / 2 + 20;
        const boardHeight = boardSize * verticalSpacing + hexHeight / 2 + 20;

        container.style.width = boardWidth + 'px';
        container.style.height = boardHeight + 'px';
        container.style.position = 'relative';

        // Draw edge indicators
        // Top edge (blue)
        const topEdge = document.createElement('div');
        topEdge.className = 'hex-edge top-edge';
        topEdge.style.width = (boardSize * horizontalSpacing + hexWidth / 2) + 'px';
        topEdge.style.left = '10px';
        topEdge.style.top = '0';
        container.appendChild(topEdge);

        // Bottom edge (blue)
        const bottomEdge = document.createElement('div');
        bottomEdge.className = 'hex-edge bottom-edge';
        bottomEdge.style.width = (boardSize * horizontalSpacing + hexWidth / 2) + 'px';
        bottomEdge.style.left = ((boardSize - 1) * horizontalSpacing / 2 + 10) + 'px';
        bottomEdge.style.top = (boardSize * verticalSpacing + 5) + 'px';
        container.appendChild(bottomEdge);

        // Draw hexagonal cells
        for (let r = 0; r < boardSize; r++) {
            for (let c = 0; c < boardSize; c++) {
                const hex = document.createElement('div');
                hex.className = 'hex-cell';

                if (board[r][c] === 1) {
                    hex.classList.add('player-blue');
                } else if (board[r][c] === 2) {
                    hex.classList.add('player-red');
                } else if (!gameOver && !isAiTurn) {
                    hex.classList.add('available');
                    hex.onclick = () => makeMove(r, c);
                }

                // Position with offset for hex grid
                const x = c * horizontalSpacing + (r * horizontalSpacing / 2) + 10;
                const y = r * verticalSpacing + 10;

                hex.style.left = x + 'px';
                hex.style.top = y + 'px';
                hex.style.width = hexWidth + 'px';
                hex.style.height = hexHeight + 'px';

                container.appendChild(hex);
            }
        }

        // Draw left edge indicator (red)
        const leftEdge = document.createElement('div');
        leftEdge.className = 'hex-edge left-edge';
        leftEdge.style.height = (boardSize * verticalSpacing) + 'px';
        leftEdge.style.left = '0';
        leftEdge.style.top = '10px';
        container.appendChild(leftEdge);

        // Draw right edge indicator (red)
        const rightEdge = document.createElement('div');
        rightEdge.className = 'hex-edge right-edge';
        rightEdge.style.height = (boardSize * verticalSpacing) + 'px';
        rightEdge.style.left = (boardWidth - 10) + 'px';
        rightEdge.style.top = '10px';
        container.appendChild(rightEdge);
    }

    // Expose functions to window
    window.newGame = newGame;
    window.changeDifficulty = changeDifficulty;
    window.changeBoardSize = changeBoardSize;
})();
