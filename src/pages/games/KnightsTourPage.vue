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
      <div class="container">
        <div class="board" id="board"></div>
        <div class="controls">
          <button onclick="resetGame()">New Game</button>
          <button onclick="showHint()">Show Hint</button>
        </div>

        <div class="status" id="status"></div>

        <div class="best-scores">
          <h3>Best Scores</h3>
          <div id="bestScores"></div>
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
