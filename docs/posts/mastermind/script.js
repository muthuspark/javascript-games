(function() {
const COLORS = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22'];
const COLOR_NAMES = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'];
const MAX_GUESSES = 10;
const CODE_LENGTH = 4;

let secretCode = [];
let currentGuess = [];
let guesses = [];
let gameOver = false;
let gamesWon = 0;
let gamesPlayed = 0;

function generateSecretCode() {
    secretCode = [];
    for (let i = 0; i < CODE_LENGTH; i++) {
        secretCode.push(Math.floor(Math.random() * COLORS.length));
    }
}

function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';

    for (let row = 0; row < MAX_GUESSES; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'guess-row';
        rowDiv.id = `row-${row}`;

        const pegsDiv = document.createElement('div');
        pegsDiv.className = 'pegs';

        for (let col = 0; col < CODE_LENGTH; col++) {
            const peg = document.createElement('div');
            peg.className = 'peg empty';
            peg.dataset.row = row;
            peg.dataset.col = col;
            pegsDiv.appendChild(peg);
        }

        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback';
        feedbackDiv.id = `feedback-${row}`;

        for (let i = 0; i < CODE_LENGTH; i++) {
            const pin = document.createElement('div');
            pin.className = 'pin';
            feedbackDiv.appendChild(pin);
        }

        rowDiv.appendChild(pegsDiv);
        rowDiv.appendChild(feedbackDiv);
        board.appendChild(rowDiv);
    }
}

function createColorPalette() {
    const palette = document.getElementById('colorPalette');
    palette.innerHTML = '';

    COLORS.forEach((color, index) => {
        const colorBtn = document.createElement('div');
        colorBtn.className = 'color-btn';
        colorBtn.style.backgroundColor = color;
        colorBtn.title = COLOR_NAMES[index];
        colorBtn.addEventListener('click', () => selectColor(index));
        palette.appendChild(colorBtn);
    });
}

function selectColor(colorIndex) {
    if (gameOver) return;
    if (currentGuess.length >= CODE_LENGTH) return;

    currentGuess.push(colorIndex);
    updateCurrentRow();
}

function updateCurrentRow() {
    const rowIndex = guesses.length;
    const row = document.getElementById(`row-${rowIndex}`);
    if (!row) return;

    const pegs = row.querySelectorAll('.peg');

    for (let i = 0; i < CODE_LENGTH; i++) {
        if (i < currentGuess.length) {
            pegs[i].style.backgroundColor = COLORS[currentGuess[i]];
            pegs[i].classList.remove('empty');
        } else {
            pegs[i].style.backgroundColor = '';
            pegs[i].classList.add('empty');
        }
    }
}

function clearCurrentGuess() {
    if (gameOver) return;
    currentGuess = [];
    updateCurrentRow();
}

function undoLastColor() {
    if (gameOver) return;
    if (currentGuess.length > 0) {
        currentGuess.pop();
        updateCurrentRow();
    }
}

function submitGuess() {
    if (gameOver) return;
    if (currentGuess.length !== CODE_LENGTH) {
        showMessage('Please select ' + CODE_LENGTH + ' colors', 'warning');
        return;
    }

    const feedback = calculateFeedback(currentGuess, secretCode);
    guesses.push({ guess: [...currentGuess], feedback });

    displayFeedback(guesses.length - 1, feedback);
    highlightRow(guesses.length - 1, false);

    if (feedback.black === CODE_LENGTH) {
        gameOver = true;
        gamesWon++;
        gamesPlayed++;
        updateStats();
        revealCode();
        showWinMessage('You cracked the code in ' + guesses.length + ' guesses!');
        return;
    }

    if (guesses.length >= MAX_GUESSES) {
        gameOver = true;
        gamesPlayed++;
        updateStats();
        revealCode();
        showLostMessage('The secret code has been revealed above.');
        return;
    }

    currentGuess = [];
    highlightRow(guesses.length, true);
    updateGuessCount();
}

function calculateFeedback(guess, code) {
    let black = 0;
    let white = 0;

    const codeCopy = [...code];
    const guessCopy = [...guess];

    // First pass: find exact matches (black pegs)
    for (let i = 0; i < CODE_LENGTH; i++) {
        if (guessCopy[i] === codeCopy[i]) {
            black++;
            codeCopy[i] = -1;
            guessCopy[i] = -2;
        }
    }

    // Second pass: find color matches in wrong position (white pegs)
    for (let i = 0; i < CODE_LENGTH; i++) {
        if (guessCopy[i] === -2) continue;

        const index = codeCopy.indexOf(guessCopy[i]);
        if (index !== -1) {
            white++;
            codeCopy[index] = -1;
        }
    }

    return { black, white };
}

function displayFeedback(rowIndex, feedback) {
    const feedbackDiv = document.getElementById(`feedback-${rowIndex}`);
    const pins = feedbackDiv.querySelectorAll('.pin');

    let pinIndex = 0;

    for (let i = 0; i < feedback.black; i++) {
        pins[pinIndex].classList.add('black');
        pinIndex++;
    }

    for (let i = 0; i < feedback.white; i++) {
        pins[pinIndex].classList.add('white');
        pinIndex++;
    }
}

function highlightRow(rowIndex, active) {
    const rows = document.querySelectorAll('.guess-row');
    rows.forEach((row, i) => {
        row.classList.remove('active');
        if (i === rowIndex && active) {
            row.classList.add('active');
        }
    });
}

function revealCode() {
    const codeDisplay = document.getElementById('secretCode');
    codeDisplay.innerHTML = '';

    secretCode.forEach(colorIndex => {
        const peg = document.createElement('div');
        peg.className = 'code-peg';
        peg.style.backgroundColor = COLORS[colorIndex];
        codeDisplay.appendChild(peg);
    });

    codeDisplay.classList.add('revealed');
}

function hideCode() {
    const codeDisplay = document.getElementById('secretCode');
    codeDisplay.innerHTML = '';
    codeDisplay.classList.remove('revealed');

    for (let i = 0; i < CODE_LENGTH; i++) {
        const peg = document.createElement('div');
        peg.className = 'code-peg hidden';
        peg.textContent = '?';
        codeDisplay.appendChild(peg);
    }
}

function showMessage(text, type) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.className = 'message ' + type;
    msg.style.display = 'block';
}

function hideMessage() {
    document.getElementById('message').style.display = 'none';
}

function updateGuessCount() {
    document.getElementById('guessCount').textContent = guesses.length + ' / ' + MAX_GUESSES;
}

function updateStats() {
    document.getElementById('gamesWon').textContent = gamesWon;
    document.getElementById('gamesPlayed').textContent = gamesPlayed;
    const winRate = gamesPlayed > 0 ? Math.round((gamesWon / gamesPlayed) * 100) : 0;
    document.getElementById('winRate').textContent = winRate + '%';
}

function newGame() {
    gameOver = false;
    currentGuess = [];
    guesses = [];

    generateSecretCode();
    createBoard();
    createColorPalette();
    hideCode();
    hideMessage();
    updateGuessCount();
    highlightRow(0, true);
}

// Expose functions to window
window.newGame = newGame;
window.submitGuess = submitGuess;
window.clearCurrentGuess = clearCurrentGuess;
window.undoLastColor = undoLastColor;
})();
