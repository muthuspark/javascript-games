(function() {
    // Tangram game state
    let pieces = [];
    let selectedPiece = null;
    let dragOffset = { x: 0, y: 0 };
    let isDragging = false;
    let currentPuzzle = null;
    let puzzleIndex = 0;
    let completedPuzzles = 0;

    // Canvas and context
    let canvas, ctx;
    let puzzleCanvas, puzzleCtx;

    // Tangram piece definitions (relative coordinates, scaled later)
    // Standard tangram has 7 pieces: 2 large triangles, 1 medium triangle, 2 small triangles, 1 square, 1 parallelogram
    const pieceTemplates = [
        { // Large triangle 1
            id: 'large1',
            color: '#e74c3c',
            points: [[0, 0], [100, 0], [50, 50]],
            rotation: 0
        },
        { // Large triangle 2
            id: 'large2',
            color: '#3498db',
            points: [[0, 0], [100, 0], [50, 50]],
            rotation: 0
        },
        { // Medium triangle
            id: 'medium',
            color: '#2ecc71',
            points: [[0, 0], [70.7, 0], [35.35, 35.35]],
            rotation: 0
        },
        { // Small triangle 1
            id: 'small1',
            color: '#f39c12',
            points: [[0, 0], [50, 0], [25, 25]],
            rotation: 0
        },
        { // Small triangle 2
            id: 'small2',
            color: '#9b59b6',
            points: [[0, 0], [50, 0], [25, 25]],
            rotation: 0
        },
        { // Square
            id: 'square',
            color: '#1abc9c',
            points: [[0, 0], [35.35, 0], [35.35, 35.35], [0, 35.35]],
            rotation: 0
        },
        { // Parallelogram
            id: 'parallelogram',
            color: '#e91e63',
            points: [[0, 0], [50, 0], [70, 35.35], [20, 35.35]],
            rotation: 0,
            flipped: false
        }
    ];

    // Puzzle silhouettes (target shapes)
    const puzzles = [
        {
            name: 'Square',
            silhouette: [[0, 0], [150, 0], [150, 150], [0, 150]],
            difficulty: 'Easy'
        },
        {
            name: 'Triangle',
            silhouette: [[75, 0], [150, 150], [0, 150]],
            difficulty: 'Easy'
        },
        {
            name: 'Rectangle',
            silhouette: [[0, 0], [200, 0], [200, 100], [0, 100]],
            difficulty: 'Easy'
        },
        {
            name: 'Parallelogram',
            silhouette: [[40, 0], [200, 0], [160, 100], [0, 100]],
            difficulty: 'Medium'
        },
        {
            name: 'House',
            silhouette: [[75, 0], [150, 60], [150, 150], [0, 150], [0, 60]],
            difficulty: 'Medium'
        },
        {
            name: 'Arrow',
            silhouette: [[75, 0], [150, 75], [110, 75], [110, 150], [40, 150], [40, 75], [0, 75]],
            difficulty: 'Medium'
        },
        {
            name: 'Cat',
            silhouette: [[20, 0], [40, 30], [80, 30], [100, 0], [100, 50], [120, 80], [120, 150], [0, 150], [0, 80], [20, 50]],
            difficulty: 'Hard'
        },
        {
            name: 'Swan',
            silhouette: [[30, 0], [50, 20], [50, 50], [100, 50], [130, 80], [130, 150], [80, 150], [80, 100], [20, 100], [0, 120], [0, 30]],
            difficulty: 'Hard'
        },
        {
            name: 'Boat',
            silhouette: [[60, 0], [90, 0], [90, 60], [180, 100], [160, 130], [20, 130], [0, 100], [60, 60]],
            difficulty: 'Hard'
        },
        {
            name: 'Runner',
            silhouette: [[50, 0], [70, 0], [80, 30], [100, 20], [120, 40], [100, 60], [80, 50], [70, 80], [90, 130], [70, 150], [50, 130], [40, 80], [20, 130], [0, 120], [30, 60], [40, 30]],
            difficulty: 'Expert'
        }
    ];

    function initGame() {
        canvas = document.getElementById('gameCanvas');
        ctx = canvas.getContext('2d');
        puzzleCanvas = document.getElementById('puzzleCanvas');
        puzzleCtx = puzzleCanvas.getContext('2d');

        // Set canvas sizes
        resizeCanvases();

        // Initialize pieces
        resetPieces();

        // Load first puzzle
        loadPuzzle(0);

        // Event listeners
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mouseleave', handleMouseUp);

        // Touch support
        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', handleTouchEnd);

        // Keyboard for rotation
        document.addEventListener('keydown', handleKeyDown);

        // Window resize
        window.addEventListener('resize', resizeCanvases);

        // Initial render
        render();

        updateStats();
    }

    function resizeCanvases() {
        const container = document.getElementById('game_main_container');
        const maxWidth = Math.min(container.offsetWidth - 40, 500);

        canvas.width = maxWidth;
        canvas.height = maxWidth;

        puzzleCanvas.width = 200;
        puzzleCanvas.height = 200;

        render();
        if (currentPuzzle) {
            drawPuzzleSilhouette();
        }
    }

    function resetPieces() {
        pieces = [];
        const scale = canvas.width / 500;

        pieceTemplates.forEach((template, index) => {
            const piece = {
                id: template.id,
                color: template.color,
                originalPoints: template.points.map(p => [...p]),
                points: template.points.map(p => [p[0] * scale, p[1] * scale]),
                x: 50 + (index % 4) * 100 * scale,
                y: 300 * scale + Math.floor(index / 4) * 80 * scale,
                rotation: 0,
                flipped: template.flipped || false,
                scale: scale
            };
            pieces.push(piece);
        });
    }

    function loadPuzzle(index) {
        puzzleIndex = index;
        currentPuzzle = puzzles[index];
        document.getElementById('puzzleName').textContent = currentPuzzle.name;
        document.getElementById('puzzleDifficulty').textContent = currentPuzzle.difficulty;
        resetPieces();
        drawPuzzleSilhouette();
        render();
    }

    function drawPuzzleSilhouette() {
        puzzleCtx.clearRect(0, 0, puzzleCanvas.width, puzzleCanvas.height);

        // Calculate bounds of silhouette
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        currentPuzzle.silhouette.forEach(p => {
            minX = Math.min(minX, p[0]);
            minY = Math.min(minY, p[1]);
            maxX = Math.max(maxX, p[0]);
            maxY = Math.max(maxY, p[1]);
        });

        const width = maxX - minX;
        const height = maxY - minY;
        const scale = Math.min(160 / width, 160 / height);
        const offsetX = (puzzleCanvas.width - width * scale) / 2 - minX * scale;
        const offsetY = (puzzleCanvas.height - height * scale) / 2 - minY * scale;

        puzzleCtx.fillStyle = '#2c3e50';
        puzzleCtx.beginPath();
        currentPuzzle.silhouette.forEach((p, i) => {
            const x = p[0] * scale + offsetX;
            const y = p[1] * scale + offsetY;
            if (i === 0) {
                puzzleCtx.moveTo(x, y);
            } else {
                puzzleCtx.lineTo(x, y);
            }
        });
        puzzleCtx.closePath();
        puzzleCtx.fill();
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background grid
        ctx.strokeStyle = '#ecf0f1';
        ctx.lineWidth = 1;
        const gridSize = 25 * (canvas.width / 500);
        for (let x = 0; x <= canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y <= canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Draw target area outline
        const targetSize = 200 * (canvas.width / 500);
        const targetX = (canvas.width - targetSize) / 2;
        const targetY = 20 * (canvas.width / 500);

        ctx.strokeStyle = '#bdc3c7';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.strokeRect(targetX, targetY, targetSize, targetSize);
        ctx.setLineDash([]);

        ctx.fillStyle = 'rgba(52, 73, 94, 0.1)';
        ctx.fillRect(targetX, targetY, targetSize, targetSize);

        ctx.fillStyle = '#7f8c8d';
        ctx.font = `${12 * (canvas.width / 500)}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('Target Area', canvas.width / 2, targetY + targetSize + 20 * (canvas.width / 500));

        // Draw pieces (selected piece last so it's on top)
        pieces.forEach(piece => {
            if (piece !== selectedPiece) {
                drawPiece(piece);
            }
        });

        if (selectedPiece) {
            drawPiece(selectedPiece, true);
        }
    }

    function drawPiece(piece, isSelected = false) {
        const transformedPoints = getTransformedPoints(piece);

        ctx.fillStyle = piece.color;
        ctx.strokeStyle = isSelected ? '#fff' : '#2c3e50';
        ctx.lineWidth = isSelected ? 3 : 2;

        ctx.beginPath();
        transformedPoints.forEach((p, i) => {
            if (i === 0) {
                ctx.moveTo(p[0], p[1]);
            } else {
                ctx.lineTo(p[0], p[1]);
            }
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        if (isSelected) {
            // Draw rotation indicator
            const center = getPieceCenter(piece);
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(center.x, center.y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function getTransformedPoints(piece) {
        const center = {
            x: piece.points.reduce((sum, p) => sum + p[0], 0) / piece.points.length,
            y: piece.points.reduce((sum, p) => sum + p[1], 0) / piece.points.length
        };

        return piece.points.map(p => {
            let x = p[0] - center.x;
            let y = p[1] - center.y;

            // Apply flip
            if (piece.flipped) {
                x = -x;
            }

            // Apply rotation
            const rad = piece.rotation * Math.PI / 180;
            const rotatedX = x * Math.cos(rad) - y * Math.sin(rad);
            const rotatedY = x * Math.sin(rad) + y * Math.cos(rad);

            return [
                rotatedX + center.x + piece.x,
                rotatedY + center.y + piece.y
            ];
        });
    }

    function getPieceCenter(piece) {
        const transformed = getTransformedPoints(piece);
        return {
            x: transformed.reduce((sum, p) => sum + p[0], 0) / transformed.length,
            y: transformed.reduce((sum, p) => sum + p[1], 0) / transformed.length
        };
    }

    function pointInPolygon(x, y, polygon) {
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i][0], yi = polygon[i][1];
            const xj = polygon[j][0], yj = polygon[j][1];

            if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
                inside = !inside;
            }
        }
        return inside;
    }

    function findPieceAt(x, y) {
        // Check in reverse order (top pieces first)
        for (let i = pieces.length - 1; i >= 0; i--) {
            const transformed = getTransformedPoints(pieces[i]);
            if (pointInPolygon(x, y, transformed)) {
                return pieces[i];
            }
        }
        return null;
    }

    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    function handleMouseDown(e) {
        const pos = getMousePos(e);
        const piece = findPieceAt(pos.x, pos.y);

        if (piece) {
            selectedPiece = piece;
            isDragging = true;
            dragOffset = {
                x: pos.x - piece.x,
                y: pos.y - piece.y
            };

            // Move selected piece to end of array (top layer)
            const index = pieces.indexOf(piece);
            pieces.splice(index, 1);
            pieces.push(piece);

            render();
        }
    }

    function handleMouseMove(e) {
        if (isDragging && selectedPiece) {
            const pos = getMousePos(e);
            selectedPiece.x = pos.x - dragOffset.x;
            selectedPiece.y = pos.y - dragOffset.y;
            render();
        }
    }

    function handleMouseUp() {
        if (selectedPiece) {
            snapToGrid(selectedPiece);
        }
        isDragging = false;
        render();
    }

    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const pos = getMousePos(touch);
        const piece = findPieceAt(pos.x, pos.y);

        if (piece) {
            selectedPiece = piece;
            isDragging = true;
            dragOffset = {
                x: pos.x - piece.x,
                y: pos.y - piece.y
            };

            const index = pieces.indexOf(piece);
            pieces.splice(index, 1);
            pieces.push(piece);

            render();
        }
    }

    function handleTouchMove(e) {
        e.preventDefault();
        if (isDragging && selectedPiece) {
            const touch = e.touches[0];
            const pos = getMousePos(touch);
            selectedPiece.x = pos.x - dragOffset.x;
            selectedPiece.y = pos.y - dragOffset.y;
            render();
        }
    }

    function handleTouchEnd() {
        if (selectedPiece) {
            snapToGrid(selectedPiece);
        }
        isDragging = false;
        render();
    }

    function handleKeyDown(e) {
        if (!selectedPiece) return;

        switch(e.key) {
            case 'r':
            case 'R':
                rotatePiece(45);
                break;
            case 'e':
            case 'E':
                rotatePiece(-45);
                break;
            case 'f':
            case 'F':
                flipPiece();
                break;
        }
    }

    function rotatePiece(degrees) {
        if (selectedPiece) {
            selectedPiece.rotation = (selectedPiece.rotation + degrees) % 360;
            render();
        }
    }

    function flipPiece() {
        if (selectedPiece && selectedPiece.id === 'parallelogram') {
            selectedPiece.flipped = !selectedPiece.flipped;
            render();
        }
    }

    function snapToGrid(piece) {
        const gridSize = 12.5 * piece.scale;
        piece.x = Math.round(piece.x / gridSize) * gridSize;
        piece.y = Math.round(piece.y / gridSize) * gridSize;
    }

    function rotateCW() {
        rotatePiece(45);
    }

    function rotateCCW() {
        rotatePiece(-45);
    }

    function flip() {
        flipPiece();
    }

    function prevPuzzle() {
        const newIndex = (puzzleIndex - 1 + puzzles.length) % puzzles.length;
        loadPuzzle(newIndex);
    }

    function nextPuzzle() {
        const newIndex = (puzzleIndex + 1) % puzzles.length;
        loadPuzzle(newIndex);
    }

    function shufflePieces() {
        const scale = canvas.width / 500;
        pieces.forEach((piece, index) => {
            piece.x = 30 * scale + Math.random() * (canvas.width - 150 * scale);
            piece.y = 250 * scale + Math.random() * 200 * scale;
            piece.rotation = Math.floor(Math.random() * 8) * 45;
            if (piece.id === 'parallelogram') {
                piece.flipped = Math.random() > 0.5;
            }
        });
        render();
    }

    function resetCurrentPuzzle() {
        resetPieces();
        render();
    }

    function markComplete() {
        completedPuzzles++;
        updateStats();

        GamePopup.show({
            title: 'Puzzle Complete!',
            message: `Great job! You completed the "${currentPuzzle.name}" puzzle!`,
            showConfetti: true,
            buttons: [
                { text: 'Next Puzzle', onClick: () => { GamePopup.hide(); nextPuzzle(); } },
                { text: 'Keep Playing', onClick: () => GamePopup.hide() }
            ]
        });
    }

    function updateStats() {
        document.getElementById('completedCount').textContent = completedPuzzles;
        document.getElementById('totalPuzzles').textContent = puzzles.length;
    }

    // Expose functions to window
    window.initGame = initGame;
    window.rotateCW = rotateCW;
    window.rotateCCW = rotateCCW;
    window.flip = flip;
    window.prevPuzzle = prevPuzzle;
    window.nextPuzzle = nextPuzzle;
    window.shufflePieces = shufflePieces;
    window.resetCurrentPuzzle = resetCurrentPuzzle;
    window.markComplete = markComplete;
})();
