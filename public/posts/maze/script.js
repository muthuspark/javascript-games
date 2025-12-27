let canvas = null;//document.getElementById('mazeCanvas');
let ctx = null; //canvas.getContext('2d');
let maze = [];
let cellSize = 30;
let playerPos = { x: 1, y: 1 };
let endPos = { x: 0, y: 0 };
let mazeSize = 10;

function initCanvas() {
    canvas = document.getElementById('mazeCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = mazeSize * cellSize;
    canvas.height = mazeSize * cellSize;
}

function generateMaze() {
    // Initialize maze with walls
    maze = Array(mazeSize).fill().map(() => Array(mazeSize).fill(1));

    // Recursive backtracking algorithm
    function carve(x, y) {
        maze[y][x] = 0;

        // Direction vectors
        const directions = [
            [0, -2], // Up
            [2, 0],  // Right
            [0, 2],  // Down
            [-2, 0]  // Left
        ];

        // Shuffle directions
        for (let i = directions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [directions[i], directions[j]] = [directions[j], directions[i]];
        }

        // Try each direction
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX > 0 && newX < mazeSize - 1 && newY > 0 && newY < mazeSize - 1
                && maze[newY][newX] === 1) {
                // Carve passage
                maze[y + dy / 2][x + dx / 2] = 0;
                carve(newX, newY);
            }
        }
    }

    // Start from top-left corner
    carve(1, 1);

    // Set end point at bottom-right
    endPos = {
        x: mazeSize - 2,
        y: mazeSize - 2
    };
    maze[endPos.y][endPos.x] = 0;
}

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw maze
    for (let y = 0; y < mazeSize; y++) {
        for (let x = 0; x < mazeSize; x++) {
            if (maze[y][x] === 1) {
                ctx.fillStyle = '#333';
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        }
    }

    // Draw end point
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(endPos.x * cellSize, endPos.y * cellSize, cellSize, cellSize);

    // Draw player
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(playerPos.x * cellSize, playerPos.y * cellSize, cellSize, cellSize);
}

function movePlayer(dx, dy) {
    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;

    // Check if move is valid
    if (newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize
        && maze[newY][newX] === 0) {
        playerPos.x = newX;
        playerPos.y = newY;
        drawMaze();

        // Check for win
        if (newX === endPos.x && newY === endPos.y) {
            showWinMessage('You conquered the maze!');
        }
    }
}

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            movePlayer(1, 0);
            break;
    }
}

function generateNewMaze() {
    mazeSize = parseInt(document.getElementById('mazeSize').value);
    initCanvas();
    generateMaze();
    resetPlayer();
    drawMaze();
}

function resetPlayer() {
    playerPos = { x: 1, y: 1 };
    drawMaze();
    hideWinMessage();
}

// Initialize game
document.addEventListener('keydown', handleKeyPress);

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && !event.shiftKey) {
      event.preventDefault(); 
    }
    if (event.key === 'ArrowDown' && !event.shiftKey) {
        event.preventDefault(); 
    }
  });