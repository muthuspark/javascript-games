import { games } from './data/games.js'

// Map slugs to their page components
const gamePages = {
  'sudoku': () => import('./pages/games/SudokuPage.vue'),
  'maze': () => import('./pages/games/MazePage.vue'),
  'tic-tac-toe': () => import('./pages/games/TicTacToePage.vue'),
  'connect4': () => import('./pages/games/Connect4Page.vue'),
  'minesweeper': () => import('./pages/games/MinesweeperPage.vue'),
  'word-search': () => import('./pages/games/WordSearchPage.vue'),
  'sliding-puzzle': () => import('./pages/games/SlidingPuzzlePage.vue'),
  'latin-square': () => import('./pages/games/LatinSquarePage.vue'),
  'magicsquare': () => import('./pages/games/MagicSquarePage.vue'),
  'n-queens': () => import('./pages/games/NQueensPage.vue'),
  'knights-tour': () => import('./pages/games/KnightsTourPage.vue'),
  'typing-speed': () => import('./pages/games/TypingSpeedPage.vue'),
  'memory-match': () => import('./pages/games/MemoryMatchPage.vue')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/HomePage.vue')
  },
  {
    path: '/index.html',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/AboutPage.vue')
  },
  {
    path: '/about.html',
    redirect: '/about'
  }
]

// Add individual game routes
games.forEach(game => {
  routes.push({
    path: `/posts/${game.slug}/`,
    name: `game-${game.slug}`,
    component: gamePages[game.slug]
  })
  // Also handle without trailing slash
  routes.push({
    path: `/posts/${game.slug}`,
    redirect: `/posts/${game.slug}/`
  })
})

// Generate static routes for vite-ssg pre-rendering
export const getRoutes = () => {
  const staticRoutes = [
    '/',
    '/about'
  ]

  games.forEach(game => {
    staticRoutes.push(`/posts/${game.slug}/`)
  })

  return staticRoutes
}

export default routes
