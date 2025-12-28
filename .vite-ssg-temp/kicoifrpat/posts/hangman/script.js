(function() {
const WORD_LISTS = {
    animals: ['elephant', 'giraffe', 'penguin', 'dolphin', 'kangaroo', 'butterfly', 'crocodile', 'flamingo', 'hedgehog', 'octopus', 'rhinoceros', 'squirrel', 'tortoise', 'chameleon', 'porcupine'],
    countries: ['australia', 'brazil', 'canada', 'denmark', 'ethiopia', 'france', 'germany', 'hungary', 'indonesia', 'jamaica', 'kenya', 'luxembourg', 'malaysia', 'netherlands', 'portugal'],
    foods: ['avocado', 'broccoli', 'chocolate', 'doughnut', 'espresso', 'grapefruit', 'hamburger', 'jalapeno', 'lasagna', 'mozzarella', 'pancakes', 'quesadilla', 'spaghetti', 'watermelon', 'zucchini'],
    sports: ['basketball', 'volleyball', 'badminton', 'gymnastics', 'wrestling', 'snowboard', 'swimming', 'athletics', 'cricket', 'football', 'handball', 'lacrosse', 'marathon', 'triathlon', 'archery'],
    science: ['astronomy', 'biology', 'chemistry', 'evolution', 'genetics', 'hydrogen', 'molecule', 'nitrogen', 'organism', 'photosynthesis', 'quantum', 'radiation', 'telescope', 'uranium', 'velocity']
};

const MAX_WRONG = 6;
let currentWord = '';
let currentCategory = '';
let guessedLetters = [];
let wrongGuesses = 0;
let wins = 0;
let losses = 0;
let gameOver = false;

function getRandomWord() {
    const categories = Object.keys(WORD_LISTS);
    currentCategory = categories[Math.floor(Math.random() * categories.length)];
    const words = WORD_LISTS[currentCategory];
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (const letter of letters) {
        const key = document.createElement('button');
        key.className = 'key';
        key.textContent = letter;
        key.dataset.letter = letter;
        key.addEventListener('click', () => handleGuess(letter));
        keyboard.appendChild(key);
    }
}

function handleGuess(letter) {
    if (gameOver) return;
    if (guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);

    const key = document.querySelector(`.key[data-letter="${letter}"]`);

    if (currentWord.includes(letter)) {
        key.classList.add('correct');
    } else {
        key.classList.add('wrong');
        wrongGuesses++;
        updateHangman();
    }

    updateWordDisplay();
    checkGameEnd();
}

function updateWordDisplay() {
    const display = document.getElementById('wordDisplay');
    let html = '';

    for (const char of currentWord) {
        if (guessedLetters.includes(char)) {
            html += `<span class="letter revealed">${char}</span>`;
        } else {
            html += '<span class="letter">_</span>';
        }
    }

    display.innerHTML = html;
}

function updateHangman() {
    const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];

    for (let i = 0; i < parts.length; i++) {
        const part = document.getElementById(parts[i]);
        if (i < wrongGuesses) {
            part.style.opacity = '1';
        } else {
            part.style.opacity = '0';
        }
    }

    document.getElementById('wrongCount').textContent = wrongGuesses;
}

function checkGameEnd() {
    const wordGuessed = currentWord.split('').every(char => guessedLetters.includes(char));

    if (wordGuessed) {
        gameOver = true;
        wins++;
        updateStats();
        showMessage('You won! The word was: ' + currentWord, 'win');
    } else if (wrongGuesses >= MAX_WRONG) {
        gameOver = true;
        losses++;
        updateStats();
        revealWord();
        showMessage('Game over! The word was: ' + currentWord, 'lose');
    }
}

function revealWord() {
    const display = document.getElementById('wordDisplay');
    let html = '';

    for (const char of currentWord) {
        if (guessedLetters.includes(char)) {
            html += `<span class="letter revealed">${char}</span>`;
        } else {
            html += `<span class="letter missed">${char}</span>`;
        }
    }

    display.innerHTML = html;
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

function updateStats() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
}

function updateHint() {
    document.getElementById('hint').textContent = 'Category: ' + currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
}

function resetHangman() {
    const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    parts.forEach(part => {
        document.getElementById(part).style.opacity = '0';
    });
}

function newGame() {
    currentWord = getRandomWord();
    guessedLetters = [];
    wrongGuesses = 0;
    gameOver = false;

    createKeyboard();
    updateWordDisplay();
    resetHangman();
    updateHint();
    hideMessage();
    document.getElementById('wrongCount').textContent = '0';
}

// Handle physical keyboard input
document.addEventListener('keydown', function(e) {
    if (gameOver) return;
    const letter = e.key.toUpperCase();
    if (/^[A-Z]$/.test(letter)) {
        handleGuess(letter);
    }
});

window.newGame = newGame;
})();
