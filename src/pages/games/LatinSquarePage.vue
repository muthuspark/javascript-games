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
        <div class="level-select">
          <button onclick="setLevel(3)">3x3</button>
          <button onclick="setLevel(4)">4x4</button>
          <button onclick="setLevel(5)">5x5</button>
        </div>

        <div class="number-select" id="numberSelect"></div>
        <div class="grid" id="grid"></div>

        <div class="controls">
          <button onclick="getHint()">Get Hint</button>
          <button onclick="checkSolution()">Check Solution</button>
          <button onclick="resetPuzzle()">Reset</button>
        </div>

        <div class="status" id="status"></div>
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
