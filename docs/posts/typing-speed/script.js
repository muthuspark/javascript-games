class TypingGame {
    constructor() {
        // DOM elements
        this.elements = {
            typingText: document.querySelector(".typing-text p"),
            inputField: document.querySelector(".wrapper .input-field"),
            tryAgainBtn: document.querySelector(".content button"),
            timeTag: document.querySelector(".time span b"),
            mistakeTag: document.querySelector(".mistake span"),
            wpmTag: document.querySelector(".wpm span"),
            cpmTag: document.querySelector(".cpm span")
        };

        // Game state
        this.state = {
            timer: null,
            maxTime: 60,
            timeLeft: 60,
            charIndex: 0,
            mistakes: 0,
            isTyping: false
        };

        this.paragraph = "";
        this.scores = localStorage.getItem('scores')? JSON.parse(localStorage.getItem('scores')) : [];

        // Bind methods to maintain correct 'this' context
        this.initTyping = this.initTyping.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.initTimer = this.initTimer.bind(this);

        // Initialize event listeners
        this.initializeEventListeners();
        this.loadParagraph();
        this.scoreSaved = false;

        this.scoreCard = new TypingScoreCard(this.scores);
        this.renderScoresChart();
    }

    initializeEventListeners() {
        this.elements.inputField.addEventListener("input", this.initTyping);
        this.elements.tryAgainBtn.addEventListener("click", this.resetGame);
        document.addEventListener("keydown", () => this.elements.inputField.focus());
        this.elements.typingText.addEventListener("click", () => this.elements.inputField.focus());
    }

    loadParagraph() {
        this.paragraph = window.txtgen.paragraph(5);
        this.elements.typingText.innerHTML = "";
        this.paragraph.split("").forEach(char => {
            const span = `<span>${char}</span>`;
            this.elements.typingText.innerHTML += span;
        });

        this.elements.typingText.querySelectorAll("span")[0].classList.add("active");
    }

    calculateWPM() {
        const wpm = Math.round(
            ((this.state.charIndex - this.state.mistakes) / 5) /
            (this.state.maxTime - this.state.timeLeft) * 60
        );
        return wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    }

    renderScoresChart() {
        let wpm = this.scores.map(score => score.wpm);
        let cpm = this.scores.map(score => score.cpm);
        let mistakes = this.scores.map(score => score.mistakes);
        let maxWpm = Math.max(...wpm);
        let maxCpm = Math.max(...cpm);
        let minMistakes = Math.min(...mistakes);
        new TypingMetricsChart('wpm', wpm, maxWpm);
        new TypingMetricsChart('cpm', cpm, maxCpm);
        new TypingMetricsChart('mistakes', mistakes, minMistakes);
    }

    updateStats() {
        const wpm = this.calculateWPM();
        this.elements.wpmTag.innerText = wpm;
        this.elements.mistakeTag.innerText = this.state.mistakes;
        this.elements.cpmTag.innerText = this.state.charIndex - this.state.mistakes;
        this.elements.timeTag.innerText = this.state.timeLeft;
    }

    initTyping() {
        const characters = this.elements.typingText.querySelectorAll("span");
        const typedChar = this.elements.inputField.value.split("")[this.state.charIndex];

        if (this.state.charIndex < characters.length - 1 && this.state.timeLeft > 0) {
            if (!this.state.isTyping) {
                this.state.timer = setInterval(this.initTimer, 1000);
                this.state.isTyping = true;
            }

            if (typedChar == null) {
                this.handleBackspace(characters);
            } else {
                this.handleCharacterTyping(characters, typedChar);
            }

            characters.forEach(span => span.classList.remove("active"));
            characters[this.state.charIndex].classList.add("active");

            this.updateStats();
        } else {
            this.endTyping();
        }
    }

    handleBackspace(characters) {
        if (this.state.charIndex > 0) {
            this.state.charIndex--;
            if (characters[this.state.charIndex].classList.contains("incorrect")) {
                this.state.mistakes--;
            }
            characters[this.state.charIndex].classList.remove("correct", "incorrect");
        }
    }

    handleCharacterTyping(characters, typedChar) {
        if (characters[this.state.charIndex].innerText === typedChar) {
            characters[this.state.charIndex].classList.add("correct");
        } else {
            this.state.mistakes++;
            characters[this.state.charIndex].classList.add("incorrect");
        }
        this.state.charIndex++;
    }

    formatDate(date) {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false // Use 24-hour format (hh)
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    }

    endTyping() {
        clearInterval(this.state.timer);
        this.elements.inputField.value = "";
        if(!this.scoreSaved) {
            let score = {
                'date': this.formatDate(new Date()),
                'wpm': this.calculateWPM(),
                'cpm': this.state.charIndex - this.state.mistakes,
                'mistakes': this.state.mistakes
            };
            this.scores.push(score);
            localStorage.setItem('scores', JSON.stringify(this.scores));
            this.scoreSaved = true;
            this.scoreCard.addScore(score);
            this.renderScoresChart();
        }
    }

    initTimer() {
        if (this.state.timeLeft > 0) {
            this.state.timeLeft--;
            this.updateStats();
        } else {
            this.endTyping();
        }
    }

    resetGame() {
        this.loadParagraph();
        clearInterval(this.state.timer);

        // Reset game state
        this.state = {
            ...this.state,
            timeLeft: this.state.maxTime,
            charIndex: 0,
            mistakes: 0,
            isTyping: false,
            timer: null
        };
        this.scoreSaved = false;

        // Reset UI
        this.elements.inputField.value = "";
        this.updateStats();
    }
}

class TypingScoreCard {
    constructor(scores) {
        scores.forEach(score => {
            this.addScore(score);
        });
    }

    addScore(score) {
        const table = document.getElementById('history');

        // Create a new row element 
        const newRow = document.createElement("tr");

        ['date', 'wpm', 'cpm', 'mistakes'].forEach(key => {
            const cellContent = score[key];
            const newCell = document.createElement("td");
            newCell.innerHTML = cellContent;
            newRow.appendChild(newCell);
        });

        // Insert the new row at the beginning of the table's tbody
        const tbody = table.tBodies[0];
        tbody.insertBefore(newRow, tbody.firstChild);
    }
}


class TypingMetricsChart {
    constructor(id, data) {
        this.createChartElement(id, data);
    }

    createChartElement(id, data) {
        document.getElementById(id).innerHTML = "";

        const width = 100;
        const height = 70;
        const padding = 5; // Add padding to prevent line from touching edges

        // Create an SVG element
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

        const chartGroup = document.createElementNS(svgNS, "g");
        svg.appendChild(chartGroup);
        const h3 = document.createElement('span');
        h3.innerText = id;
        document.getElementById(id).appendChild(h3);
        document.getElementById(id).appendChild(svg);

        // Define x and y scales with proper handling for single-element arrays
        const xScale = (i) => {
            if (data.length === 1) {
                return width / 2; // Center the single point
            }
            return padding + ((width - 2 * padding) * i / (data.length - 1));
        };

        const yScale = (value) => {
            const maxValue = Math.max(...data);
            const minValue = Math.min(...data);
            const range = maxValue - minValue;
            
            if (range === 0) {
                return height / 2; // Center the line if all values are the same
            }
            
            return padding + ((height - 2 * padding) * (1 - (value - minValue) / range));
        };

        // Draw the line
        const linePath = document.createElementNS(svgNS, "path");
        let d = "";
        
        if (data.length === 1) {
            // For single point, draw a small horizontal line
            const x = xScale(0);
            const y = yScale(data[0]);
            d = `M${x-5},${y} L${x+5},${y}`;
        } else {
            // For multiple points, draw connecting lines
            for (let i = 0; i < data.length; i++) {
                const x = xScale(i);
                const y = yScale(data[i]);
                d += (i === 0) ? `M${x},${y}` : ` L${x},${y}`;
            }
        }
        
        linePath.setAttribute("d", d);
        linePath.setAttribute("stroke", "blue");
        linePath.setAttribute("fill", "none");
        chartGroup.appendChild(linePath);

        // Draw x-axis
        const xAxis = document.createElementNS(svgNS, "line");
        xAxis.setAttribute("x1", padding);
        xAxis.setAttribute("y1", height - padding);
        xAxis.setAttribute("x2", width - padding);
        xAxis.setAttribute("y2", height - padding);
        xAxis.setAttribute("stroke", "black");
        chartGroup.appendChild(xAxis);

        // Draw y-axis
        const yAxis = document.createElementNS(svgNS, "line");
        yAxis.setAttribute("x1", padding);
        yAxis.setAttribute("y1", padding);
        yAxis.setAttribute("x2", padding);
        yAxis.setAttribute("y2", height - padding);
        yAxis.setAttribute("stroke", "black");
        chartGroup.appendChild(yAxis);
    }
}