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
        <div class="stats">
          <div>Round: <span id="score">0</span></div>
          <div>Best: <span id="highScore">0</span></div>
        </div>

        <div class="simon-board">
          <div id="green" class="simon-btn disabled"></div>
          <div id="red" class="simon-btn disabled"></div>
          <div id="yellow" class="simon-btn disabled"></div>
          <div id="blue" class="simon-btn disabled"></div>
          <div class="center-circle">
            <span id="score-display">0</span>
          </div>
        </div>

        <div id="status" class="status">Press Start to begin!</div>

        <div class="controls">
          <button id="startBtn" onclick="startGame()">Start Game</button>
        </div>

        <p class="instructions">
          Watch the sequence of colors, then repeat it by clicking the buttons. Each round adds one more color to remember!
        </p>
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
  slug: 'simon-says',
  title: 'Simon Says Game - Memory Sequence Game',
  shortTitle: 'Simon Says',
  description: 'Watch the color sequence and repeat it back. Each round adds one more color. How long can you keep up? Classic memory game with sound.',
  metaDescription: 'Play Simon Says online free. Watch and repeat the growing sequence of colors and sounds. Test your memory with this classic electronic game.',
  thumbnail: 'thumbnail.png',
  categories: ['Memory Games', 'Classic Games', 'Challenge'],
  keywords: ['simon says', 'memory game', 'sequence game', 'pattern memory', 'color game', 'brain training'],
  initCode: '',
  faqs: [
    {
      question: 'How do you play Simon Says?',
      answer: 'Watch the colored buttons light up in a sequence, then repeat that sequence by clicking the buttons in the same order. Each round adds one more color to the sequence. The game ends when you make a mistake.'
    },
    {
      question: 'What is the world record for Simon Says?',
      answer: 'While records vary by version, expert players can often remember sequences of 30+ colors. The key is to develop memory techniques like chunking colors into groups or creating patterns.'
    },
    {
      question: 'How can I improve at Simon Says?',
      answer: 'Try associating each color with a word or phrase. Group colors into chunks of 3-4. Some players find it helpful to say the colors out loud or tap a rhythm. Regular practice builds your working memory capacity.'
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
