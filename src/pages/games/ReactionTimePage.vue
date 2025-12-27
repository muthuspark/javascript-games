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
        <div id="reactionBox" class="reaction-box waiting">
          <div id="message" class="message">Click to Start</div>
          <div id="resultText" class="result-text"></div>
        </div>

        <div class="stats">
          <div>
            <div class="label">Attempts</div>
            <div class="value" id="attempts">0</div>
          </div>
          <div>
            <div class="label">Average</div>
            <div class="value" id="average">-</div>
          </div>
          <div>
            <div class="label">Best</div>
            <div class="value" id="best">-</div>
          </div>
        </div>

        <div class="controls">
          <button onclick="resetGame()">Reset Stats</button>
        </div>

        <div class="scale">
          <div class="scale-item">
            <div class="time-range">&lt;200ms</div>
            <div>Incredible</div>
          </div>
          <div class="scale-item">
            <div class="time-range">200-250ms</div>
            <div>Amazing</div>
          </div>
          <div class="scale-item">
            <div class="time-range">250-350ms</div>
            <div>Good</div>
          </div>
          <div class="scale-item">
            <div class="time-range">&gt;350ms</div>
            <div>Average</div>
          </div>
        </div>

        <p class="instructions">
          Click the box to start. When it turns <strong>red</strong>, wait.
          When it turns <strong>green</strong>, click as fast as you can!
          Don't click too early or you'll have to restart.
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
  slug: 'reaction-time',
  title: 'Reaction Time Test - Test Your Reflexes',
  shortTitle: 'Reaction Time',
  description: 'Test how fast you can react! Wait for the screen to turn green, then click as quickly as possible. Track your average and best reaction times.',
  metaDescription: 'Test your reaction time online free. Wait for green, then click as fast as possible. Measure your reflexes in milliseconds and track your best time.',
  thumbnail: 'thumbnail.png',
  categories: ['Challenge', 'Reflex Games', 'Skills'],
  keywords: ['reaction time', 'reflex test', 'reaction test', 'speed test', 'reflexes', 'brain game'],
  initCode: '',
  faqs: [
    {
      question: 'What is a good reaction time?',
      answer: 'The average human reaction time is around 250-300 milliseconds. Anything under 200ms is considered excellent. Professional gamers and athletes often have reaction times between 150-200ms.'
    },
    {
      question: 'How can I improve my reaction time?',
      answer: 'Regular practice helps improve reaction time. Getting enough sleep, staying hydrated, and reducing distractions can also help. Some studies suggest that playing action video games may improve reaction times.'
    },
    {
      question: 'Why do reaction times vary?',
      answer: 'Many factors affect reaction time including age, fatigue, caffeine intake, and even the time of day. Visual reaction times are typically faster than auditory ones. Your reaction time may also improve with practice on this specific test.'
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
