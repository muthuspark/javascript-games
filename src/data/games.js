// Minimal game data for routing and homepage display
// Full game metadata is in each game's Vue page component
export const games = [
  {
    slug: 'sudoku',
    title: 'Play Sudoku Online Free',
    shortTitle: 'Sudoku',
    description: 'Play classic Sudoku puzzles online for free. Fill the 9x9 grid so each row, column, and 3x3 box contains digits 1-9. Multiple difficulty levels from easy to hard.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Number Games']
  },
  {
    slug: 'maze',
    title: 'Maze Game Online - Navigate Through Puzzles',
    shortTitle: 'Maze Game',
    description: 'Navigate through randomly generated mazes using keyboard controls. Choose from 10x10 to 90x90 grid sizes for varying difficulty levels.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Navigation Games']
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe Online - Play Against AI',
    shortTitle: 'Tic Tac Toe',
    description: 'Play Tic Tac Toe online against AI with adjustable difficulty. Choose 3x3, 4x4, or 5x5 grid sizes. Classic X and O game for all ages.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Strategy Games', 'Classic Games']
  },
  {
    slug: 'connect4',
    title: 'Connect 4 Game Online - Free to Play',
    shortTitle: 'Connect 4',
    description: 'Play Connect 4 online against AI. Drop colored discs into a 7x6 grid and be first to connect four in a row. Multiple difficulty levels available.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Strategy Games', 'Classic Games']
  },
  {
    slug: 'minesweeper',
    title: 'Minesweeper Online - Classic Puzzle Game',
    shortTitle: 'Minesweeper',
    description: 'Play classic Minesweeper online. Reveal squares while avoiding hidden mines. Numbers indicate adjacent mines. Three difficulty levels available.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Classic Games']
  },
  {
    slug: 'word-search',
    title: 'Word Search Puzzle - Find Hidden Words',
    shortTitle: 'Word Search',
    description: 'Find hidden words in a grid of letters. Words can be horizontal, vertical, diagonal, or backwards. Multiple categories and grid sizes.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Word Games', 'Educational']
  },
  {
    slug: 'sliding-puzzle',
    title: 'Sliding Puzzle Game - Number Tile Puzzle',
    shortTitle: 'Sliding Puzzle',
    description: 'Slide numbered tiles to arrange them in order. Choose from 3x3 to 7x8 grid sizes. Features AI solver to demonstrate solutions.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games']
  },
  {
    slug: 'latin-square',
    title: 'Latin Square Puzzle - Logic Number Game',
    shortTitle: 'Latin Square',
    description: 'Fill the grid so each number appears exactly once in each row and column. Similar to Sudoku but without box constraints.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Number Games']
  },
  {
    slug: 'magicsquare',
    title: 'Magic Square Puzzle - Math Brain Game',
    shortTitle: 'Magic Square',
    description: 'Arrange numbers in a grid so rows, columns, and diagonals all sum to the same magic number. Great for math practice.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Math Games', 'Educational']
  },
  {
    slug: 'n-queens',
    title: 'N-Queens Puzzle - Chess Logic Game',
    shortTitle: 'N-Queens',
    description: 'Place N queens on an NxN chessboard so no two queens threaten each other. Classic chess puzzle from 4x4 to 12x12.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Chess', 'Logic Games']
  },
  {
    slug: 'knights-tour',
    title: "Knight's Tour Puzzle - Chess Movement Game",
    shortTitle: "Knight's Tour",
    description: "Move a chess knight to visit every square exactly once. Classic mathematical puzzle with hints available.",
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Chess', 'Math Games']
  },
  {
    slug: 'typing-speed',
    title: 'Typing Speed Test - WPM Calculator',
    shortTitle: 'Typing Test',
    description: 'Test your typing speed and accuracy. Measure words per minute (WPM) and characters per minute (CPM) with 60-second challenges.',
    thumbnail: 'thumbnail.png',
    categories: ['Challenge', 'Educational', 'Skills']
  },
  {
    slug: 'memory-match',
    title: 'Memory Match Game - Card Matching Puzzle',
    shortTitle: 'Memory Match',
    description: 'Flip cards to find matching pairs. Train your memory with this classic concentration game. Multiple grid sizes from easy to challenging.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Memory Games', 'Classic Games']
  },
  {
    slug: 'hangman',
    title: 'Hangman Game - Word Guessing Puzzle',
    shortTitle: 'Hangman',
    description: 'Guess the hidden word one letter at a time. Classic word guessing game with multiple categories including animals, countries, foods, and more.',
    thumbnail: 'thumbnail.png',
    categories: ['Word Games', 'Classic Games', 'Educational']
  },
  {
    slug: 'lights-out',
    title: 'Lights Out Puzzle - Turn Off All Lights',
    shortTitle: 'Lights Out',
    description: 'Toggle lights to turn them all off. Clicking a light switches it and adjacent lights. A classic logic puzzle with multiple grid sizes.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games']
  },
  {
    slug: 'simon-says',
    title: 'Simon Says Game - Memory Sequence Game',
    shortTitle: 'Simon Says',
    description: 'Watch the color sequence and repeat it back. Each round adds one more color. How long can you keep up? Classic memory game with sound.',
    thumbnail: 'thumbnail.png',
    categories: ['Memory Games', 'Classic Games', 'Challenge']
  },
  {
    slug: 'reaction-time',
    title: 'Reaction Time Test - Test Your Reflexes',
    shortTitle: 'Reaction Time',
    description: 'Test how fast you can react! Wait for the screen to turn green, then click as quickly as possible. Track your average and best reaction times.',
    thumbnail: 'thumbnail.png',
    categories: ['Challenge', 'Reflex Games', 'Skills']
  },
  {
    slug: 'whack-a-mole',
    title: 'Whack-a-Mole Game - Test Your Speed',
    shortTitle: 'Whack-a-Mole',
    description: 'Whack the moles as they pop up from their holes! A classic arcade game that tests your reflexes. Score as many points as you can in 30 seconds.',
    thumbnail: 'thumbnail.png',
    categories: ['Reflex Games', 'Classic Games', 'Challenge']
  },
  {
    slug: 'mastermind',
    title: 'Mastermind Game - Code Breaking Puzzle',
    shortTitle: 'Mastermind',
    description: 'Crack the secret color code in 10 guesses or less. Use logic and deduction from feedback pegs to figure out the hidden pattern.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Classic Games']
  },
  {
    slug: 'bulls-and-cows',
    title: 'Bulls and Cows - Number Guessing Game',
    shortTitle: 'Bulls and Cows',
    description: 'Guess the secret number using logic and deduction. Bulls mean correct digit in correct position, cows mean correct digit in wrong position.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Number Games']
  },
  {
    slug: 'nim',
    title: 'Nim Game - Strategic Object Removal',
    shortTitle: 'Nim',
    description: 'Play Nim against AI. Take objects from piles strategically - whoever takes the last object loses. A classic mathematical strategy game.',
    thumbnail: 'thumbnail.png',
    categories: ['Strategy Games', 'Logic Games', 'Classic Games']
  },
  {
    slug: 'dots-and-boxes',
    title: 'Dots and Boxes Game - Connect the Dots',
    shortTitle: 'Dots and Boxes',
    description: 'Play Dots and Boxes against AI. Draw lines between dots to complete boxes and score points. Classic pencil-and-paper strategy game.',
    thumbnail: 'thumbnail.png',
    categories: ['Strategy Games', 'Classic Games', 'Puzzles']
  },
  {
    slug: 'hex',
    title: 'Hex Game - Connection Strategy Puzzle',
    shortTitle: 'Hex',
    description: 'Play Hex against AI. Connect your sides of the board before your opponent. A classic connection strategy game with simple rules but deep tactics.',
    thumbnail: 'thumbnail.png',
    categories: ['Strategy Games', 'Logic Games', 'Classic Games']
  },
  {
    slug: 'set-game',
    title: 'Set Game - Find Matching Card Sets',
    shortTitle: 'Set Game',
    description: 'Find sets of three cards where each feature is either all the same or all different. A challenging visual logic puzzle that trains pattern recognition.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Pattern Games']
  },
  {
    slug: 'tangram',
    title: 'Tangram Puzzle - Classic Shape Puzzle Game',
    shortTitle: 'Tangram',
    description: 'Arrange seven geometric pieces to match silhouette puzzles. Drag, rotate, and flip pieces to create shapes. A timeless Chinese puzzle game.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Pattern Games', 'Classic Games']
  },
  {
    slug: 'binary-puzzle',
    title: 'Binary Puzzle (Takuzu) - Logic Number Game',
    shortTitle: 'Binary Puzzle',
    description: 'Play Binary Puzzle (Takuzu) online for free. Fill the grid with 0s and 1s following simple rules. A challenging logic puzzle that trains your brain.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Number Games']
  },
  {
    slug: 'sokoban',
    title: 'Sokoban - Classic Box Pushing Puzzle Game',
    shortTitle: 'Sokoban',
    description: 'Push boxes onto target locations in this classic Japanese puzzle game. Plan your moves carefully - once a box is pushed into a corner, it cannot be retrieved!',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Classic Games']
  }
]

// Site-wide SEO data
export const siteData = {
  siteName: 'Brain Busters',
  tagline: 'Free Online Brain Training Games',
  siteUrl: 'https://games.muthu.co',
  description: 'Play free online puzzle games including Sudoku, Minesweeper, Tic Tac Toe, and more. Train your brain with our collection of logic and strategy games.',
  author: {
    name: 'Muthukrishnan',
    twitter: '@krimuthu',
    github: 'muthuspark'
  },
  social: {
    twitter: 'https://twitter.com/krimuthu',
    github: 'https://github.com/muthuspark/javascript-games',
    linkedin: 'https://linkedin.com/in/krimuthu'
  }
}
