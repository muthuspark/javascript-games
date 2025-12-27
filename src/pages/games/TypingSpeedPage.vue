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
      <div id="typingspeed">
        <div class="wrapper">
          <input type="text" class="input-field">
          <div class="content-box">
            <div class="typing-text">
              <p></p>
            </div>
            <div class="content">
              <ul class="result-details">
                <li class="time">Time Left: <span><b>60</b>s</span></li>
                <li class="mistake">Mistakes: <span>0</span></li>
                <li class="wpm">Words Per Minute: <span>0</span></li>
                <li class="cpm">Characters Per Minute: <span>0</span></li>
              </ul>
              <button>Try Again</button>
            </div>
          </div>
        </div>

        <div class="scorecard">
          <h2>Scorecard</h2>
          <div id="scorecard" class="grid">
            <div class="g-col-6">
              <table class="table" id="history">
                <thead>
                  <tr>
                    <th></th>
                    <th>WPM</th>
                    <th>CPM</th>
                    <th>Mistakes</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            <div class="g-col-6" id="chart">
              <div class="grid">
                <div id="wpm" class="g-col-4"></div>
                <div id="cpm" class="g-col-4"></div>
                <div id="mistakes" class="g-col-4"></div>
              </div>
            </div>
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
  slug: 'typing-speed',
  title: 'Typing Speed Test - WPM Calculator',
  shortTitle: 'Typing Test',
  description: 'Test your typing speed and accuracy. Measure words per minute (WPM) and characters per minute (CPM) with 60-second challenges.',
  metaDescription: 'Free online typing speed test. Measure your WPM and accuracy in 60 seconds. Track your progress and improve your typing skills.',
  thumbnail: 'thumbnail.png',
  categories: ['Challenge', 'Educational', 'Skills'],
  keywords: ['typing test', 'typing speed', 'wpm test', 'typing practice', 'keyboard speed'],
  initCode: 'const game = new TypingGame();',
  extraScripts: ['https://unpkg.com/txtgen/dist/txtgen.min.js'],
  faqs: [
    {
      question: 'What is a good typing speed?',
      answer: 'Average typing speed is 40 WPM. 60-70 WPM is considered good. Professional typists often exceed 80-100 WPM.'
    },
    {
      question: 'How can I improve my typing speed?',
      answer: 'Practice regularly, use proper finger placement, look at the screen instead of the keyboard, and focus on accuracy before speed.'
    }
  ]
}

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/' },
  { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
]

useGameLoader(game.slug, game.initCode, game.extraScripts)
useGameSeo(game)
</script>

<style scoped>
h1 { font-weight: 400; }
.game-section { min-height: 400px; }
</style>
