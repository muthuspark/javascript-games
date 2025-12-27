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
      <div class="instructions">
        <h2>How to Play</h2>
        <ol>
          <li>Select your desired level from the dropdown</li>
          <li>Click "New Game" or "Shuffle" to mix up the tiles</li>
          <li>Try to arrange the numbers in order with the empty space in the bottom right</li>
        </ol>
      </div>
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
import { games } from '../../data/games.js'
import { useGameLoader } from '../../composables/useGameLoader.js'
import { useGameSeo } from '../../composables/useGameSeo.js'
import Breadcrumb from '../../components/Breadcrumb.vue'
import GameFaqs from '../../components/GameFaqs.vue'
import RelatedGames from '../../components/RelatedGames.vue'

const game = games.find(g => g.slug === 'sliding-puzzle')

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/' },
  { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
]

useGameLoader(game.slug, game.initCode, game.extraScripts)
useGameSeo(game)
</script>

<style scoped>
h1 { font-weight: 600; }
.game-section { min-height: 400px; }
</style>
