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
        <div class="difficulty-buttons">
          <button class="btn btn-success" onclick="setDifficulty('easy')">Easy</button>
          <button class="btn btn-warning" onclick="setDifficulty('medium')">Medium</button>
          <button class="btn btn-danger" onclick="setDifficulty('hard')">Hard</button>
        </div>
        <button class="btn btn-info" onclick="initGame()">New Game</button>
        <div id="mine-count"></div>
      </div>
      <div id="status" class="status"></div>
      <div id="game-board" class="game-board"></div>
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
