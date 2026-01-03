(function() {
  let canvas = null;
  let ctx = null;
  let cellSize = 50;
  let currentLevel = 0;
  let moves = 0;
  let pushes = 0;
  let history = [];
  let gameState = null;

  // Level definitions: W=wall, .=floor, P=player, B=box, T=target, O=box on target, @=player on target
  const levels = [
    // Level 1 - Tutorial
    {
      name: 'Tutorial',
      map: [
        'WWWWWW',
        'W....W',
        'W.B..W',
        'W.T..W',
        'W..P.W',
        'WWWWWW'
      ]
    },
    // Level 2 - Simple push
    {
      name: 'First Steps',
      map: [
        'WWWWWWW',
        'W.....W',
        'W.BTB.W',
        'W..P..W',
        'W.....W',
        'WWWWWWW'
      ]
    },
    // Level 3 - Corner work
    {
      name: 'Corner Push',
      map: [
        'WWWWWWWW',
        'W......W',
        'W.B..B.W',
        'W..TT..W',
        'W...P..W',
        'W......W',
        'WWWWWWWW'
      ]
    },
    // Level 4 - Narrow paths
    {
      name: 'Narrow Path',
      map: [
        'WWWWWWWW',
        'WT....TW',
        'W.WBBW.W',
        'W..P...W',
        'W......W',
        'WWWWWWWW'
      ]
    },
    // Level 5 - Box arrangement
    {
      name: 'Triple Boxes',
      map: [
        'WWWWWWWWW',
        'W.......W',
        'W..BBB..W',
        'W..TTT..W',
        'W...P...W',
        'W.......W',
        'WWWWWWWWW'
      ]
    },
    // Level 6 - L-shaped
    {
      name: 'L-Shape',
      map: [
        'WWWWWWWW',
        'W......W',
        'W.T.B..W',
        'W.TWBP.W',
        'W......W',
        'WWWWWWWW'
      ]
    },
    // Level 7 - Planning ahead
    {
      name: 'Think Ahead',
      map: [
        'WWWWWWWWW',
        'W...W...W',
        'W.B.W.T.W',
        'W.B...T.W',
        'W.P.W...W',
        'WWWWWWWWW'
      ]
    },
    // Level 8 - Tight space
    {
      name: 'Tight Squeeze',
      map: [
        'WWWWWWWW',
        'WTT....W',
        'WB.B...W',
        'W......W',
        'W...P..W',
        'WWWWWWWW'
      ]
    },
    // Level 9 - Diamond
    {
      name: 'Diamond',
      map: [
        'WWWWWWWWW',
        'W...T...W',
        'W..T.T..W',
        'W.B.B.B.W',
        'W...P...W',
        'W.......W',
        'WWWWWWWWW'
      ]
    },
    // Level 10 - Challenge
    {
      name: 'The Challenge',
      map: [
        'WWWWWWWWWW',
        'W........W',
        'W.BWWWB..W',
        'W.TW.WT..W',
        'W..W.W...W',
        'W...P....W',
        'WWWWWWWWWW'
      ]
    }
  ];

  function parseLevel(levelData) {
    const map = levelData.map;
    const state = {
      walls: [],
      floor: [],
      targets: [],
      boxes: [],
      player: { x: 0, y: 0 },
      width: map[0].length,
      height: map.length
    };

    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        const char = map[y][x];
        switch (char) {
          case 'W':
            state.walls.push({ x, y });
            break;
          case '.':
            state.floor.push({ x, y });
            break;
          case 'P':
            state.player = { x, y };
            state.floor.push({ x, y });
            break;
          case 'B':
            state.boxes.push({ x, y });
            state.floor.push({ x, y });
            break;
          case 'T':
            state.targets.push({ x, y });
            state.floor.push({ x, y });
            break;
          case 'O': // Box on target
            state.boxes.push({ x, y });
            state.targets.push({ x, y });
            state.floor.push({ x, y });
            break;
          case '@': // Player on target
            state.player = { x, y };
            state.targets.push({ x, y });
            state.floor.push({ x, y });
            break;
        }
      }
    }

    return state;
  }

  function initCanvas() {
    canvas = document.getElementById('sokobanCanvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();
  }

  function resizeCanvas() {
    if (!gameState) return;
    canvas.width = gameState.width * cellSize;
    canvas.height = gameState.height * cellSize;
  }

  function isWall(x, y) {
    return gameState.walls.some(w => w.x === x && w.y === y);
  }

  function isBox(x, y) {
    return gameState.boxes.some(b => b.x === x && b.y === y);
  }

  function isTarget(x, y) {
    return gameState.targets.some(t => t.x === x && t.y === y);
  }

  function getBoxIndex(x, y) {
    return gameState.boxes.findIndex(b => b.x === x && b.y === y);
  }

  function movePlayer(dx, dy) {
    const newX = gameState.player.x + dx;
    const newY = gameState.player.y + dy;

    // Check wall collision
    if (isWall(newX, newY)) return false;

    // Check box collision
    if (isBox(newX, newY)) {
      const boxNewX = newX + dx;
      const boxNewY = newY + dy;

      // Check if box can be pushed
      if (isWall(boxNewX, boxNewY) || isBox(boxNewX, boxNewY)) {
        return false;
      }

      // Save state for undo
      history.push({
        player: { ...gameState.player },
        boxes: gameState.boxes.map(b => ({ ...b })),
        moves: moves,
        pushes: pushes
      });

      // Push the box
      const boxIndex = getBoxIndex(newX, newY);
      gameState.boxes[boxIndex] = { x: boxNewX, y: boxNewY };
      pushes++;
    } else {
      // Save state for undo
      history.push({
        player: { ...gameState.player },
        boxes: gameState.boxes.map(b => ({ ...b })),
        moves: moves,
        pushes: pushes
      });
    }

    // Move player
    gameState.player.x = newX;
    gameState.player.y = newY;
    moves++;

    updateStats();
    draw();
    checkWin();

    return true;
  }

  function undo() {
    if (history.length === 0) return;

    const prevState = history.pop();
    gameState.player = prevState.player;
    gameState.boxes = prevState.boxes;
    moves = prevState.moves;
    pushes = prevState.pushes;

    updateStats();
    draw();
  }

  function checkWin() {
    const allBoxesOnTargets = gameState.targets.every(target =>
      gameState.boxes.some(box => box.x === target.x && box.y === target.y)
    );

    if (allBoxesOnTargets) {
      setTimeout(() => {
        const isLastLevel = currentLevel === levels.length - 1;
        GamePopup.show({
          title: 'Level Complete!',
          message: `You solved "${levels[currentLevel].name}" in ${moves} moves and ${pushes} pushes!`,
          showConfetti: true,
          buttons: isLastLevel ? [
            { text: 'Play Again', onClick: () => { currentLevel = 0; loadLevel(currentLevel); GamePopup.hide(); } }
          ] : [
            { text: 'Next Level', onClick: () => { currentLevel++; loadLevel(currentLevel); GamePopup.hide(); } },
            { text: 'Replay', onClick: () => { loadLevel(currentLevel); GamePopup.hide(); } }
          ]
        });
      }, 200);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw floor
    ctx.fillStyle = '#f5f5dc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw walls
    ctx.fillStyle = '#654321';
    gameState.walls.forEach(wall => {
      ctx.fillRect(wall.x * cellSize, wall.y * cellSize, cellSize, cellSize);
      // Add brick pattern
      ctx.strokeStyle = '#4a3520';
      ctx.lineWidth = 1;
      ctx.strokeRect(wall.x * cellSize, wall.y * cellSize, cellSize, cellSize);
      ctx.beginPath();
      ctx.moveTo(wall.x * cellSize, wall.y * cellSize + cellSize / 2);
      ctx.lineTo(wall.x * cellSize + cellSize, wall.y * cellSize + cellSize / 2);
      ctx.stroke();
    });

    // Draw targets
    ctx.fillStyle = '#ff6b6b';
    gameState.targets.forEach(target => {
      ctx.beginPath();
      ctx.arc(
        target.x * cellSize + cellSize / 2,
        target.y * cellSize + cellSize / 2,
        cellSize / 4,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.strokeStyle = '#cc5555';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw boxes
    gameState.boxes.forEach(box => {
      const onTarget = isTarget(box.x, box.y);
      ctx.fillStyle = onTarget ? '#4CAF50' : '#d4a574';
      ctx.fillRect(
        box.x * cellSize + 4,
        box.y * cellSize + 4,
        cellSize - 8,
        cellSize - 8
      );
      ctx.strokeStyle = onTarget ? '#2e7d32' : '#8b6914';
      ctx.lineWidth = 3;
      ctx.strokeRect(
        box.x * cellSize + 4,
        box.y * cellSize + 4,
        cellSize - 8,
        cellSize - 8
      );
      // Draw X on box
      ctx.strokeStyle = onTarget ? '#1b5e20' : '#6d4c41';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(box.x * cellSize + 12, box.y * cellSize + 12);
      ctx.lineTo(box.x * cellSize + cellSize - 12, box.y * cellSize + cellSize - 12);
      ctx.moveTo(box.x * cellSize + cellSize - 12, box.y * cellSize + 12);
      ctx.lineTo(box.x * cellSize + 12, box.y * cellSize + cellSize - 12);
      ctx.stroke();
    });

    // Draw player
    const px = gameState.player.x * cellSize + cellSize / 2;
    const py = gameState.player.y * cellSize + cellSize / 2;
    const pr = cellSize / 2 - 6;

    // Player body
    ctx.fillStyle = '#2196F3';
    ctx.beginPath();
    ctx.arc(px, py, pr, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1565C0';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Player face
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(px - 6, py - 4, 4, 0, Math.PI * 2);
    ctx.arc(px + 6, py - 4, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(px - 6, py - 4, 2, 0, Math.PI * 2);
    ctx.arc(px + 6, py - 4, 2, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(px, py + 2, 8, 0.2, Math.PI - 0.2);
    ctx.stroke();
  }

  function loadLevel(levelIndex) {
    if (levelIndex < 0 || levelIndex >= levels.length) return;

    currentLevel = levelIndex;
    gameState = parseLevel(levels[levelIndex]);
    moves = 0;
    pushes = 0;
    history = [];

    resizeCanvas();
    updateStats();
    updateLevelSelect();
    draw();
    GamePopup.hide();
  }

  function updateStats() {
    const movesEl = document.getElementById('moves');
    const pushesEl = document.getElementById('pushes');
    const levelNameEl = document.getElementById('levelName');

    if (movesEl) movesEl.textContent = moves;
    if (pushesEl) pushesEl.textContent = pushes;
    if (levelNameEl) levelNameEl.textContent = `Level ${currentLevel + 1}: ${levels[currentLevel].name}`;
  }

  function updateLevelSelect() {
    const select = document.getElementById('levelSelect');
    if (select) {
      select.value = currentLevel;
    }
  }

  function handleKeyPress(event) {
    if (!gameState) return;

    switch (event.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        event.preventDefault();
        movePlayer(0, -1);
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        event.preventDefault();
        movePlayer(0, 1);
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        event.preventDefault();
        movePlayer(-1, 0);
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        event.preventDefault();
        movePlayer(1, 0);
        break;
      case 'z':
      case 'Z':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          undo();
        }
        break;
      case 'u':
      case 'U':
        event.preventDefault();
        undo();
        break;
      case 'r':
      case 'R':
        event.preventDefault();
        loadLevel(currentLevel);
        break;
    }
  }

  function selectLevel() {
    const select = document.getElementById('levelSelect');
    if (select) {
      loadLevel(parseInt(select.value));
    }
  }

  function restartLevel() {
    loadLevel(currentLevel);
  }

  function undoMove() {
    undo();
  }

  function prevLevel() {
    if (currentLevel > 0) {
      loadLevel(currentLevel - 1);
    }
  }

  function nextLevel() {
    if (currentLevel < levels.length - 1) {
      loadLevel(currentLevel + 1);
    }
  }

  function populateLevelSelect() {
    const select = document.getElementById('levelSelect');
    if (!select) return;

    select.innerHTML = '';
    levels.forEach((level, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `Level ${index + 1}: ${level.name}`;
      select.appendChild(option);
    });
  }

  function initGame() {
    initCanvas();
    populateLevelSelect();
    loadLevel(0);

    document.addEventListener('keydown', handleKeyPress);
  }

  // Expose functions to window
  window.initSokoban = initGame;
  window.selectLevel = selectLevel;
  window.restartLevel = restartLevel;
  window.undoMove = undoMove;
  window.prevLevel = prevLevel;
  window.nextLevel = nextLevel;
  window.sokobanMove = movePlayer;
})();
