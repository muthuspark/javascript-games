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
        <div class="instructions">
          <h2>How to Play</h2>
          <ol>
            <li>Find words from the list below in the grid of letters</li>
            <li>Words can be placed in any of these directions:
              <ul>
                <li>Horizontally (→)</li>
                <li>Vertically (↓)</li>
                <li>Diagonally (↘ or ↗)</li>
                <li>Backwards in any direction (← ↑ ↙ ↖)</li>
              </ul>
            </li>
            <li>Click and drag your mouse over the letters to select a word</li>
            <li>When you find a word, it will be highlighted in green and crossed off the list</li>
            <li>Find all words to win the game!</li>
          </ol>
        </div>
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
import { games } from '../../data/games.js'
import { useGameLoader } from '../../composables/useGameLoader.js'
import { useGameSeo } from '../../composables/useGameSeo.js'
import Breadcrumb from '../../components/Breadcrumb.vue'
import GameFaqs from '../../components/GameFaqs.vue'
import RelatedGames from '../../components/RelatedGames.vue'

const game = games.find(g => g.slug === 'word-search')

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
