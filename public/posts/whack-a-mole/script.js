(function() {
const GAME_DURATION = 30000; // 30 seconds
const GRID_SIZE = 9; // 3x3 grid

let score = 0;
let highScore = 0;
let timeLeft = 30;
let gameRunning = false;
let gameTimer = null;
let moleTimer = null;
let currentMole = null;
let moleSpeed = 1000; // Initial speed (ms mole stays visible)

function createGrid() {
    const grid = document.getElementById('moleGrid');
    grid.innerHTML = '';

    for (let i = 0; i < GRID_SIZE; i++) {
        const hole = document.createElement('div');
        hole.className = 'hole';
        hole.dataset.index = i;

        const mole = document.createElement('div');
        mole.className = 'mole';
        mole.addEventListener('click', (e) => {
            e.stopPropagation();
            whackMole(i);
        });

        hole.appendChild(mole);
        grid.appendChild(hole);
    }
}

function showMole() {
    if (!gameRunning) return;

    // Hide current mole if any
    hideMole();

    // Pick random hole
    const holes = document.querySelectorAll('.hole');
    const randomIndex = Math.floor(Math.random() * GRID_SIZE);
    currentMole = randomIndex;

    const mole = holes[randomIndex].querySelector('.mole');
    mole.classList.add('active');

    // Schedule next mole
    const hideDelay = moleSpeed * (0.5 + Math.random() * 0.5);
    moleTimer = setTimeout(() => {
        hideMole();
        if (gameRunning) {
            const nextDelay = 200 + Math.random() * 500;
            setTimeout(showMole, nextDelay);
        }
    }, hideDelay);
}

function hideMole() {
    if (currentMole !== null) {
        const holes = document.querySelectorAll('.hole');
        const mole = holes[currentMole].querySelector('.mole');
        mole.classList.remove('active');
        currentMole = null;
    }
}

function whackMole(index) {
    if (!gameRunning) return;
    if (currentMole !== index) return;

    const holes = document.querySelectorAll('.hole');
    const mole = holes[index].querySelector('.mole');

    // Add whacked animation
    mole.classList.remove('active');
    mole.classList.add('whacked');

    setTimeout(() => {
        mole.classList.remove('whacked');
    }, 200);

    score++;
    updateScore();
    currentMole = null;

    // Increase difficulty
    if (score % 5 === 0 && moleSpeed > 400) {
        moleSpeed -= 50;
    }

    // Clear current timer and show new mole
    clearTimeout(moleTimer);
    setTimeout(showMole, 300);
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function updateTime() {
    document.getElementById('timeLeft').textContent = timeLeft;
}

function updateHighScore() {
    document.getElementById('highScore').textContent = highScore;
}

function startGame() {
    if (gameRunning) return;

    score = 0;
    timeLeft = 30;
    moleSpeed = 1000;
    gameRunning = true;

    updateScore();
    updateTime();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('message').style.display = 'none';

    // Start game timer
    gameTimer = setInterval(() => {
        timeLeft--;
        updateTime();

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    // Start showing moles
    setTimeout(showMole, 500);
}

function endGame() {
    gameRunning = false;
    clearInterval(gameTimer);
    clearTimeout(moleTimer);
    hideMole();

    if (score > highScore) {
        highScore = score;
        updateHighScore();
    }

    const message = document.getElementById('message');
    message.textContent = `Game Over! You scored ${score} points!`;
    message.style.display = 'block';
    document.getElementById('startBtn').style.display = 'inline-block';
}

function init() {
    createGrid();
    updateHighScore();
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.startGame = startGame;
})();
