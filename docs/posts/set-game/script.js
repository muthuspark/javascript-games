(function() {
    // Card properties: shape, color, fill, count
    const SHAPES = ['diamond', 'oval', 'squiggle'];
    const COLORS = ['red', 'green', 'purple'];
    const FILLS = ['solid', 'striped', 'empty'];
    const COUNTS = [1, 2, 3];

    let deck = [];
    let board = [];
    let selectedCards = [];
    let setsFound = 0;
    let timer = null;
    let seconds = 0;
    let gameStarted = false;
    let hintIndex = 0;

    // Generate all 81 unique cards
    function generateDeck() {
        const cards = [];
        let id = 0;
        for (const shape of SHAPES) {
            for (const color of COLORS) {
                for (const fill of FILLS) {
                    for (const count of COUNTS) {
                        cards.push({ id: id++, shape, color, fill, count });
                    }
                }
            }
        }
        return shuffleArray(cards);
    }

    function shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Check if three cards form a valid set
    function isValidSet(card1, card2, card3) {
        const checkProperty = (p1, p2, p3) => {
            return (p1 === p2 && p2 === p3) || (p1 !== p2 && p2 !== p3 && p1 !== p3);
        };

        return checkProperty(card1.shape, card2.shape, card3.shape) &&
               checkProperty(card1.color, card2.color, card3.color) &&
               checkProperty(card1.fill, card2.fill, card3.fill) &&
               checkProperty(card1.count, card2.count, card3.count);
    }

    // Find all valid sets on the board
    function findAllSets() {
        const sets = [];
        for (let i = 0; i < board.length - 2; i++) {
            for (let j = i + 1; j < board.length - 1; j++) {
                for (let k = j + 1; k < board.length; k++) {
                    if (isValidSet(board[i], board[j], board[k])) {
                        sets.push([i, j, k]);
                    }
                }
            }
        }
        return sets;
    }

    // Draw a shape SVG
    function drawShape(shape, color, fill) {
        const colorMap = {
            red: '#e74c3c',
            green: '#27ae60',
            purple: '#9b59b6'
        };
        const fillColor = colorMap[color];

        let pathD;
        if (shape === 'diamond') {
            pathD = 'M25,5 L45,25 L25,45 L5,25 Z';
        } else if (shape === 'oval') {
            pathD = 'M15,25 C15,10 35,10 35,25 C35,40 15,40 15,25 Z';
        } else {
            // squiggle
            pathD = 'M10,35 Q5,25 15,20 Q25,15 25,10 Q25,5 35,10 Q45,15 40,25 Q35,35 25,40 Q15,45 10,35 Z';
        }

        let fillAttr, strokeAttr;
        if (fill === 'solid') {
            fillAttr = fillColor;
            strokeAttr = fillColor;
        } else if (fill === 'empty') {
            fillAttr = 'none';
            strokeAttr = fillColor;
        } else {
            // striped - use pattern
            fillAttr = `url(#stripe-${color})`;
            strokeAttr = fillColor;
        }

        return `<svg viewBox="0 0 50 50" class="shape">
            <defs>
                <pattern id="stripe-${color}" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="4" stroke="${fillColor}" stroke-width="2"/>
                </pattern>
            </defs>
            <path d="${pathD}" fill="${fillAttr}" stroke="${strokeAttr}" stroke-width="2"/>
        </svg>`;
    }

    // Render a card
    function renderCard(card, index) {
        const shapes = [];
        for (let i = 0; i < card.count; i++) {
            shapes.push(drawShape(card.shape, card.color, card.fill));
        }

        const isSelected = selectedCards.includes(index);
        return `<div class="card ${isSelected ? 'selected' : ''}" data-index="${index}" onclick="selectCard(${index})">
            <div class="shapes shapes-${card.count}">
                ${shapes.join('')}
            </div>
        </div>`;
    }

    // Render the board
    function renderBoard() {
        const boardEl = document.getElementById('board');
        boardEl.innerHTML = board.map((card, i) => renderCard(card, i)).join('');
        updateStats();
    }

    // Deal initial cards
    function dealInitialCards() {
        board = [];
        for (let i = 0; i < 12 && deck.length > 0; i++) {
            board.push(deck.pop());
        }
        // Ensure there's at least one set on the board
        while (findAllSets().length === 0 && deck.length >= 3) {
            // Replace last 3 cards
            for (let i = 0; i < 3; i++) {
                deck.unshift(board.pop());
            }
            deck = shuffleArray(deck);
            for (let i = 0; i < 3; i++) {
                board.push(deck.pop());
            }
        }
    }

    // Select a card
    window.selectCard = function(index) {
        if (!gameStarted) {
            startTimer();
            gameStarted = true;
        }

        const cardIndex = selectedCards.indexOf(index);
        if (cardIndex > -1) {
            selectedCards.splice(cardIndex, 1);
        } else if (selectedCards.length < 3) {
            selectedCards.push(index);
        }

        if (selectedCards.length === 3) {
            checkSelectedSet();
        } else {
            renderBoard();
        }

        hintIndex = 0; // Reset hint when selection changes
    };

    // Check if selected cards form a valid set
    function checkSelectedSet() {
        const [i, j, k] = selectedCards;
        const card1 = board[i];
        const card2 = board[j];
        const card3 = board[k];

        if (isValidSet(card1, card2, card3)) {
            setsFound++;
            highlightSet(true);

            setTimeout(() => {
                replaceCards(selectedCards.sort((a, b) => b - a));
                selectedCards = [];

                if (findAllSets().length === 0) {
                    if (deck.length === 0) {
                        endGame();
                    } else {
                        addMoreCards();
                    }
                }

                renderBoard();
            }, 500);
        } else {
            highlightSet(false);
            setTimeout(() => {
                selectedCards = [];
                renderBoard();
            }, 500);
        }
    }

    // Highlight set (valid or invalid)
    function highlightSet(valid) {
        const cards = document.querySelectorAll('.card');
        selectedCards.forEach(idx => {
            cards[idx].classList.add(valid ? 'valid' : 'invalid');
        });
    }

    // Replace cards after finding a set
    function replaceCards(indices) {
        indices.forEach(idx => {
            if (deck.length > 0 && board.length <= 12) {
                board[idx] = deck.pop();
            } else {
                board.splice(idx, 1);
            }
        });
    }

    // Add 3 more cards to the board
    window.addCards = function() {
        if (deck.length >= 3) {
            addMoreCards();
            renderBoard();
        }
    };

    function addMoreCards() {
        for (let i = 0; i < 3 && deck.length > 0; i++) {
            board.push(deck.pop());
        }
    }

    // Show hint
    window.showHint = function() {
        const sets = findAllSets();
        if (sets.length === 0) {
            GamePopup.show({
                title: 'No Sets',
                message: 'There are no valid sets on the board. Add more cards!',
                buttons: [{ text: 'OK', onClick: () => {} }]
            });
            return;
        }

        // Cycle through hints
        const hintSet = sets[hintIndex % sets.length];
        hintIndex++;

        // Clear previous selections and show hint
        selectedCards = [];
        renderBoard();

        const cards = document.querySelectorAll('.card');
        hintSet.forEach(idx => {
            cards[idx].classList.add('hint');
        });

        setTimeout(() => {
            const hintCards = document.querySelectorAll('.card.hint');
            hintCards.forEach(card => card.classList.remove('hint'));
        }, 1500);
    };

    // Timer functions
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

    function updateStats() {
        document.getElementById('setsFound').textContent = setsFound;
        document.getElementById('cardsLeft').textContent = deck.length;
        document.getElementById('setsAvailable').textContent = findAllSets().length;
    }

    function formatTime(totalSeconds) {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        if (mins > 0) {
            return `${mins}m ${secs}s`;
        }
        return `${secs}s`;
    }

    // End game
    function endGame() {
        stopTimer();
        GamePopup.show({
            title: 'Game Complete!',
            message: `You found ${setsFound} sets in ${formatTime(seconds)}!`,
            buttons: [{ text: 'Play Again', onClick: newGame }],
            showConfetti: true
        });
    }

    // New game
    function newGame() {
        stopTimer();
        deck = generateDeck();
        board = [];
        selectedCards = [];
        setsFound = 0;
        seconds = 0;
        gameStarted = false;
        hintIndex = 0;

        GamePopup.hide();
        updateTimer();
        dealInitialCards();
        renderBoard();
    }

    // Expose to window
    window.newGame = newGame;
})();
