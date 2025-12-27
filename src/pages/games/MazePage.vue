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
      <div class="maze">
        <div class="instructions">
          <h2>How to Play</h2>
          <ol>
            <li>Select a maze size from the dropdown menu</li>
            <li>Click "Generate Maze" to create a new maze</li>
            <li>Use arrow keys or WASD to move the player (red square)</li>
            <li>Reach the green end point to win</li>
            <li>Click "Reset Player" to return to start position</li>
            <li>Generate a new maze anytime for a fresh challenge</li>
          </ol>
        </div>
        <div class="game-container">
          <div class="controls">
            <select id="mazeSize">
              <option value="11">10x10</option>
              <option value="21">20x20</option>
              <option value="31">30X30</option>
              <option value="41">40X40</option>
              <option value="51">50X50</option>
              <option value="61">60X60</option>
              <option value="71">70X70</option>
              <option value="81">80X80</option>
              <option value="91">90X90</option>
            </select>
            <button onclick="generateNewMaze()">Generate Maze</button>
            <button onclick="resetPlayer()">Reset Player</button>
          </div>
          <canvas id="mazeCanvas"></canvas>
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
import { games } from '../../data/games.js'
import { useGameLoader } from '../../composables/useGameLoader.js'
import { useGameSeo } from '../../composables/useGameSeo.js'
import Breadcrumb from '../../components/Breadcrumb.vue'
import GameFaqs from '../../components/GameFaqs.vue'
import RelatedGames from '../../components/RelatedGames.vue'

const game = games.find(g => g.slug === 'maze')

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
