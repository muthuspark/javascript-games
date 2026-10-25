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
      <div class="game-container word-search-game">
        <div class="puzzle-toolbar">
          <p id="wordSearchProgress" class="mb-0">Loading puzzle…</p>
          <button id="newPuzzle" type="button">New puzzle</button>
        </div>
        <p id="wordSearchInstructions" class="game-instructions">
          Select the first and last letter of a word, or drag with a mouse.
          With a keyboard, use arrow keys to move, Enter or Space to select each end, and Escape to cancel.
          Scroll within larger boards to see every letter.
        </p>
        <div class="board-scroll" role="region" aria-label="Scrollable word-search board">
          <div id="grid" class="grid" role="grid" aria-label="Word-search letters" aria-describedby="wordSearchInstructions"></div>
        </div>
        <p id="wordSearchStatus" class="puzzle-status" role="status" aria-live="polite" aria-atomic="true"></p>
        <section aria-labelledby="wordsHeading" class="puzzle-options">
          <h2 id="wordsHeading">Words to find</h2>
          <ul id="wordList" class="word-list"></ul>
        </section>
        <div class="puzzle-options">
          <h2 id="sizeHeading">Grid size</h2>
          <div id="gridSize" class="option-buttons" role="group" aria-labelledby="sizeHeading"></div>
        </div>
        <div class="puzzle-options">
          <h2 id="categoryHeading">Category</h2>
          <div id="categoryButtons" class="option-buttons" role="group" aria-labelledby="categoryHeading"></div>
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
  slug: 'word-search',
  title: 'Word Search Puzzle - Find Hidden Words',
  shortTitle: 'Word Search',
  description: 'Find hidden words in a grid of letters. Words can be horizontal, vertical, diagonal, or backwards. Multiple categories and grid sizes.',
  metaDescription: 'Play free word search puzzles online. Find hidden words in letter grids with multiple categories. Great for vocabulary and brain training.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Word Games', 'Educational'],
  keywords: ['word search', 'word find', 'word puzzle', 'hidden words', 'word search puzzle'],
  initCode: 'const game = new WordSearchGame(); game.newGame(); return () => game.destroy();',
  faqs: [
    {
      question: 'How do you play Word Search?',
      answer: 'Find words from the list hidden in the letter grid. Words can go horizontally, vertically, diagonally, and even backwards. Select the first and last letter, or drag with a mouse. Use arrow keys and Enter to play with a keyboard.'
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
