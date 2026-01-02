<template>
  <article class="container py-4" itemscope itemtype="https://schema.org/VideoGame">
    <Breadcrumb :items="breadcrumbItems" />

    <header class="mb-4">
      <h1 class="mb-2" itemprop="name">{{ game.title }}</h1>
      <p class="text-muted lead" itemprop="description">{{ game.description }}</p>
      <div class="mb-3">
        <span v-for="category in game.categories" :key="category" class="badge bg-success me-2" itemprop="genre">
          {{ category }}
        </span>
      </div>
    </header>

    <section id="game_main_container" class="game-section" aria-label="Game Area">
      <div class="binary-puzzle">
        <div class="difficulty-controls">
          <button class="difficulty easy selected" onclick="setDifficulty('easy')">Easy (6x6)</button>
          <button class="difficulty medium" onclick="setDifficulty('medium')">Medium (8x8)</button>
          <button class="difficulty hard" onclick="setDifficulty('hard')">Hard (10x10)</button>
        </div>
        <div class="timer" id="timer">00:00</div>
        <div class="controls">
          <button onclick="newGame()">New Game</button>
        </div>
        <div class="grid" id="grid"></div>
        <div class="message" id="message"></div>
        <div class="rules">
          <h3>Rules</h3>
          <ul>
            <li>Fill the grid with 0s and 1s</li>
            <li>Each row and column must have equal numbers of 0s and 1s</li>
            <li>No more than two consecutive 0s or 1s in any row or column</li>
            <li>All rows must be unique, and all columns must be unique</li>
            <li>Click a cell to cycle: empty → 0 → 1 → empty</li>
          </ul>
        </div>
      </div>
    </section>

    <GameFaqs :faqs="game.faqs" />
    <RelatedGames :currentSlug="game.slug" :categories="game.categories" />

    <meta itemprop="url" :content="`https://games.muthu.co/posts/${game.slug}/`">
    <meta itemprop="image" :content="`https://games.muthu.co/posts/${game.slug}/thumbnail.png`">
    <meta itemprop="applicationCategory" content="Game">
    <meta itemprop="operatingSystem" content="Web Browser">
    <span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="display:none">
      <meta itemprop="price" content="0">
      <meta itemprop="priceCurrency" content="USD">
    </span>
  </article>
</template>

<script setup>
import { useGameLoader } from '../../composables/useGameLoader.js'
import { useGameSeo } from '../../composables/useGameSeo.js'
import Breadcrumb from '../../components/Breadcrumb.vue'
import GameFaqs from '../../components/GameFaqs.vue'
import RelatedGames from '../../components/RelatedGames.vue'

const game = {
  slug: 'binary-puzzle',
  title: 'Binary Puzzle (Takuzu) - Logic Number Game',
  shortTitle: 'Binary Puzzle',
  description: 'Play Binary Puzzle (Takuzu) online for free. Fill the grid with 0s and 1s following simple rules. A challenging logic puzzle that trains your brain.',
  metaDescription: 'Play free Binary Puzzle (Takuzu) online. Fill grids with 0s and 1s - no three consecutive same digits, equal counts per row/column, unique rows and columns. Multiple sizes available.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Logic Games', 'Number Games'],
  keywords: ['binary puzzle', 'takuzu', 'binairo', '0 and 1 puzzle', 'logic puzzle', 'brain game', 'number puzzle'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'What is Binary Puzzle (Takuzu)?',
      answer: 'Binary Puzzle, also known as Takuzu or Binairo, is a logic puzzle where you fill a grid with 0s and 1s. Each row and column must have equal numbers of both digits, no more than two consecutive same digits, and all rows and columns must be unique.'
    },
    {
      question: 'How do you solve a Binary Puzzle?',
      answer: 'Start by looking for cells where only one value is possible. If placing a 0 would create three 0s in a row, place a 1. If a row already has half its cells filled with one digit, fill the rest with the other. Use the uniqueness rule to eliminate possibilities.'
    },
    {
      question: 'Is Binary Puzzle good for your brain?',
      answer: 'Yes! Binary Puzzle improves logical thinking, pattern recognition, and deductive reasoning. The simple rules but complex solutions make it an excellent brain training exercise for all ages.'
    },
    {
      question: 'What makes Binary Puzzle different from Sudoku?',
      answer: 'While both are logic puzzles, Binary Puzzle uses only two symbols (0 and 1) instead of nine. The rules are different too - you must balance digit counts, avoid three in a row, and ensure uniqueness of rows and columns.'
    }
  ]
}

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/' },
  { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
]

useGameLoader(game.slug, game.initCode)
useGameSeo(game)
</script>

<style scoped>
h1 { font-weight: 400; }
.game-section { min-height: 400px; }
</style>
