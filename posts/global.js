// Alert message system
const showWinMessage = (message) => {
    if (!message) {
        throw new Error('message should not be null or undefined');
    }

    const winMessageHTML = document.createElement('div');
    winMessageHTML.id = 'winMessage';
    winMessageHTML.className = 'win-message';
    winMessageHTML.innerHTML = `
        <h2>Congratulations!</h2>
        <p>${message}</p>
        <button onclick="hideWinMessage()">Play Again</button>
    `;

    const previousWinMessage = document.getElementById('winMessage');
    if (previousWinMessage) {
        previousWinMessage.remove();
    }

    document.body.appendChild(winMessageHTML);
    winMessageHTML.style.display = 'block';
};

const showLostMessage = (message) => {
    if (!message) {
        throw new Error('message should not be null or undefined');
    }

    const winMessageHTML = document.createElement('div');
    winMessageHTML.id = 'winMessage';
    winMessageHTML.className = 'win-message';
    winMessageHTML.innerHTML = `
        <h2>Better luck next time!</h2>
        <p>${message}</p>
        <button onclick="hideWinMessage()">Play Again</button>
    `;

    const previousWinMessage = document.getElementById('winMessage');
    if (previousWinMessage) {
        previousWinMessage.remove();
    }

    document.body.appendChild(winMessageHTML);
    winMessageHTML.style.display = 'block';
};

const showTieMessage = () => {
    if (!message) {
        throw new Error('message should not be null or undefined');
    }

    const winMessageHTML = document.createElement('div');
    winMessageHTML.id = 'winMessage';
    winMessageHTML.className = 'win-message';
    winMessageHTML.innerHTML = `
        <h2>Tie!</h2>
        <button onclick="hideWinMessage()">Play Again</button>
    `;

    const previousWinMessage = document.getElementById('winMessage');
    if (previousWinMessage) {
        previousWinMessage.remove();
    }

    document.body.appendChild(winMessageHTML);
    winMessageHTML.style.display = 'block';
};

const hideWinMessage = () => {
    const winMessage = document.getElementById('winMessage');
    if (winMessage) {
        winMessage.style.display = 'none';
    }
}
