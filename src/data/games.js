export const games = [
  {
    slug: 'sudoku',
    title: 'Play Sudoku Online Free',
    shortTitle: 'Sudoku',
    description: 'Play classic Sudoku puzzles online for free. Fill the 9x9 grid so each row, column, and 3x3 box contains digits 1-9. Multiple difficulty levels from easy to hard.',
    metaDescription: 'Play free online Sudoku puzzles with easy, medium, and hard difficulty levels. Train your brain with this classic number placement game. No download required.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Number Games'],
    keywords: ['sudoku online', 'free sudoku', 'sudoku puzzle', 'number puzzle', 'brain games'],
    initCode: 'newGame();',
    faqs: [
      {
        question: 'How do you play Sudoku?',
        answer: 'Fill the 9x9 grid so that each row, column, and 3x3 box contains the numbers 1-9 exactly once. Start with the given numbers and use logic to fill in the rest.'
      },
      {
        question: 'What are the rules of Sudoku?',
        answer: 'Each row must contain numbers 1-9 without repetition. Each column must contain numbers 1-9 without repetition. Each 3x3 box must contain numbers 1-9 without repetition.'
      },
      {
        question: 'Is Sudoku good for your brain?',
        answer: 'Yes! Sudoku improves logical thinking, memory, and concentration. Regular play can help keep your mind sharp and may reduce cognitive decline.'
      }
    ]
  },
  {
    slug: 'maze',
    title: 'Maze Game Online - Navigate Through Puzzles',
    shortTitle: 'Maze Game',
    description: 'Navigate through randomly generated mazes using keyboard controls. Choose from 10x10 to 90x90 grid sizes for varying difficulty levels.',
    metaDescription: 'Play free online maze games with adjustable difficulty. Navigate through randomly generated mazes from 10x10 to 90x90. Use arrow keys or WASD to play.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Navigation Games'],
    keywords: ['maze game', 'online maze', 'puzzle maze', 'labyrinth game', 'maze solver'],
    initCode: 'generateNewMaze();',
    faqs: [
      {
        question: 'How do you play the maze game?',
        answer: 'Use arrow keys or WASD to move the red square through the maze. Navigate from the start to the green exit point to win.'
      },
      {
        question: 'What maze sizes are available?',
        answer: 'Choose from 10x10 up to 90x90 grid sizes. Larger mazes are more challenging and take longer to solve.'
      }
    ]
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe Online - Play Against AI',
    shortTitle: 'Tic Tac Toe',
    description: 'Play Tic Tac Toe online against AI with adjustable difficulty. Choose 3x3, 4x4, or 5x5 grid sizes. Classic X and O game for all ages.',
    metaDescription: 'Play free Tic Tac Toe online against computer AI. Multiple grid sizes (3x3, 4x4, 5x5) and difficulty levels. Classic noughts and crosses game.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Strategy Games', 'Classic Games'],
    keywords: ['tic tac toe', 'noughts and crosses', 'x and o game', 'tic tac toe online', 'play tic tac toe'],
    initCode: 'startNewGame();',
    faqs: [
      {
        question: 'How do you win at Tic Tac Toe?',
        answer: 'Get three (or more on larger grids) of your symbols in a row horizontally, vertically, or diagonally before your opponent does.'
      },
      {
        question: 'Can you play Tic Tac Toe against computer?',
        answer: 'Yes! This version features AI opponents with easy, medium, and hard difficulty levels.'
      }
    ]
  },
  {
    slug: 'connect4',
    title: 'Connect 4 Game Online - Free to Play',
    shortTitle: 'Connect 4',
    description: 'Play Connect 4 online against AI. Drop colored discs into a 7x6 grid and be first to connect four in a row. Multiple difficulty levels available.',
    metaDescription: 'Play Connect 4 online free against computer AI. 8 difficulty levels from beginner to expert. Classic strategy game - connect four discs to win.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Strategy Games', 'Classic Games'],
    keywords: ['connect 4', 'connect four', 'four in a row', 'connect 4 online', 'strategy game'],
    initCode: 'Start();',
    faqs: [
      {
        question: 'How do you play Connect 4?',
        answer: 'Take turns dropping colored discs into columns. The first player to connect four discs horizontally, vertically, or diagonally wins.'
      },
      {
        question: 'What is the best strategy for Connect 4?',
        answer: 'Control the center column, build multiple threats at once, and block your opponent while setting up your own winning combinations.'
      }
    ]
  },
  {
    slug: 'minesweeper',
    title: 'Minesweeper Online - Classic Puzzle Game',
    shortTitle: 'Minesweeper',
    description: 'Play classic Minesweeper online. Reveal squares while avoiding hidden mines. Numbers indicate adjacent mines. Three difficulty levels available.',
    metaDescription: 'Play Minesweeper online free with easy, medium, and hard modes. Classic puzzle game - uncover squares without hitting mines. No download needed.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Classic Games'],
    keywords: ['minesweeper', 'minesweeper online', 'mine sweeper game', 'puzzle game', 'logic puzzle'],
    initCode: 'initGame();',
    faqs: [
      {
        question: 'How do you play Minesweeper?',
        answer: 'Click to reveal squares. Numbers show how many mines are adjacent. Right-click to flag suspected mines. Reveal all non-mine squares to win.'
      },
      {
        question: 'What do the numbers mean in Minesweeper?',
        answer: 'Each number indicates how many of the 8 surrounding squares contain mines. Use this information to deduce safe squares.'
      }
    ]
  },
  {
    slug: 'word-search',
    title: 'Word Search Puzzle - Find Hidden Words',
    shortTitle: 'Word Search',
    description: 'Find hidden words in a grid of letters. Words can be horizontal, vertical, diagonal, or backwards. Multiple categories and grid sizes.',
    metaDescription: 'Play free word search puzzles online. Find hidden words in letter grids with multiple categories. Great for vocabulary and brain training.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Word Games', 'Educational'],
    keywords: ['word search', 'word find', 'word puzzle', 'hidden words', 'word search puzzle'],
    initCode: 'const game = new WordSearchGame(); game.newGame();',
    faqs: [
      {
        question: 'How do you play Word Search?',
        answer: 'Find words from the list hidden in the letter grid. Words can go horizontally, vertically, diagonally, and even backwards. Click and drag to select.'
      },
      {
        question: 'Are word searches good for your brain?',
        answer: 'Yes! Word searches improve vocabulary, pattern recognition, and concentration. They are great for all ages.'
      }
    ]
  },
  {
    slug: 'sliding-puzzle',
    title: 'Sliding Puzzle Game - Number Tile Puzzle',
    shortTitle: 'Sliding Puzzle',
    description: 'Slide numbered tiles to arrange them in order. Choose from 3x3 to 7x8 grid sizes. Features AI solver to demonstrate solutions.',
    metaDescription: 'Play sliding tile puzzles online free. Arrange numbered tiles in order by sliding them. 10 difficulty levels with AI solver. Classic 15 puzzle.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games'],
    keywords: ['sliding puzzle', '15 puzzle', 'tile puzzle', 'number puzzle', 'sliding tile game'],
    initCode: 'newGame();',
    faqs: [
      {
        question: 'How do you solve a sliding puzzle?',
        answer: 'Slide tiles into the empty space to rearrange them in numerical order. Start by solving the top row, then work your way down.'
      },
      {
        question: 'What is the 15 puzzle?',
        answer: 'The 15 puzzle is a classic sliding puzzle with 15 numbered tiles in a 4x4 grid. You slide tiles to arrange them from 1 to 15.'
      }
    ]
  },
  {
    slug: 'latin-square',
    title: 'Latin Square Puzzle - Logic Number Game',
    shortTitle: 'Latin Square',
    description: 'Fill the grid so each number appears exactly once in each row and column. Similar to Sudoku but without box constraints.',
    metaDescription: 'Play Latin Square puzzles online. Fill the grid so each number appears once per row and column. Great logic training game for all skill levels.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Logic Games', 'Number Games'],
    keywords: ['latin square', 'logic puzzle', 'number grid', 'latin square puzzle', 'math puzzle'],
    initCode: 'initializePuzzle(); renderGrid();',
    faqs: [
      {
        question: 'What is a Latin Square?',
        answer: 'A Latin Square is a grid where each symbol (usually numbers) appears exactly once in each row and once in each column.'
      },
      {
        question: 'How is Latin Square different from Sudoku?',
        answer: 'Latin Square only requires unique numbers in rows and columns. Sudoku adds the constraint of unique numbers in 3x3 boxes too.'
      }
    ]
  },
  {
    slug: 'magicsquare',
    title: 'Magic Square Puzzle - Math Brain Game',
    shortTitle: 'Magic Square',
    description: 'Arrange numbers in a grid so rows, columns, and diagonals all sum to the same magic number. Great for math practice.',
    metaDescription: 'Play Magic Square puzzles online. Arrange numbers so all rows, columns, and diagonals have the same sum. Fun math brain training game.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Math Games', 'Educational'],
    keywords: ['magic square', 'math puzzle', 'number puzzle', 'magic square solver', 'math game'],
    initCode: 'initGame();',
    faqs: [
      {
        question: 'What is a Magic Square?',
        answer: 'A Magic Square is a grid of numbers where every row, column, and diagonal adds up to the same total, called the magic constant.'
      },
      {
        question: 'How do you calculate the magic constant?',
        answer: 'For an n×n magic square using numbers 1 to n², the magic constant is n(n²+1)/2. For a 3x3 square, it is 15.'
      }
    ]
  },
  {
    slug: 'n-queens',
    title: 'N-Queens Puzzle - Chess Logic Game',
    shortTitle: 'N-Queens',
    description: 'Place N queens on an NxN chessboard so no two queens threaten each other. Classic chess puzzle from 4x4 to 12x12.',
    metaDescription: 'Play the N-Queens puzzle online. Place queens on a chessboard without them threatening each other. Classic computer science puzzle game.',
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Chess', 'Logic Games'],
    keywords: ['n queens', 'eight queens', 'chess puzzle', 'queen placement', 'logic puzzle'],
    initCode: 'initializePuzzle();',
    faqs: [
      {
        question: 'What is the N-Queens puzzle?',
        answer: 'Place N queens on an NxN chessboard so no two queens can attack each other. Queens attack horizontally, vertically, and diagonally.'
      },
      {
        question: 'How many solutions does the 8 Queens puzzle have?',
        answer: 'The 8 Queens puzzle has 92 distinct solutions, or 12 fundamental solutions when accounting for symmetry.'
      }
    ]
  },
  {
    slug: 'knights-tour',
    title: "Knight's Tour Puzzle - Chess Movement Game",
    shortTitle: "Knight's Tour",
    description: "Move a chess knight to visit every square exactly once. Classic mathematical puzzle with hints available.",
    metaDescription: "Play the Knight's Tour puzzle online. Move a chess knight to visit every square on the board exactly once. Classic Hamiltonian path puzzle.",
    thumbnail: 'thumbnail.png',
    categories: ['Puzzles', 'Chess', 'Math Games'],
    keywords: ['knights tour', 'chess puzzle', 'knight moves', 'hamiltonian path', 'chess game'],
    initCode: 'initializeGame();',
    faqs: [
      {
        question: "What is the Knight's Tour?",
        answer: "A puzzle where you move a chess knight to visit every square on the board exactly once. The knight moves in an L-shape: two squares in one direction, then one square perpendicular."
      },
      {
        question: "Is there always a solution to the Knight's Tour?",
        answer: "On a standard 8x8 board, solutions exist starting from any square. Smaller boards may not have solutions from all starting positions."
      }
    ]
  },
  {
    slug: 'typing-speed',
    title: 'Typing Speed Test - WPM Calculator',
    shortTitle: 'Typing Test',
    description: 'Test your typing speed and accuracy. Measure words per minute (WPM) and characters per minute (CPM) with 60-second challenges.',
    metaDescription: 'Free online typing speed test. Measure your WPM and accuracy in 60 seconds. Track your progress and improve your typing skills.',
    thumbnail: 'thumbnail.png',
    categories: ['Challenge', 'Educational', 'Skills'],
    keywords: ['typing test', 'typing speed', 'wpm test', 'typing practice', 'keyboard speed'],
    initCode: 'const game = new TypingGame();',
    extraScripts: ['https://unpkg.com/txtgen/dist/txtgen.min.js'],
    faqs: [
      {
        question: 'What is a good typing speed?',
        answer: 'Average typing speed is 40 WPM. 60-70 WPM is considered good. Professional typists often exceed 80-100 WPM.'
      },
      {
        question: 'How can I improve my typing speed?',
        answer: 'Practice regularly, use proper finger placement, look at the screen instead of the keyboard, and focus on accuracy before speed.'
      }
    ]
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
