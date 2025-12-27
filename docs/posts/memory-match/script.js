(function() {
const ICONS = [
    '🍎', '🍊', '🍋', '🍇', '🍓', '🍒', '🥝', '🍑',
    '🌟', '🌙', '☀️', '⭐', '🌈', '❄️', '🔥', '💧',
    '🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎵',
    '🦋', '🐝', '🐞', '🦄', '🐬', '🦊', '🐸', '🦉'
];

const LEVEL_CONFIGS = {
    1: { rows: 3, cols: 4, pairs: 6 },
    2: { rows: 4, cols: 4, pairs: 8 },
    3: { rows: 4, cols: 5, pairs: 10 },
    4: { rows: 5, cols: 6, pairs: 15 }
};

let currentLevel = 1;
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let gameStarted = false;
let timer = null;
let seconds = 0;
let bestScores = {};
let isProcessing = false;

function getConfig() {
    return LEVEL_CONFIGS[currentLevel];
}

function createBoard() {
    const config = getConfig();
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`;
    board.innerHTML = '';

    // Select random icons for this game
    const selectedIcons = ICONS.slice().sort(() => Math.random() - 0.5).slice(0, config.pairs);

    // Create pairs
    cards = [];
    for (let i = 0; i < config.pairs; i++) {
        cards.push({ id: i * 2, icon: selectedIcons[i], matched: false });
        cards.push({ id: i * 2 + 1, icon: selectedIcons[i], matched: false });
    }

    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);

    // Create card elements
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.index = index;
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${card.icon}</div>
            </div>
        `;
        cardElement.addEventListener('click', () => handleCardClick(index));
        board.appendChild(cardElement);
    });
}

function handleCardClick(index) {
    if (isProcessing) return;
    if (flippedCards.length >= 2) return;
    if (cards[index].matched) return;
    if (flippedCards.includes(index)) return;

    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }

    flipCard(index);
    flippedCards.push(index);

    if (flippedCards.length === 2) {
        moves++;
        updateMoves();
        checkMatch();
    }
}

function flipCard(index) {
    const cardElement = document.querySelectorAll('.card')[index];
    cardElement.classList.add('flipped');
}

function unflipCard(index) {
    const cardElement = document.querySelectorAll('.card')[index];
    cardElement.classList.remove('flipped');
}

function checkMatch() {
    const [first, second] = flippedCards;
    isProcessing = true;

    if (cards[first].icon === cards[second].icon) {
        cards[first].matched = true;
        cards[second].matched = true;
        matchedPairs++;

        const cardElements = document.querySelectorAll('.card');
        cardElements[first].classList.add('matched');
        cardElements[second].classList.add('matched');

        flippedCards = [];
        isProcessing = false;

        if (matchedPairs === getConfig().pairs) {
            endGame();
        }
    } else {
        setTimeout(() => {
            unflipCard(first);
            unflipCard(second);
            flippedCards = [];
            isProcessing = false;
        }, 1000);
    }
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function updateTimer() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('timer').textContent =
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateMoves() {
    document.getElementById('moveCount').textContent = moves;
}

function updateBestScore() {
    const best = bestScores[currentLevel];
    if (best) {
        document.getElementById('bestScore').textContent = `${best.moves} moves`;
    } else {
        document.getElementById('bestScore').textContent = '-';
    }
}

function endGame() {
    stopTimer();
    const current = { moves, seconds };
    const best = bestScores[currentLevel];

    if (!best || moves < best.moves || (moves === best.moves && seconds < best.seconds)) {
        bestScores[currentLevel] = current;
        updateBestScore();
    }

    GamePopup.show({
        title: 'Congratulations!',
        message: `Completed in ${moves} moves and ${formatTime(seconds)}!`,
        showConfetti: true
    });
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins > 0) {
        return `${mins}m ${secs}s`;
    }
    return `${secs}s`;
}

function changeLevel() {
    currentLevel = parseInt(document.getElementById('levelSelect').value);
    newGame();
}

function newGame() {
    stopTimer();
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    seconds = 0;
    gameStarted = false;
    isProcessing = false;

    updateMoves();
    updateTimer();
    updateBestScore();
    GamePopup.hide();
    createBoard();
}

// Expose functions to window
window.newGame = newGame;
window.changeLevel = changeLevel;
})();
