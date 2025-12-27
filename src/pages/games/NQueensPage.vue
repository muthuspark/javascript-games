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
        <div class="instructions">
          <h2>How to Play</h2>
          <p>Place N queens on an NxN chess board where no two queens threaten each other.</p>
          <ol>
            <li>Click a cell to place or remove a queen</li>
            <li>Queens cannot share the same row, column, or diagonal</li>
            <li>Threatened squares will be highlighted in red</li>
            <li>Place all queens without conflicts to win!</li>
          </ol>
        </div>

        <div class="level-select">
          <button onclick="setLevel(4)">4x4</button>
          <button onclick="setLevel(5)">5x5</button>
          <button onclick="setLevel(6)">6x6</button>
          <button onclick="setLevel(8)">8x8</button>
          <button onclick="setLevel(9)">9x9</button>
          <button onclick="setLevel(10)">10x10</button>
          <button onclick="setLevel(11)">11x11</button>
          <button onclick="setLevel(12)">12x12</button>
        </div>

        <div class="queen-count" id="queenCount"></div>
        <div class="board" id="board"></div>

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
import { games } from '../../data/games.js'
import { useGameLoader } from '../../composables/useGameLoader.js'
import { useGameSeo } from '../../composables/useGameSeo.js'
import Breadcrumb from '../../components/Breadcrumb.vue'
import GameFaqs from '../../components/GameFaqs.vue'
import RelatedGames from '../../components/RelatedGames.vue'

const game = games.find(g => g.slug === 'n-queens')

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
