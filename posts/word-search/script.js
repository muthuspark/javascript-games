const wordDatabase = {
    programming: [
        'JAVASCRIPT', 'PYTHON', 'JAVA', 'RUBY', 'PHP', 'SQL', 'REACT', 'NODE',
        'TYPESCRIPT', 'ANGULAR', 'KOTLIN', 'SWIFT', 'RUST', 'SCALA', 'PERL',
        'FLUTTER', 'DOCKER', 'LINUX', 'AZURE', 'GITHUB', 'REDUX', 'VUE',
        'MONGODB', 'POSTGRES', 'DJANGO', 'EXPRESS', 'SPRING', 'NEXT', 'NUXT'
    ],
    animals: [
        'ELEPHANT', 'GIRAFFE', 'PENGUIN', 'DOLPHIN', 'TIGER', 'LION', 'ZEBRA',
        'KANGAROO', 'CHEETAH', 'GORILLA', 'PANDA', 'KOALA', 'JAGUAR', 'WOLF',
        'OCTOPUS', 'RHINO', 'LEOPARD', 'EAGLE', 'SHARK', 'WHALE', 'BEAR',
        'OSTRICH', 'RACCOON', 'TURTLE', 'CAMEL', 'SLOTH', 'LEMUR'
    ],
    countries: [
        'FRANCE', 'JAPAN', 'BRAZIL', 'CANADA', 'INDIA', 'SPAIN', 'ITALY',
        'GERMANY', 'EGYPT', 'MEXICO', 'CHINA', 'RUSSIA', 'KENYA', 'PERU',
        'GREECE', 'KOREA', 'TURKEY', 'SWEDEN', 'NORWAY', 'THAILAND', 'CHILE',
        'VIETNAM', 'MOROCCO', 'IRELAND', 'POLAND', 'AUSTRIA'
    ],
    fruits: [
        'APPLE', 'BANANA', 'ORANGE', 'MANGO', 'GRAPE', 'KIWI', 'LEMON',
        'CHERRY', 'PEACH', 'PLUM', 'PEAR', 'MELON', 'COCONUT', 'PAPAYA',
        'APRICOT', 'GUAVA', 'LIME', 'LYCHEE', 'PASSION', 'FIG', 'DATES'
    ],
    sports: [
        'FOOTBALL', 'BASEBALL', 'TENNIS', 'CRICKET', 'HOCKEY', 'RUGBY',
        'VOLLEYBALL', 'BOXING', 'SWIMMING', 'CYCLING', 'GOLF', 'SKIING',
        'SURFING', 'KARATE', 'ARCHERY', 'FENCING', 'ROWING', 'DIVING',
        'CLIMBING', 'RUNNING', 'SKATING', 'POLO', 'SAILING'
    ],
    colors: [
        'RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE', 'ORANGE', 'PINK', 'BROWN',
        'BLACK', 'WHITE', 'GREY', 'CYAN', 'MAGENTA', 'VIOLET', 'INDIGO',
        'TURQUOISE', 'MAROON', 'GOLD', 'SILVER', 'BEIGE'
    ],
    vegetables: [
        'CARROT', 'BROCCOLI', 'SPINACH', 'CAULIFLOWER', 'POTATO', 'TOMATO',
        'CUCUMBER', 'PEPPER', 'ONION', 'GARLIC', 'BEETROOT', 'CABBAGE',
        'RADISH', 'ZUCCHINI', 'LETTUCE', 'CELERY', 'EGGPLANT', 'MUSHROOM',
        'PEA', 'CORN', 'PUMPKIN', 'TURNIP', 'SQUASH'
    ],
    cars: [
        'TESLA', 'TOYOTA', 'BMW', 'MERCEDES', 'FORD', 'AUDI', 'VOLKSWAGEN',
        'HONDA', 'CHEVROLET', 'NISSAN', 'FERRARI', 'LAMBORGHINI', 'JAGUAR',
        'PORSCHE', 'LEXUS', 'MASERATI', 'BUGATTI', 'MCLAREN', 'SUBARU', 
        'HYUNDAI', 'KIA', 'MAZDA', 'JEEP'
    ],
    professions: [
        'DOCTOR', 'ENGINEER', 'TEACHER', 'LAWYER', 'SCIENTIST', 'ARTIST',
        'CHEF', 'NURSE', 'ARCHITECT', 'MECHANIC', 'FARMER', 'PLUMBER',
        'DANCER', 'WRITER', 'POLICE', 'FIREFIGHTER', 'DESIGNER', 'JOURNALIST',
        'PHOTOGRAPHER', 'ACCOUNTANT', 'PILOT', 'MUSICIAN', 'SOFTWARE'
    ],
    superheroes: [
        'SUPERMAN', 'BATMAN', 'WONDER WOMAN', 'SPIDERMAN', 'IRON MAN', 'THOR',
        'CAPTAIN AMERICA', 'HULK', 'FLASH', 'AQUAMAN', 'BLACK WIDOW', 'WOLVERINE',
        'BLACK PANTHER', 'DOCTOR STRANGE', 'HAWKEYE', 'GREEN LANTERN', 'DEADPOOL',
        'SHAZAM', 'ANT-MAN', 'CYBORG'
    ],
    weather: [
        'SUNNY', 'CLOUDY', 'RAINY', 'WINDY', 'STORMY', 'SNOWY', 'FOGGY',
        'DRIZZLE', 'THUNDER', 'LIGHTNING', 'HAIL', 'HUMID', 'BREEZY', 'HEATWAVE',
        'DROUGHT', 'TORNADO', 'HURRICANE', 'BLIZZARD', 'MISTY', 'GUSTY'
    ],
    instruments: [
        'GUITAR', 'PIANO', 'VIOLIN', 'DRUMS', 'FLUTE', 'SAXOPHONE', 'TRUMPET',
        'HARMONICA', 'TROMBONE', 'CELLO', 'BASS', 'CLARINET', 'HARP', 'BANJO',
        'OBOE', 'TUBA', 'XYLOPHONE', 'UKULELE'
    ],
    movies: [
        'INCEPTION', 'TITANIC', 'AVATAR', 'GLADIATOR', 'MATRIX', 'INTERSTELLAR',
        'JOKER', 'GLADIATOR', 'STAR WARS', 'GODFATHER', 'JURASSIC PARK',
        'FORREST GUMP', 'PULP FICTION', 'FROZEN', 'BATMAN', 'SPIDERMAN',
        'BLACK PANTHER', 'AVENGERS', 'TOY STORY', 'HARRY POTTER'
    ],
    cities: [
        'NEW YORK', 'LONDON', 'PARIS', 'TOKYO', 'SYDNEY', 'DUBAI', 'BERLIN',
        'MOSCOW', 'ROME', 'TORONTO', 'BARCELONA', 'BANGKOK', 'SINGAPORE',
        'LOS ANGELES', 'SEOUL', 'MUMBAI', 'SHANGHAI', 'CAIRO', 'RIO', 'ISTANBUL'
    ],
    bodyParts: [
        'HAND', 'FOOT', 'HEAD', 'EYE', 'NOSE', 'MOUTH', 'EAR', 'ARM', 'LEG',
        'KNEE', 'ELBOW', 'FINGER', 'TOE', 'HAIR', 'HEART', 'BRAIN', 'STOMACH',
        'LUNG', 'LIVER', 'KIDNEY'
    ],
    planets: [
        'MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS',
        'NEPTUNE', 'PLUTO'
    ]    
};



const gridsizes = [10, 20, 30, 40];

// Game Configuration
class WordSearchGame {
    constructor() {
        this.gameBoard = [];
        this.wordLocations = new Map();
        this.selectedCells = [];
        this.foundWords = new Set();
        this.currentCategory = 'programming';
        this.words = [];
        this.wordsPerGame = 10;
        this.gridSize = 10;
        this.directions = [
            [0, 1],   // horizontal
            [1, 0],   // vertical
            [1, 1],   // diagonal down
            [-1, 1],  // diagonal up
        ];
    }

    // Game initialization
    initializeBoard() {
        this.gameBoard = Array(this.gridSize).fill().map(() => Array(this.gridSize).fill(''));
        this.wordLocations.clear();
        this.foundWords.clear();
        this.selectedCells = [];
    }

    // Word placement logic
    canPlaceWord(word, row, col, dirRow, dirCol) {
        return [...word].every((char, i) => {
            const newRow = row + i * dirRow;
            const newCol = col + i * dirCol;
            
            if (newRow < 0 || newRow >= this.gridSize || newCol < 0 || newCol >= this.gridSize) {
                return false;
            }
            
            return this.gameBoard[newRow][newCol] === '' || 
                   this.gameBoard[newRow][newCol] === char;
        });
    }

    placeWord(word) {
        const maxAttempts = 100;
        let attempts = 0;

        while (attempts < maxAttempts) {
            const direction = this.directions[Math.floor(Math.random() * this.directions.length)];
            const row = Math.floor(Math.random() * this.gridSize);
            const col = Math.floor(Math.random() * this.gridSize);

            if (this.canPlaceWord(word, row, col, direction[0], direction[1])) {
                const positions = [];
                [...word].forEach((char, i) => {
                    const newRow = row + i * direction[0];
                    const newCol = col + i * direction[1];
                    this.gameBoard[newRow][newCol] = char;
                    positions.push([newRow, newCol]);
                });
                this.wordLocations.set(word, positions);
                return true;
            }
            attempts++;
        }
        return false;
    }

    fillEmptyCells() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.gameBoard.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell === '') {
                    this.gameBoard[i][j] = letters[Math.floor(Math.random() * letters.length)];
                }
            });
        });
    }

    // Game state management
    selectRandomWords() {
        const categoryWords = wordDatabase[this.currentCategory];
        return [...categoryWords]
            .sort(() => Math.random() - 0.5)
            .slice(0, this.wordsPerGame);
    }

    createCategoryButtons() {
        const container = document.createElement('div');
        container.className = 'category-buttons';
        
        Object.keys(wordDatabase).forEach(category => {
            const button = document.createElement('button');
            button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            button.onclick = () => this.changeCategory(category);
            button.className = 'category-btn';
            if (category === this.currentCategory) {
                button.classList.add('active-btn');
            }
            container.appendChild(button);
        });
        document.getElementById('categoryButtons').innerHTML = '';
        document.getElementById('categoryButtons').appendChild(container);
    }
    

    changeCategory(category) {
        this.currentCategory = category;
        this.updateCategoryButtons(); 
        this.newGame();
    }

    changeGridSize(size) {
        this.gridSize = size;
        this.newGame();
    }

    newGame() {
        this.words = this.selectRandomWords();
        this.createBoard();
    }

    // UI Rendering
    createBoard() {
        this.initializeBoard();
        this.words.forEach(word => this.placeWord(word));
        this.fillEmptyCells();
        this.renderBoard();
        this.renderWordList();
        this.renderGridSizeButtons();
        this.createCategoryButtons();
    }

    renderBoard() {
        const grid = document.getElementById('grid');
        grid.style.gridTemplateColumns = `repeat(${this.gridSize}, 40px)`;
        grid.innerHTML = '';

        this.gameBoard.forEach((row, i) => {
            row.forEach((cell, j) => {
                const cellElement = this.createCellElement(i, j, cell);
                grid.appendChild(cellElement);
            });
        });

        document.addEventListener('mouseup', () => this.endSelection());
    }

    createCellElement(row, col, value) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = value;
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener('mousedown', (e) => this.startSelection(e));
        cell.addEventListener('mouseover', (e) => this.updateSelection(e));
        return cell;
    }

    renderWordList() {
        const wordListElement = document.getElementById('wordList');
        wordListElement.innerHTML = '';
        this.words.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = `word-item${this.foundWords.has(word) ? ' found' : ''}`;
            wordElement.textContent = word;
            wordListElement.appendChild(wordElement);
        });
    }

    renderGridSizeButtons() {
        const gridSizeElement = document.getElementById('gridSize');
        gridSizeElement.innerHTML = '';
        gridsizes.forEach(size => {
            const button = document.createElement('button');
            button.textContent = `${size}x${size}`;
            button.addEventListener('click', () => this.changeGridSize(size));
            if(size === this.gridSize) {
                button.classList.add('active-btn');
            }
            gridSizeElement.appendChild(button);
        });
    }

    updateCategoryButtons() {
        const categoryBtns = document.getElementsByClassName('category-btn');
        Array.from(categoryBtns).forEach(btn => {
            const btnCategory = btn.textContent.toLowerCase();
            btn.classList.toggle('active-btn', btnCategory === this.currentCategory);
        });
    }

    // Selection handling
    startSelection(e) {
        this.selectedCells = [];
        const cell = e.target;
        cell.classList.add('selected');
        this.selectedCells.push([
            parseInt(cell.dataset.row),
            parseInt(cell.dataset.col)
        ]);
    }

    updateSelection(e) {
        if (this.selectedCells.length === 0) return;
        
        const cell = e.target;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        
        if (this.selectedCells.some(([r, c]) => r === row && c === col)) return;

        const firstCell = this.selectedCells[0];
        this.clearSelection(firstCell);
        this.selectedCells = [firstCell];

        const rowDiff = row - firstCell[0];
        const colDiff = col - firstCell[1];
        
        if (Math.abs(rowDiff) === Math.abs(colDiff) || rowDiff === 0 || colDiff === 0) {
            this.selectCellsInLine(firstCell, row, col);
        }
    }

    clearSelection(firstCell) {
        document.querySelectorAll('.cell.selected').forEach(cell => {
            if (parseInt(cell.dataset.row) !== firstCell[0] || 
                parseInt(cell.dataset.col) !== firstCell[1]) {
                cell.classList.remove('selected');
            }
        });
    }

    selectCellsInLine(firstCell, targetRow, targetCol) {
        const direction = [
            Math.sign(targetRow - firstCell[0]) || 0,
            Math.sign(targetCol - firstCell[1]) || 0
        ];

        let currentRow = firstCell[0];
        let currentCol = firstCell[1];

        while (currentRow !== targetRow || currentCol !== targetCol) {
            currentRow += direction[0];
            currentCol += direction[1];
            const currentCell = document.querySelector(
                `.cell[data-row="${currentRow}"][data-col="${currentCol}"]`
            );
            currentCell.classList.add('selected');
            this.selectedCells.push([currentRow, currentCol]);
        }
    }

    endSelection() {
        if (this.selectedCells.length === 0) return;

        const word = this.selectedCells
            .map(([row, col]) => this.gameBoard[row][col])
            .join('');
        const reversedWord = [...word].reverse().join('');

        if (this.words.includes(word) || this.words.includes(reversedWord)) {
            const foundWord = this.words.includes(word) ? word : reversedWord;
            if (!this.foundWords.has(foundWord)) {
                this.handleWordFound(foundWord);
            }
        }

        this.clearAllSelections();
    }

    handleWordFound(word) {
        this.foundWords.add(word);
        this.selectedCells.forEach(([row, col]) => {
            const cell = document.querySelector(
                `.cell[data-row="${row}"][data-col="${col}"]`
            );
            cell.classList.add('found');
        });
        this.renderWordList();
        this.renderGridSizeButtons();

        if (this.foundWords.size === this.words.length) {
            setTimeout(() => {
                showWinMessage('Congratulations! You found all words!');
            }, 100);
        }
    }

    clearAllSelections() {
        document.querySelectorAll('.cell.selected').forEach(cell => {
            cell.classList.remove('selected');
        });
        this.selectedCells = [];
    }
}