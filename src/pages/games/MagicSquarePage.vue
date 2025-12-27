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

    <section class="game-section" aria-label="Game Area">
      <div class="controls">
        <button class="easy" onclick="setDifficulty(3)">Easy (3x3)</button>
        <button class="medium" onclick="setDifficulty(4)">Medium (4x4)</button>
        <button class="hard" onclick="setDifficulty(5)">Hard (5x5)</button>
        <button class="new-game" onclick="initGame()">New Game</button>
        <button class="hint" onclick="giveHint()">Hint</button>
        <button class="solve" onclick="solve()">Solve</button>
      </div>
      <h3>Magic Sum: <span id="magic-sum">0</span></h3>
      <div id="status" class="status"></div>

      <div class="align-center">
        <div id="game-board" class="game-board"></div>
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
