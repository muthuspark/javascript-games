(function() {
    let piles = [];
    let currentPlayer = 'human'; // 'human' or 'ai'
    let gameOver = false;
    let difficulty = 'medium'; // 'easy', 'medium', 'hard'
    let selectedPile = null;

    function newGame() {
        piles = generatePiles();
        currentPlayer = 'human';
        gameOver = false;
        selectedPile = null;
        GamePopup.hide();
        render();
        updateStatus();
    }

    function generatePiles() {
        // Generate 3-5 piles with 1-7 objects each
        const numPiles = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5 piles
        const newPiles = [];
        for (let i = 0; i < numPiles; i++) {
            newPiles.push(Math.floor(Math.random() * 7) + 1); // 1-7 objects
        }

        // In hard mode, ensure AI has the advantage (nim-sum = 0)
        // This means the first player (human) is in a losing position
        if (difficulty === 'hard') {
            return generateLosingPosition(numPiles);
        }

        return newPiles;
    }

    function generateLosingPosition(numPiles) {
        // Generate a position where nim-sum = 0 (losing for first player)
        // This gives AI the winning advantage with perfect play
        const piles = [];

        // Generate n-1 random piles
        for (let i = 0; i < numPiles - 1; i++) {
            piles.push(Math.floor(Math.random() * 7) + 1);
        }

        // Calculate what the last pile needs to be for nim-sum = 0
        const currentXor = piles.reduce((acc, p) => acc ^ p, 0);

        // Last pile must equal the XOR of all other piles
        let lastPile = currentXor;

        // Ensure last pile is within valid range (1-7)
        // If not, regenerate
        if (lastPile < 1 || lastPile > 7) {
            // Try adjusting one of the existing piles
            for (let i = 0; i < piles.length; i++) {
                for (let newVal = 1; newVal <= 7; newVal++) {
                    const testPiles = [...piles];
                    testPiles[i] = newVal;
                    const testXor = testPiles.reduce((acc, p) => acc ^ p, 0);
                    if (testXor >= 1 && testXor <= 7) {
                        piles[i] = newVal;
                        lastPile = testXor;
                        break;
                    }
                }
                if (lastPile >= 1 && lastPile <= 7) break;
            }
        }

        // If still invalid, use a known losing position
        if (lastPile < 1 || lastPile > 7) {
            // Classic losing positions (nim-sum = 0)
            const knownPositions = [
                [1, 2, 3],
                [1, 4, 5],
                [2, 4, 6],
                [1, 2, 3, 4, 4],
                [3, 5, 6],
                [2, 5, 7],
                [1, 6, 7],
                [3, 4, 7],
                [1, 2, 1, 2],
                [2, 2, 4, 4]
            ];
            return knownPositions[Math.floor(Math.random() * knownPositions.length)];
        }

        piles.push(lastPile);
        return piles;
    }

    function calculateNimSum() {
        return piles.reduce((acc, pile) => acc ^ pile, 0);
    }

    function getAIMove() {
        const nimSum = calculateNimSum();

        if (difficulty === 'easy') {
            // Random valid move
            return getRandomMove();
        } else if (difficulty === 'medium') {
            // 50% chance of optimal move
            if (Math.random() < 0.5) {
                return getRandomMove();
            }
        }

        // Optimal strategy (hard difficulty or 50% of medium)
        if (nimSum === 0) {
            // Losing position, make random move
            return getRandomMove();
        }

        // Find optimal move
        for (let i = 0; i < piles.length; i++) {
            const target = piles[i] ^ nimSum;
            if (target < piles[i]) {
                const remove = piles[i] - target;
                return { pile: i, count: remove };
            }
        }

        // Fallback
        return getRandomMove();
    }

    function getRandomMove() {
        const validPiles = piles.map((count, idx) => ({ idx, count }))
            .filter(p => p.count > 0);

        if (validPiles.length === 0) return null;

        const pile = validPiles[Math.floor(Math.random() * validPiles.length)];
        const count = Math.floor(Math.random() * pile.count) + 1;
        return { pile: pile.idx, count };
    }

    function makeMove(pileIndex, count) {
        if (gameOver || piles[pileIndex] < count || count < 1) return false;

        piles[pileIndex] -= count;

        // Check if game is over
        if (piles.every(p => p === 0)) {
            gameOver = true;
            if (currentPlayer === 'human') {
                GamePopup.show({
                    title: 'Better luck next time!',
                    message: 'You took the last object. The AI wins!'
                });
            } else {
                GamePopup.show({
                    title: 'Congratulations!',
                    message: 'The AI took the last object. You win!',
                    showConfetti: true
                });
            }
            return true;
        }

        // Switch player
        currentPlayer = currentPlayer === 'human' ? 'ai' : 'human';
        selectedPile = null;
        render();
        updateStatus();

        // AI's turn
        if (currentPlayer === 'ai' && !gameOver) {
            setTimeout(makeAIMove, 800);
        }

        return true;
    }

    function makeAIMove() {
        const move = getAIMove();
        if (move) {
            highlightPile(move.pile);
            setTimeout(() => {
                makeMove(move.pile, move.count);
            }, 500);
        }
    }

    function highlightPile(pileIndex) {
        const pileElements = document.querySelectorAll('.pile');
        if (pileElements[pileIndex]) {
            pileElements[pileIndex].classList.add('ai-selecting');
            setTimeout(() => {
                pileElements[pileIndex].classList.remove('ai-selecting');
            }, 400);
        }
    }

    function selectPile(pileIndex) {
        if (gameOver || currentPlayer !== 'human' || piles[pileIndex] === 0) return;

        selectedPile = pileIndex;
        render();
    }

    function takeFromPile(count) {
        if (selectedPile === null || currentPlayer !== 'human') return;

        if (count > piles[selectedPile]) {
            showMessage('Cannot take more than available!', 'error');
            return;
        }

        makeMove(selectedPile, count);
    }

    function showMessage(message, type) {
        const msgEl = document.getElementById('message');
        msgEl.textContent = message;
        msgEl.className = 'message ' + type;
        msgEl.style.display = 'block';

        setTimeout(() => {
            msgEl.style.display = 'none';
        }, 2000);
    }

    function updateStatus() {
        const statusEl = document.getElementById('gameStatus');
        if (gameOver) {
            statusEl.textContent = 'Game Over';
        } else if (currentPlayer === 'human') {
            statusEl.textContent = 'Your turn - Select a pile';
            if (selectedPile !== null) {
                statusEl.textContent = `Pile ${selectedPile + 1} selected - Choose how many to take`;
            }
        } else {
            statusEl.textContent = 'AI is thinking...';
        }
    }

    function changeDifficulty() {
        difficulty = document.getElementById('difficultySelect').value;
        newGame();
    }

    function render() {
        const container = document.getElementById('pilesContainer');
        container.innerHTML = '';

        piles.forEach((count, pileIndex) => {
            const pileDiv = document.createElement('div');
            pileDiv.className = 'pile';
            if (selectedPile === pileIndex) {
                pileDiv.classList.add('selected');
            }
            if (count === 0) {
                pileDiv.classList.add('empty');
            }
            pileDiv.onclick = () => selectPile(pileIndex);

            const pileLabel = document.createElement('div');
            pileLabel.className = 'pile-label';
            pileLabel.textContent = `Pile ${pileIndex + 1}`;

            const objectsDiv = document.createElement('div');
            objectsDiv.className = 'pile-objects';

            for (let i = 0; i < count; i++) {
                const obj = document.createElement('div');
                obj.className = 'object';
                objectsDiv.appendChild(obj);
            }

            const countDiv = document.createElement('div');
            countDiv.className = 'pile-count';
            countDiv.textContent = count === 0 ? 'Empty' : `${count} object${count !== 1 ? 's' : ''}`;

            pileDiv.appendChild(pileLabel);
            pileDiv.appendChild(objectsDiv);
            pileDiv.appendChild(countDiv);
            container.appendChild(pileDiv);
        });

        // Update take buttons
        renderTakeButtons();
    }

    function renderTakeButtons() {
        const buttonsContainer = document.getElementById('takeButtons');
        buttonsContainer.innerHTML = '';

        if (selectedPile === null || gameOver || currentPlayer !== 'human') {
            buttonsContainer.innerHTML = '<p class="hint">Select a pile first</p>';
            return;
        }

        const maxTake = piles[selectedPile];
        if (maxTake === 0) {
            buttonsContainer.innerHTML = '<p class="hint">This pile is empty</p>';
            return;
        }

        for (let i = 1; i <= maxTake; i++) {
            const btn = document.createElement('button');
            btn.className = 'take-btn';
            btn.textContent = `Take ${i}`;
            btn.onclick = () => takeFromPile(i);
            buttonsContainer.appendChild(btn);
        }
    }

    // Expose functions to window
    window.newGame = newGame;
    window.changeDifficulty = changeDifficulty;
})();
