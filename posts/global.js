// Alert message system
const displayWinMessage = (message) => {
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

const hideWinMessage = () => {
    const winMessage = document.getElementById('winMessage');
    if (winMessage) {
        winMessage.style.display = 'none';
    }
}
