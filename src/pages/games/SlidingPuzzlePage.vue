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
        <div class="controls">
          <select id="levelSelect" class="level-select" onchange="changeLevel()">
            <option value="1">Level 1 (3x3)</option>
            <option value="2">Level 2 (3x4)</option>
            <option value="3">Level 3 (4x4)</option>
            <option value="4">Level 4 (4x5)</option>
            <option value="5">Level 5 (5x5)</option>
            <option value="6">Level 6 (5x6)</option>
            <option value="7">Level 7 (6x6)</option>
            <option value="8">Level 8 (6x7)</option>
            <option value="9">Level 9 (7x7)</option>
            <option value="10">Level 10 (7x8)</option>
          </select>
          <button onclick="newGame()">New Game</button>
          <button onclick="shuffleBoard()">Shuffle</button>
          <button onclick="startSolving()" class="solve" id="solveButton">Ai Solve Puzzle</button>
        </div>
        <div class="stats">
          <div>Moves: <span id="moveCount">0</span></div>
          <div>Best Score: <span id="bestScore">-</span></div>
        </div>
        <div id="solvingStatus" class="solving-status" style="display: none;">Solving puzzle...</div>
        <div class="board"></div>
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
  slug: 'sliding-puzzle',
  title: 'Sliding Puzzle Game - Number Tile Puzzle',
  shortTitle: 'Sliding Puzzle',
  description: 'Slide numbered tiles to arrange them in order. Choose from 3x3 to 7x8 grid sizes. Features AI solver to demonstrate solutions.',
  metaDescription: 'Play sliding tile puzzles online free. Arrange numbered tiles in order by sliding them. 10 difficulty levels with AI solver. Classic 15 puzzle.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Logic Games'],
  keywords: ['sliding puzzle', '15 puzzle', 'tile puzzle', 'number puzzle', 'sliding tile game'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'How do you solve a sliding puzzle?',
      answer: 'Slide tiles into the empty space to rearrange them in numerical order. Start by solving the top row, then work your way down.'
    },
    {
      question: 'What is the 15 puzzle?',
      answer: 'The 15 puzzle is a classic sliding puzzle with 15 numbered tiles in a 4x4 grid. You slide tiles to arrange them from 1 to 15.'
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
