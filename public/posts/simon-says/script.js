(function() {
const COLORS = ['green', 'red', 'yellow', 'blue'];
const FREQUENCIES = {
    green: 392,   // G4
    red: 329.63,  // E4
    yellow: 261.63, // C4
    blue: 196     // G3
};

let sequence = [];
let playerIndex = 0;
let isPlaying = false;
let isPlayerTurn = false;
let score = 0;
let highScore = 0;
let audioContext = null;
let strictMode = false;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playTone(color, duration = 300) {
    initAudio();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = FREQUENCIES[color];
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

function playErrorTone() {
    initAudio();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 100;
    oscillator.type = 'sawtooth';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function lightUp(color, duration = 300) {
    const btn = document.getElementById(color);
    btn.classList.add('active');
    setTimeout(() => {
        btn.classList.remove('active');
    }, duration);
}

function addToSequence() {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    sequence.push(randomColor);
}

async function playSequence() {
    isPlaying = true;
    isPlayerTurn = false;
    updateStatus('Watch the sequence...');
    disableButtons();

    await sleep(500);

    for (let i = 0; i < sequence.length; i++) {
        const color = sequence[i];
        lightUp(color, 400);
        playTone(color, 400);
        await sleep(600);
    }

    isPlaying = false;
    isPlayerTurn = true;
    playerIndex = 0;
    enableButtons();
    updateStatus('Your turn! Repeat the sequence');
}

function handleColorClick(color) {
    if (!isPlayerTurn || isPlaying) return;

    lightUp(color, 200);
    playTone(color, 200);

    if (color === sequence[playerIndex]) {
        playerIndex++;

        if (playerIndex === sequence.length) {
            // Completed the sequence
            score++;
            updateScore();
            isPlayerTurn = false;
            updateStatus('Correct! Get ready...');

            setTimeout(() => {
                addToSequence();
                playSequence();
            }, 1000);
        }
    } else {
        // Wrong color
        gameOver();
    }
}

function gameOver() {
    isPlayerTurn = false;
    playErrorTone();

    if (score > highScore) {
        highScore = score;
        updateHighScore();
    }

    updateStatus(`Game Over! You reached round ${score}`);
    document.getElementById('startBtn').style.display = 'inline-block';

    // Flash all buttons to indicate game over
    COLORS.forEach(color => {
        const btn = document.getElementById(color);
        btn.classList.add('error');
    });

    setTimeout(() => {
        COLORS.forEach(color => {
            const btn = document.getElementById(color);
            btn.classList.remove('error');
        });
    }, 500);
}

function updateStatus(text) {
    document.getElementById('status').textContent = text;
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function updateHighScore() {
    document.getElementById('highScore').textContent = highScore;
}

function disableButtons() {
    COLORS.forEach(color => {
        document.getElementById(color).classList.add('disabled');
    });
}

function enableButtons() {
    COLORS.forEach(color => {
        document.getElementById(color).classList.remove('disabled');
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleStrict() {
    strictMode = !strictMode;
    const btn = document.getElementById('strictBtn');
    if (strictMode) {
        btn.classList.add('active');
        btn.textContent = 'Strict: ON';
    } else {
        btn.classList.remove('active');
        btn.textContent = 'Strict: OFF';
    }
}

function startGame() {
    initAudio();
    sequence = [];
    playerIndex = 0;
    score = 0;
    isPlaying = false;
    isPlayerTurn = false;

    updateScore();
    document.getElementById('startBtn').style.display = 'none';

    addToSequence();
    playSequence();
}

// Set up button click handlers
function setupButtons() {
    COLORS.forEach(color => {
        const btn = document.getElementById(color);
        if (btn) {
            btn.addEventListener('click', () => handleColorClick(color));
        }
    });
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupButtons);
} else {
    setupButtons();
}

window.startGame = startGame;
window.toggleStrict = toggleStrict;
})();
