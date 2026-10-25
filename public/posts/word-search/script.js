(function() {
const wordDatabase = {
    programming: [
        'JAVASCRIPT', 'PYTHON', 'JAVA', 'RUBY', 'PHP', 'SQL', 'REACT', 'NODE',
        'TYPESCRIPT', 'ANGULAR', 'KOTLIN', 'SWIFT', 'RUST', 'SCALA', 'PERL',
        'FLUTTER', 'DOCKER', 'LINUX', 'AZURE', 'GITHUB', 'REDUX', 'VUE',
        'MONGODB', 'POSTGRES', 'DJANGO', 'EXPRESS', 'SPRING', 'NEXT', 'NUXT',
        'GOLANG', 'CLOJURE', 'HASKELL', 'ELIXIR', 'ERLANG', 'CUDA', 'WEBPACK',
        'BABEL', 'GRAPHQL', 'REDIS', 'NGINX', 'APACHE', 'JQUERY', 'BOOTSTRAP',
        'TAILWIND', 'SVELTE', 'EMBER', 'BACKBONE', 'LARAVEL', 'RAILS', 'FLASK',
        'FASTAPI', 'DENO', 'BUN', 'VITE', 'PRISMA', 'SUPABASE', 'FIREBASE'
    ],
    animals: [
        'ELEPHANT', 'GIRAFFE', 'PENGUIN', 'DOLPHIN', 'TIGER', 'LION', 'ZEBRA',
        'KANGAROO', 'CHEETAH', 'GORILLA', 'PANDA', 'KOALA', 'JAGUAR', 'WOLF',
        'OCTOPUS', 'RHINO', 'LEOPARD', 'EAGLE', 'SHARK', 'WHALE', 'BEAR',
        'OSTRICH', 'RACCOON', 'TURTLE', 'CAMEL', 'SLOTH', 'LEMUR', 'HIPPO',
        'CROCODILE', 'ALLIGATOR', 'FALCON', 'HAWK', 'PARROT', 'FLAMINGO',
        'PELICAN', 'WALRUS', 'SEAL', 'OTTER', 'BEAVER', 'MOOSE', 'DEER',
        'ANTELOPE', 'BUFFALO', 'BISON', 'PANTHER', 'COUGAR', 'LYNX', 'BOBCAT',
        'HYENA', 'MEERKAT', 'WOMBAT', 'PLATYPUS', 'HEDGEHOG', 'PORCUPINE'
    ],
    countries: [
        'FRANCE', 'JAPAN', 'BRAZIL', 'CANADA', 'INDIA', 'SPAIN', 'ITALY',
        'GERMANY', 'EGYPT', 'MEXICO', 'CHINA', 'RUSSIA', 'KENYA', 'PERU',
        'GREECE', 'KOREA', 'TURKEY', 'SWEDEN', 'NORWAY', 'THAILAND', 'CHILE',
        'VIETNAM', 'MOROCCO', 'IRELAND', 'POLAND', 'AUSTRIA', 'BELGIUM',
        'PORTUGAL', 'DENMARK', 'FINLAND', 'ICELAND', 'UKRAINE', 'ROMANIA',
        'HUNGARY', 'SERBIA', 'CROATIA', 'COLOMBIA', 'ARGENTINA', 'VENEZUELA',
        'ECUADOR', 'BOLIVIA', 'PARAGUAY', 'URUGUAY', 'PANAMA', 'CUBA',
        'JAMAICA', 'MALAYSIA', 'INDONESIA', 'PHILIPPINES', 'PAKISTAN', 'NEPAL'
    ],
    fruits: [
        'APPLE', 'BANANA', 'ORANGE', 'MANGO', 'GRAPE', 'KIWI', 'LEMON',
        'CHERRY', 'PEACH', 'PLUM', 'PEAR', 'MELON', 'COCONUT', 'PAPAYA',
        'APRICOT', 'GUAVA', 'LIME', 'LYCHEE', 'PASSION', 'FIG', 'DATES',
        'AVOCADO', 'POMEGRANATE', 'RASPBERRY', 'BLUEBERRY', 'STRAWBERRY',
        'BLACKBERRY', 'CRANBERRY', 'GRAPEFRUIT', 'TANGERINE', 'MANDARIN',
        'NECTARINE', 'PERSIMMON', 'DRAGONFRUIT', 'STARFRUIT', 'JACKFRUIT',
        'DURIAN', 'RAMBUTAN', 'MANGOSTEEN', 'CANTALOUPE', 'HONEYDEW', 'OLIVE'
    ],
    sports: [
        'FOOTBALL', 'BASEBALL', 'TENNIS', 'CRICKET', 'HOCKEY', 'RUGBY',
        'VOLLEYBALL', 'BOXING', 'SWIMMING', 'CYCLING', 'GOLF', 'SKIING',
        'SURFING', 'KARATE', 'ARCHERY', 'FENCING', 'ROWING', 'DIVING',
        'CLIMBING', 'RUNNING', 'SKATING', 'POLO', 'SAILING', 'BASKETBALL',
        'BADMINTON', 'SQUASH', 'LACROSSE', 'WRESTLING', 'JUDO', 'TAEKWONDO',
        'GYMNASTICS', 'TRIATHLON', 'MARATHON', 'SPRINTING', 'JAVELIN',
        'DISCUS', 'SHOTPUT', 'HURDLES', 'BIATHLON', 'BOBSLED', 'CURLING',
        'SNOWBOARD', 'KAYAKING', 'CANOEING', 'RAFTING', 'PARAGLIDING'
    ],
    colors: [
        'RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE', 'ORANGE', 'PINK', 'BROWN',
        'BLACK', 'WHITE', 'GREY', 'CYAN', 'MAGENTA', 'VIOLET', 'INDIGO',
        'TURQUOISE', 'MAROON', 'GOLD', 'SILVER', 'BEIGE', 'CORAL', 'CRIMSON',
        'SCARLET', 'BURGUNDY', 'NAVY', 'TEAL', 'AQUA', 'LIME', 'OLIVE',
        'KHAKI', 'TAN', 'IVORY', 'CREAM', 'SALMON', 'PEACH', 'LAVENDER',
        'LILAC', 'PLUM', 'ORCHID', 'FUCHSIA', 'BRONZE', 'COPPER', 'AMBER'
    ],
    vegetables: [
        'CARROT', 'BROCCOLI', 'SPINACH', 'CAULIFLOWER', 'POTATO', 'TOMATO',
        'CUCUMBER', 'PEPPER', 'ONION', 'GARLIC', 'BEETROOT', 'CABBAGE',
        'RADISH', 'ZUCCHINI', 'LETTUCE', 'CELERY', 'EGGPLANT', 'MUSHROOM',
        'PEA', 'CORN', 'PUMPKIN', 'TURNIP', 'SQUASH', 'ASPARAGUS', 'ARTICHOKE',
        'KALE', 'ARUGULA', 'CHARD', 'COLLARD', 'LEEK', 'SHALLOT', 'SCALLION',
        'FENNEL', 'OKRA', 'PARSNIP', 'RUTABAGA', 'WATERCRESS', 'ENDIVE',
        'RADICCHIO', 'KOHLRABI', 'BAMBOO', 'SPROUTS', 'EDAMAME', 'CHICKPEA'
    ],
    cars: [
        'TESLA', 'TOYOTA', 'BMW', 'MERCEDES', 'FORD', 'AUDI', 'VOLKSWAGEN',
        'HONDA', 'CHEVROLET', 'NISSAN', 'FERRARI', 'LAMBORGHINI', 'JAGUAR',
        'PORSCHE', 'LEXUS', 'MASERATI', 'BUGATTI', 'MCLAREN', 'SUBARU',
        'HYUNDAI', 'KIA', 'MAZDA', 'JEEP', 'VOLVO', 'CADILLAC', 'LINCOLN',
        'BENTLEY', 'ROLLSROYCE', 'ASTON', 'LOTUS', 'ALFA', 'FIAT', 'PEUGEOT',
        'RENAULT', 'CITROEN', 'SKODA', 'SEAT', 'SAAB', 'INFINITI', 'ACURA',
        'GENESIS', 'LUCID', 'RIVIAN', 'RIMAC', 'KOENIGSEGG', 'PAGANI'
    ],
    professions: [
        'DOCTOR', 'ENGINEER', 'TEACHER', 'LAWYER', 'SCIENTIST', 'ARTIST',
        'CHEF', 'NURSE', 'ARCHITECT', 'MECHANIC', 'FARMER', 'PLUMBER',
        'DANCER', 'WRITER', 'POLICE', 'FIREFIGHTER', 'DESIGNER', 'JOURNALIST',
        'PHOTOGRAPHER', 'ACCOUNTANT', 'PILOT', 'MUSICIAN', 'SURGEON', 'DENTIST',
        'PHARMACIST', 'THERAPIST', 'VETERINARIAN', 'ELECTRICIAN', 'CARPENTER',
        'PAINTER', 'SCULPTOR', 'ACTOR', 'DIRECTOR', 'PRODUCER', 'EDITOR',
        'TRANSLATOR', 'LIBRARIAN', 'CURATOR', 'ECONOMIST', 'ANALYST', 'BANKER',
        'BROKER', 'CONSULTANT', 'MANAGER', 'DEVELOPER', 'ASTRONAUT', 'SAILOR'
    ],
    superheroes: [
        'SUPERMAN', 'BATMAN', 'SPIDERMAN', 'THOR', 'HULK', 'FLASH', 'AQUAMAN',
        'WOLVERINE', 'DEADPOOL', 'SHAZAM', 'CYBORG', 'DAREDEVIL', 'PUNISHER',
        'BLADE', 'SPAWN', 'HELLBOY', 'ROGUE', 'STORM', 'CYCLOPS', 'GAMBIT',
        'MAGNETO', 'MYSTIQUE', 'NIGHTCRAWLER', 'COLOSSUS', 'BEAST', 'PHOENIX',
        'CABLE', 'BISHOP', 'JUBILEE', 'PSYLOCKE', 'ELEKTRA', 'CATWOMAN',
        'BATGIRL', 'SUPERGIRL', 'HAWKGIRL', 'ZATANNA', 'STARFIRE', 'RAVEN'
    ],
    weather: [
        'SUNNY', 'CLOUDY', 'RAINY', 'WINDY', 'STORMY', 'SNOWY', 'FOGGY',
        'DRIZZLE', 'THUNDER', 'LIGHTNING', 'HAIL', 'HUMID', 'BREEZY', 'HEATWAVE',
        'DROUGHT', 'TORNADO', 'HURRICANE', 'BLIZZARD', 'MISTY', 'GUSTY',
        'OVERCAST', 'SLEET', 'FROST', 'FREEZING', 'TROPICAL', 'MONSOON',
        'CYCLONE', 'TYPHOON', 'RAINBOW', 'SUNSHINE', 'TWILIGHT', 'DAWN',
        'DUSK', 'BREEZE', 'GALE', 'SQUALL', 'TEMPEST', 'WHIRLWIND', 'DUSTY'
    ],
    instruments: [
        'GUITAR', 'PIANO', 'VIOLIN', 'DRUMS', 'FLUTE', 'SAXOPHONE', 'TRUMPET',
        'HARMONICA', 'TROMBONE', 'CELLO', 'BASS', 'CLARINET', 'HARP', 'BANJO',
        'OBOE', 'TUBA', 'XYLOPHONE', 'UKULELE', 'MANDOLIN', 'ACCORDION',
        'BAGPIPES', 'BONGOS', 'CASTANETS', 'CYMBALS', 'DIDGERIDOO', 'DULCIMER',
        'GLOCKENSPIEL', 'MARACAS', 'MARIMBA', 'ORGAN', 'PICCOLO', 'RECORDER',
        'SITAR', 'TAMBOURINE', 'TIMPANI', 'TRIANGLE', 'VIBRAPHONE', 'ZITHER'
    ],
    movies: [
        'INCEPTION', 'TITANIC', 'AVATAR', 'GLADIATOR', 'MATRIX', 'INTERSTELLAR',
        'JOKER', 'GODFATHER', 'FROZEN', 'BATMAN', 'SPIDERMAN', 'AVENGERS',
        'JAWS', 'ALIEN', 'ALIENS', 'PREDATOR', 'TERMINATOR', 'ROBOCOP',
        'SCARFACE', 'GOODFELLAS', 'CASINO', 'HEAT', 'DEPARTED', 'PRESTIGE',
        'MEMENTO', 'DUNKIRK', 'TENET', 'OPPENHEIMER', 'GRAVITY', 'ARRIVAL',
        'BLADE', 'LEON', 'AMELIE', 'OLDBOY', 'PARASITE', 'WHIPLASH', 'DRIVE',
        'ZODIAC', 'SEVEN', 'FIGHT', 'SHUTTER', 'DJANGO', 'RESERVOIR', 'ROCKY'
    ],
    cities: [
        'LONDON', 'PARIS', 'TOKYO', 'SYDNEY', 'DUBAI', 'BERLIN', 'MOSCOW',
        'ROME', 'TORONTO', 'BARCELONA', 'BANGKOK', 'SINGAPORE', 'SEOUL',
        'MUMBAI', 'SHANGHAI', 'CAIRO', 'ISTANBUL', 'AMSTERDAM', 'VIENNA',
        'PRAGUE', 'BUDAPEST', 'ATHENS', 'LISBON', 'DUBLIN', 'MADRID',
        'MILAN', 'VENICE', 'FLORENCE', 'NAPLES', 'MUNICH', 'HAMBURG',
        'COLOGNE', 'ZURICH', 'GENEVA', 'BRUSSELS', 'STOCKHOLM', 'OSLO',
        'HELSINKI', 'COPENHAGEN', 'WARSAW', 'KYOTO', 'OSAKA', 'BEIJING',
        'VANCOUVER', 'MONTREAL', 'BOSTON', 'CHICAGO', 'SEATTLE', 'DENVER'
    ],
    bodyParts: [
        'HAND', 'FOOT', 'HEAD', 'EYE', 'NOSE', 'MOUTH', 'EAR', 'ARM', 'LEG',
        'KNEE', 'ELBOW', 'FINGER', 'TOE', 'HAIR', 'HEART', 'BRAIN', 'STOMACH',
        'LUNG', 'LIVER', 'KIDNEY', 'SPINE', 'SKULL', 'JAW', 'CHIN', 'CHEEK',
        'FOREHEAD', 'EYEBROW', 'EYELASH', 'TONGUE', 'TEETH', 'THROAT', 'NECK',
        'SHOULDER', 'CHEST', 'RIB', 'HIP', 'THIGH', 'CALF', 'ANKLE', 'WRIST',
        'PALM', 'THUMB', 'HEEL', 'SOLE', 'MUSCLE', 'BONE', 'SKIN', 'BLOOD'
    ],
    planets: [
        'MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS',
        'NEPTUNE', 'PLUTO', 'MOON', 'SUN', 'ASTEROID', 'COMET', 'METEOR',
        'GALAXY', 'NEBULA', 'QUASAR', 'PULSAR', 'COSMOS', 'ORBIT', 'ECLIPSE',
        'STELLAR', 'LUNAR', 'SOLAR', 'TITAN', 'EUROPA', 'GANYMEDE', 'CALLISTO',
        'TRITON', 'CHARON', 'CERES', 'ERIS', 'HAUMEA', 'MAKEMAKE', 'SEDNA'
    ]
};



const gridsizes = [10, 20, 30, 40];

class WordSearchGame {
    constructor() {
        this.gridSize = 10;
        this.currentCategory = 'programming';
        this.wordsPerGame = 10;
        this.directions = [-1, 0, 1].flatMap(row =>
            [-1, 0, 1].filter(col => row || col).map(col => [row, col]));
        this.grid = document.getElementById('grid');
        this.wordList = document.getElementById('wordList');
        this.status = document.getElementById('wordSearchStatus');
        this.progress = document.getElementById('wordSearchProgress');
        this.events = new AbortController();
        const options = { signal: this.events.signal };
        this.grid.addEventListener('keydown', event => this.onKeyDown(event), options);
        this.grid.addEventListener('click', event => this.onClick(event), options);
        this.grid.addEventListener('pointerdown', event => this.onPointerDown(event), options);
        this.grid.addEventListener('pointermove', event => this.onPointerMove(event), options);
        this.grid.addEventListener('pointerup', event => this.onPointerUp(event), options);
        this.grid.addEventListener('pointercancel', () => this.cancelSelection(), options);
        document.getElementById('newPuzzle').addEventListener('click', () => this.newGame(), options);
        document.getElementById('gridSize').addEventListener('click', event => {
            const button = event.target.closest('[data-size]');
            if (button) { this.gridSize = Number(button.dataset.size); this.newGame(); }
        }, options);
        document.getElementById('categoryButtons').addEventListener('click', event => {
            const button = event.target.closest('[data-category]');
            if (button) { this.currentCategory = button.dataset.category; this.newGame(); }
        }, options);
        this.renderOptions();
    }

    shuffle(items) {
        const result = [...items];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    canPlaceWord(word, row, col, dr, dc) {
        return [...word].every((letter, i) => {
            const cell = this.gameBoard[row + dr * i]?.[col + dc * i];
            return cell === '' || cell === letter;
        });
    }

    placeWord(word) {
        const starts = this.shuffle(Array.from({ length: this.gridSize ** 2 }, (_, i) => i));
        const directions = this.shuffle(this.directions);
        for (const start of starts) {
            const row = Math.floor(start / this.gridSize), col = start % this.gridSize;
            for (const [dr, dc] of directions) {
                if (!this.canPlaceWord(word, row, col, dr, dc)) continue;
                const positions = [...word].map((letter, i) => {
                    const r = row + dr * i, c = col + dc * i;
                    this.gameBoard[r][c] = letter;
                    return [r, c];
                });
                this.wordLocations.set(word, positions);
                return true;
            }
        }
        return false;
    }

    newGame() {
        this.cancelSelection();
        this.gameBoard = Array.from({ length: this.gridSize }, () => Array(this.gridSize).fill(''));
        this.wordLocations = new Map();
        this.foundWords = new Set();
        this.words = [];
        const candidates = this.shuffle(wordDatabase[this.currentCategory].filter(word => word.length <= this.gridSize));
        for (const word of candidates) {
            if (this.placeWord(word)) this.words.push(word);
            if (this.words.length === this.wordsPerGame) break;
        }
        this.gameBoard = this.gameBoard.map(row => row.map(letter =>
            letter || String.fromCharCode(65 + Math.floor(Math.random() * 26))));
        this.renderBoard();
        this.renderWordList();
        this.updateOptions();
        this.updateProgress();
        this.announce(`New ${this.categoryLabel(this.currentCategory)} puzzle, ${this.gridSize} by ${this.gridSize}. Find ${this.words.length} words.`);
    }

    categoryLabel(category) {
        return category === 'bodyParts' ? 'Body parts' : category[0].toUpperCase() + category.slice(1);
    }

    renderOptions() {
        const sizes = document.getElementById('gridSize');
        for (const size of gridsizes) {
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.size = size;
            button.textContent = `${size} × ${size}`;
            sizes.appendChild(button);
        }
        const categories = document.getElementById('categoryButtons');
        for (const category of Object.keys(wordDatabase)) {
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.category = category;
            button.textContent = this.categoryLabel(category);
            categories.appendChild(button);
        }
    }

    updateOptions() {
        for (const button of document.querySelectorAll('#gridSize button')) {
            button.setAttribute('aria-pressed', String(Number(button.dataset.size) === this.gridSize));
        }
        for (const button of document.querySelectorAll('#categoryButtons button')) {
            button.setAttribute('aria-pressed', String(button.dataset.category === this.currentCategory));
        }
    }

    renderBoard() {
        const fragment = document.createDocumentFragment();
        this.cells = [];
        this.grid.style.setProperty('--grid-size', this.gridSize);
        this.grid.setAttribute('aria-rowcount', this.gridSize);
        this.grid.setAttribute('aria-colcount', this.gridSize);
        this.gameBoard.forEach((letters, row) => {
            const rowElement = document.createElement('div');
            rowElement.className = 'word-search-row';
            rowElement.setAttribute('role', 'row');
            letters.forEach((letter, col) => {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.textContent = letter;
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.setAttribute('role', 'gridcell');
                cell.setAttribute('aria-label', `${letter}, row ${row + 1}, column ${col + 1}`);
                cell.setAttribute('aria-selected', 'false');
                cell.tabIndex = row === 0 && col === 0 ? 0 : -1;
                rowElement.appendChild(cell);
                this.cells.push(cell);
            });
            fragment.appendChild(rowElement);
        });
        this.grid.replaceChildren(fragment);
    }

    renderWordList() {
        const fragment = document.createDocumentFragment();
        for (const word of this.words) {
            const item = document.createElement('li');
            const found = this.foundWords.has(word);
            item.className = `word-item${found ? ' found' : ''}`;
            item.textContent = found ? `✓ ${word}` : word;
            fragment.appendChild(item);
        }
        this.wordList.replaceChildren(fragment);
    }

    announce(message) { this.status.textContent = message; }
    updateProgress() { this.progress.textContent = `${this.foundWords.size} of ${this.words.length} words found`; }
    cellAt(row, col) { return this.cells[row * this.gridSize + col]; }
    eventCell(event) { return event.target.closest('.cell'); }

    focusCell(cell) {
        const previous = this.grid.querySelector('[tabindex="0"]');
        if (previous) previous.tabIndex = -1;
        cell.tabIndex = 0;
        cell.focus({ preventScroll: true });
        cell.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }

    selectTo(cell) {
        this.clearHighlight();
        if (!this.anchor) return;
        const [row, col] = this.anchor;
        const dr = Number(cell.dataset.row) - row, dc = Number(cell.dataset.col) - col;
        if (dr && dc && Math.abs(dr) !== Math.abs(dc)) return;
        const length = Math.max(Math.abs(dr), Math.abs(dc)) + 1;
        this.selectedCells = Array.from({ length }, (_, i) =>
            this.cellAt(row + Math.sign(dr) * i, col + Math.sign(dc) * i));
        for (const selected of this.selectedCells) {
            selected.classList.add('selected');
            selected.setAttribute('aria-selected', 'true');
        }
    }

    clearHighlight() {
        for (const cell of this.selectedCells || []) {
            cell.classList.remove('selected');
            cell.setAttribute('aria-selected', 'false');
        }
        this.selectedCells = [];
    }

    cancelSelection() {
        this.clearHighlight();
        this.anchor = null;
        this.pointer = null;
    }

    chooseCell(cell) {
        this.focusCell(cell);
        if (!this.anchor) {
            this.anchor = [Number(cell.dataset.row), Number(cell.dataset.col)];
            this.selectTo(cell);
            this.announce('Start selected. Choose the last letter, or press Escape to cancel.');
        } else {
            this.selectTo(cell);
            this.endSelection();
        }
    }

    onClick(event) {
        // A completed drag also emits a click; only use clicks for endpoint selection.
        if (this.ignoreClick) { this.ignoreClick = false; return; }
        const cell = this.eventCell(event);
        if (cell) this.chooseCell(cell);
    }

    onKeyDown(event) {
        const cell = this.eventCell(event);
        if (!cell) return;
        const moves = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };
        if (moves[event.key]) {
            event.preventDefault();
            const [dr, dc] = moves[event.key];
            const row = Math.max(0, Math.min(this.gridSize - 1, Number(cell.dataset.row) + dr));
            const col = Math.max(0, Math.min(this.gridSize - 1, Number(cell.dataset.col) + dc));
            const next = this.cellAt(row, col);
            this.focusCell(next);
            if (this.anchor) this.selectTo(next);
        } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.chooseCell(cell);
        } else if (event.key === 'Escape') {
            event.preventDefault();
            this.cancelSelection();
            this.announce('Selection cancelled.');
        }
    }

    onPointerDown(event) {
        if (event.button !== 0 || !event.isPrimary) return;
        const cell = this.eventCell(event);
        if (!cell) return;
        this.ignoreClick = false;
        this.pointer = { id: event.pointerId, start: cell, dragged: false };
        // Touch uses two taps so swiping still scrolls the board.
    }

    onPointerMove(event) {
        if (!this.pointer || this.pointer.id !== event.pointerId || event.pointerType === 'touch') return;
        const cell = document.elementFromPoint(event.clientX, event.clientY)?.closest('.cell');
        if (!cell || !this.grid.contains(cell)) return;
        if (!this.pointer.dragged && cell !== this.pointer.start) {
            this.pointer.dragged = true;
            this.anchor = [Number(this.pointer.start.dataset.row), Number(this.pointer.start.dataset.col)];
            this.grid.setPointerCapture(event.pointerId);
        }
        if (this.pointer.dragged) this.selectTo(cell);
    }

    onPointerUp(event) {
        if (!this.pointer || this.pointer.id !== event.pointerId) return;
        const dragged = this.pointer.dragged;
        if (this.grid.hasPointerCapture(event.pointerId)) this.grid.releasePointerCapture(event.pointerId);
        this.pointer = null;
        if (dragged) {
            this.ignoreClick = true;
            this.endSelection();
        }
    }

    endSelection() {
        const selected = this.selectedCells.map(cell => cell.textContent).join('');
        const reversed = [...selected].reverse().join('');
        const word = this.words.find(word => word === selected || word === reversed);
        if (word && !this.foundWords.has(word)) {
            this.foundWords.add(word);
            for (const cell of this.selectedCells) cell.classList.add('found');
            this.renderWordList();
            this.updateProgress();
            this.announce(this.foundWords.size === this.words.length
                ? 'Puzzle complete! You found every word. Choose New puzzle to play again.'
                : `${word} found. ${this.foundWords.size} of ${this.words.length} words found.`);
        } else {
            this.announce(word ? `${word} was already found.` : 'No matching word. Try another selection.');
        }
        this.cancelSelection();
    }

    destroy() {
        this.events.abort();
        this.cancelSelection();
    }
}

window.WordSearchGame = WordSearchGame;
})();
