import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs'
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: false,
    includedRoutes(paths) {
      // Include all static routes
      return [
        '/',
        '/about',
        '/posts/sudoku/',
        '/posts/maze/',
        '/posts/tic-tac-toe/',
        '/posts/connect4/',
        '/posts/minesweeper/',
        '/posts/word-search/',
        '/posts/sliding-puzzle/',
        '/posts/latin-square/',
        '/posts/magicsquare/',
        '/posts/n-queens/',
        '/posts/knights-tour/',
        '/posts/typing-speed/',
        '/posts/memory-match/',
        '/posts/hangman/',
        '/posts/lights-out/',
        '/posts/simon-says/',
        '/posts/reaction-time/',
        '/posts/whack-a-mole/',
        '/posts/mastermind/',
        '/posts/bulls-and-cows/'
      ]
    }
  }
})
