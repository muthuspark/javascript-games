(function() {
    let secretNumber = '';
    let digitCount = 4;
    let guesses = [];
    let gameOver = false;
    let maxGuesses = 10;

    function generateSecretNumber() {
        const digits = '0123456789'.split('');
        let secret = '';

        // First digit cannot be 0 for proper number representation
        const firstDigits = digits.filter(d => d !== '0');
        secret += firstDigits[Math.floor(Math.random() * firstDigits.length)];

        // Remove used digit
        const remaining = digits.filter(d => d !== secret[0]);

        // Pick remaining unique digits
        for (let i = 1; i < digitCount; i++) {
            const idx = Math.floor(Math.random() * remaining.length);
            secret += remaining[idx];
            remaining.splice(idx, 1);
        }

        return secret;
    }

    function calculateBullsAndCows(guess) {
        let bulls = 0;
        let cows = 0;

        for (let i = 0; i < digitCount; i++) {
            if (guess[i] === secretNumber[i]) {
                bulls++;
            } else if (secretNumber.includes(guess[i])) {
                cows++;
            }
        }

        return { bulls, cows };
    }

    function isValidGuess(guess) {
        if (guess.length !== digitCount) {
            return { valid: false, message: `Enter exactly ${digitCount} digits` };
        }

        if (!/^\d+$/.test(guess)) {
            return { valid: false, message: 'Only digits allowed' };
        }

        if (guess[0] === '0') {
            return { valid: false, message: 'First digit cannot be 0' };
        }

        const uniqueDigits = new Set(guess.split(''));
        if (uniqueDigits.size !== digitCount) {
            return { valid: false, message: 'All digits must be unique' };
        }

        return { valid: true };
    }

    function makeGuess() {
        if (gameOver) return;

        const input = document.getElementById('guessInput');
        const guess = input.value.trim();

        const validation = isValidGuess(guess);
        if (!validation.valid) {
            showMessage(validation.message, 'error');
            return;
        }

        const result = calculateBullsAndCows(guess);
        guesses.push({ guess, bulls: result.bulls, cows: result.cows });

        renderGuesses();
        input.value = '';
        input.focus();

        if (result.bulls === digitCount) {
            gameOver = true;
            GamePopup.show({
                title: 'Congratulations!',
                message: `You guessed ${secretNumber} in ${guesses.length} tries!`,
                showConfetti: true
            });
            document.getElementById('guessInput').disabled = true;
            document.getElementById('guessBtn').disabled = true;
        } else if (guesses.length >= maxGuesses) {
            gameOver = true;
            showMessage(`Game over! The number was ${secretNumber}`, 'error');
            document.getElementById('guessInput').disabled = true;
            document.getElementById('guessBtn').disabled = true;
        }

        updateGuessCount();
    }

    function renderGuesses() {
        const container = document.getElementById('guessHistory');
        container.innerHTML = '';

        guesses.forEach((g, index) => {
            const row = document.createElement('div');
            row.className = 'guess-row';

            const guessNum = document.createElement('span');
            guessNum.className = 'guess-number';
            guessNum.textContent = `#${index + 1}`;

            const guessDigits = document.createElement('span');
            guessDigits.className = 'guess-digits';
            guessDigits.textContent = g.guess;

            const bulls = document.createElement('span');
            bulls.className = 'bulls';
            bulls.innerHTML = `<span class="bull-icon">🎯</span> ${g.bulls}`;

            const cows = document.createElement('span');
            cows.className = 'cows';
            cows.innerHTML = `<span class="cow-icon">🐄</span> ${g.cows}`;

            row.appendChild(guessNum);
            row.appendChild(guessDigits);
            row.appendChild(bulls);
            row.appendChild(cows);

            container.appendChild(row);
        });

        container.scrollTop = container.scrollHeight;
    }

    function updateGuessCount() {
        const remaining = maxGuesses - guesses.length;
        document.getElementById('guessCount').textContent =
            `Guesses: ${guesses.length}/${maxGuesses}`;
    }

    function showMessage(message, type) {
        const msgEl = document.getElementById('message');
        msgEl.textContent = message;
        msgEl.className = 'message ' + type;
        msgEl.style.display = 'block';

        setTimeout(() => {
            msgEl.style.display = 'none';
        }, 3000);
    }

    function changeDifficulty() {
        digitCount = parseInt(document.getElementById('difficultySelect').value);
        newGame();
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            makeGuess();
        }
    }

    function newGame() {
        secretNumber = generateSecretNumber();
        guesses = [];
        gameOver = false;

        document.getElementById('guessHistory').innerHTML = '';
        document.getElementById('guessInput').value = '';
        document.getElementById('guessInput').disabled = false;
        document.getElementById('guessBtn').disabled = false;
        document.getElementById('guessInput').placeholder = `Enter ${digitCount} unique digits`;
        document.getElementById('guessInput').maxLength = digitCount;
        document.getElementById('message').style.display = 'none';

        // Add event listener for Enter key
        const input = document.getElementById('guessInput');
        input.removeEventListener('keypress', handleKeyPress);
        input.addEventListener('keypress', handleKeyPress);

        updateGuessCount();
        GamePopup.hide();

        input.focus();
    }

    // Expose functions to window
    window.newGame = newGame;
    window.makeGuess = makeGuess;
    window.changeDifficulty = changeDifficulty;
})();
