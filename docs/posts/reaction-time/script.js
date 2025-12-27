(function() {
const STATES = {
    WAITING: 'waiting',
    READY: 'ready',
    GO: 'go',
    RESULT: 'result',
    TOO_EARLY: 'too_early'
};

let state = STATES.WAITING;
let startTime = 0;
let timeoutId = null;
let attempts = [];
let bestTime = Infinity;

const box = document.getElementById('reactionBox');
const message = document.getElementById('message');
const resultText = document.getElementById('resultText');
const attemptsDisplay = document.getElementById('attempts');
const averageDisplay = document.getElementById('average');
const bestDisplay = document.getElementById('best');

function setState(newState) {
    state = newState;
    box.className = 'reaction-box ' + state;

    switch (state) {
        case STATES.WAITING:
            message.textContent = 'Click to Start';
            resultText.textContent = '';
            break;
        case STATES.READY:
            message.textContent = 'Wait for green...';
            resultText.textContent = '';
            break;
        case STATES.GO:
            message.textContent = 'Click NOW!';
            resultText.textContent = '';
            break;
        case STATES.RESULT:
            message.textContent = 'Click to try again';
            break;
        case STATES.TOO_EARLY:
            message.textContent = 'Too early! Click to retry';
            resultText.textContent = '';
            break;
    }
}

function startRound() {
    setState(STATES.READY);

    // Random delay between 1.5 and 5 seconds
    const delay = 1500 + Math.random() * 3500;

    timeoutId = setTimeout(() => {
        setState(STATES.GO);
        startTime = performance.now();
    }, delay);
}

function handleClick() {
    switch (state) {
        case STATES.WAITING:
        case STATES.RESULT:
        case STATES.TOO_EARLY:
            startRound();
            break;

        case STATES.READY:
            // Clicked too early
            clearTimeout(timeoutId);
            setState(STATES.TOO_EARLY);
            break;

        case STATES.GO:
            const reactionTime = Math.round(performance.now() - startTime);
            recordAttempt(reactionTime);
            break;
    }
}

function recordAttempt(time) {
    attempts.push(time);

    if (time < bestTime) {
        bestTime = time;
    }

    setState(STATES.RESULT);
    showResult(time);
    updateStats();
}

function showResult(time) {
    let rating = '';
    if (time < 200) {
        rating = 'Incredible!';
    } else if (time < 250) {
        rating = 'Amazing!';
    } else if (time < 300) {
        rating = 'Great!';
    } else if (time < 350) {
        rating = 'Good';
    } else if (time < 400) {
        rating = 'Average';
    } else {
        rating = 'Keep practicing';
    }

    resultText.innerHTML = `<span class="time">${time} ms</span><span class="rating">${rating}</span>`;
}

function updateStats() {
    attemptsDisplay.textContent = attempts.length;

    if (attempts.length > 0) {
        const avg = Math.round(attempts.reduce((a, b) => a + b, 0) / attempts.length);
        averageDisplay.textContent = avg + ' ms';
        bestDisplay.textContent = bestTime + ' ms';
    }
}

function resetGame() {
    clearTimeout(timeoutId);
    attempts = [];
    bestTime = Infinity;
    setState(STATES.WAITING);
    attemptsDisplay.textContent = '0';
    averageDisplay.textContent = '-';
    bestDisplay.textContent = '-';
}

function init() {
    const box = document.getElementById('reactionBox');
    if (box) {
        box.addEventListener('click', handleClick);
        setState(STATES.WAITING);
    }
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.resetGame = resetGame;
})();
