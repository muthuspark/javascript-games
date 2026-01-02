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
      <div class="sokoban" id="game_main_container">
        <div class="game-container">
          <div id="levelName">Level 1: Tutorial</div>

          <div class="controls">
            <select id="levelSelect" onchange="selectLevel()"></select>
            <button onclick="prevLevel()" class="secondary">&lt; Prev</button>
            <button onclick="nextLevel()" class="secondary">Next &gt;</button>
            <button onclick="restartLevel()" class="warning">Restart</button>
            <button onclick="undoMove()">Undo (U)</button>
          </div>

          <div class="stats">
            <span>Moves: <strong id="moves">0</strong></span>
            <span>Pushes: <strong id="pushes">0</strong></span>
          </div>

          <canvas id="sokobanCanvas"></canvas>

          <div class="mobile-controls">
            <div class="row">
              <button onclick="sokobanMove(0, -1)">&#9650;</button>
            </div>
            <div class="row">
              <button onclick="sokobanMove(-1, 0)">&#9664;</button>
              <button onclick="sokobanMove(0, 1)">&#9660;</button>
              <button onclick="sokobanMove(1, 0)">&#9654;</button>
            </div>
          </div>

          <div class="instructions">
            <h4>How to Play</h4>
            <ul>
              <li>Push all boxes (brown squares) onto the target spots (red circles)</li>
              <li>Use <strong>Arrow Keys</strong> or <strong>WASD</strong> to move</li>
              <li>Press <strong>U</strong> or <strong>Ctrl+Z</strong> to undo</li>
              <li>Press <strong>R</strong> to restart the level</li>
              <li>Boxes turn green when placed on targets</li>
            </ul>
          </div>
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
  slug: 'sokoban',
  title: 'Sokoban - Classic Box Pushing Puzzle Game',
  shortTitle: 'Sokoban',
  description: 'Push boxes onto target locations in this classic Japanese puzzle game. Plan your moves carefully - once a box is pushed into a corner, it cannot be retrieved!',
  metaDescription: 'Play Sokoban online for free. Push boxes to target spots in this classic puzzle game. 10 levels from easy to challenging. Use arrow keys or WASD to play.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Logic Games', 'Classic Games'],
  keywords: ['sokoban', 'box pushing game', 'puzzle game', 'logic puzzle', 'warehouse keeper', 'sokoban online', 'free sokoban'],
  initCode: 'initSokoban();',
  faqs: [
    {
      question: 'How do you play Sokoban?',
      answer: 'Use arrow keys or WASD to move the player (blue circle). Push boxes (brown squares) onto the target spots (red circles). You can only push boxes, not pull them. Plan carefully because boxes pushed into corners cannot be retrieved.'
    },
    {
      question: 'What happens when I get stuck?',
      answer: 'Press U or Ctrl+Z to undo your last move, or press R to restart the current level. The undo feature lets you step back through your entire history of moves.'
    },
    {
      question: 'How many levels are there?',
      answer: 'There are 10 levels ranging from a simple tutorial to challenging puzzles. Each level requires more planning and strategic thinking than the last.'
    },
    {
      question: 'What does Sokoban mean?',
      answer: 'Sokoban is Japanese for "warehouse keeper." The game was created in 1981 by Hiroyuki Imabayashi and has become one of the most popular puzzle games in the world.'
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
