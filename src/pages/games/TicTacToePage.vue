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
        <select id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select id="gridSize">
          <option value="3">3x3</option>
          <option value="4">4x4</option>
          <option value="5">5x5</option>
        </select>
        <button onclick="startNewGame()">New Game</button>
      </div>
      <div id="gameBoard" class="game-board"></div>
      <div id="status" class="status"></div>
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
