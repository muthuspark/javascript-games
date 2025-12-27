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
      <div class="game-container">
        <div id="grid" class="grid"></div>
        <hr>
        <div class="optiongrid">
          <div class="label">Words to find:</div>
          <div>
            <div id="wordList" class="word-list"></div>
          </div>
        </div>
        <hr>
        <div class="optiongrid">
          <div class="label">Grid Size:</div>
          <div>
            <div id="gridSize" class="grid-size"></div>
          </div>
        </div>
        <hr>
        <div class="optiongrid">
          <div class="label">Category:</div>
          <div>
            <div id="categoryButtons"></div>
          </div>
        </div>
        <div id="toast"></div>
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
