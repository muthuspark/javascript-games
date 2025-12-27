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
          <div>
            <div class="label">Score</div>
            <div class="value" id="score">0</div>
          </div>
          <div>
            <div class="label">Time</div>
            <div class="value"><span id="timeLeft">30</span>s</div>
          </div>
          <div>
            <div class="label">Best</div>
            <div class="value" id="highScore">0</div>
          </div>
        </div>

        <div id="moleGrid"></div>

        <div id="message" class="message"></div>

        <div class="controls">
          <button id="startBtn" onclick="startGame()">Start Game</button>
        </div>

        <p class="instructions">
          Click on the moles as they pop up from their holes. You have 30 seconds to score as many points as possible. The moles get faster as you progress!
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
  slug: 'whack-a-mole',
  title: 'Whack-a-Mole Game - Test Your Speed',
  shortTitle: 'Whack-a-Mole',
  description: 'Whack the moles as they pop up from their holes! A classic arcade game that tests your reflexes. Score as many points as you can in 30 seconds.',
  metaDescription: 'Play Whack-a-Mole online free. Click on moles as they pop up to score points. Classic arcade reflex game with increasing difficulty.',
  thumbnail: 'thumbnail.png',
  categories: ['Reflex Games', 'Classic Games', 'Challenge'],
  keywords: ['whack a mole', 'arcade game', 'reflex game', 'clicking game', 'speed game', 'reaction game'],
  initCode: '',
  faqs: [
    {
      question: 'How do you play Whack-a-Mole?',
      answer: 'Click on the moles as they pop up from their holes. Each successful hit scores one point. You have 30 seconds to score as many points as possible. The moles appear faster as your score increases!'
    },
    {
      question: 'What is a good Whack-a-Mole score?',
      answer: 'A score of 15-20 is good for beginners. Experienced players can score 25-35 points in 30 seconds. The key is to stay focused and anticipate where moles might appear next.'
    },
    {
      question: 'How can I improve my Whack-a-Mole skills?',
      answer: 'Keep your cursor near the center of the grid so you can reach any hole quickly. Stay relaxed and use quick, precise clicks. Practice regularly to improve your reaction time and pattern recognition.'
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
