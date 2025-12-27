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

    <section id="game_main_container" class="game-section" aria-label="Game Area">
      <div class="game-container">
        <div class="controls">
          <select id="difficultySelect" class="difficulty-select" onchange="changeDifficulty()">
            <option value="4">4 Digits (Normal)</option>
            <option value="5">5 Digits (Hard)</option>
            <option value="6">6 Digits (Expert)</option>
          </select>
          <button onclick="newGame()">New Game</button>
        </div>

        <div class="stats">
          <span id="guessCount">Guesses: 0/10</span>
        </div>

        <div id="message" class="message"></div>

        <div class="input-section">
          <input type="text" id="guessInput" placeholder="Enter 4 unique digits" maxlength="4" autocomplete="off">
          <button id="guessBtn" onclick="makeGuess()">Guess</button>
        </div>

        <div id="guessHistory" class="guess-history"></div>

        <div class="legend">
          <h4>How to Play</h4>
          <p><span class="bull-icon">🎯</span> <strong>Bull:</strong> Correct digit in correct position</p>
          <p><span class="cow-icon">🐄</span> <strong>Cow:</strong> Correct digit in wrong position</p>
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
  slug: 'bulls-and-cows',
  title: 'Bulls and Cows - Number Guessing Game',
  shortTitle: 'Bulls and Cows',
  description: 'Guess the secret number using logic and deduction. Bulls mean correct digit in correct position, cows mean correct digit in wrong position.',
  metaDescription: 'Play Bulls and Cows online free. Guess the secret number using logic. Bulls indicate correct digits in correct positions, cows indicate correct digits in wrong positions.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Logic Games', 'Number Games'],
  keywords: ['bulls and cows', 'number guessing game', 'logic puzzle', 'deduction game', 'code breaking', 'brain game'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'How do you play Bulls and Cows?',
      answer: 'Try to guess the secret number. After each guess, you get feedback: Bulls (🎯) mean you have a correct digit in the correct position. Cows (🐄) mean you have a correct digit but in the wrong position. Use this feedback to narrow down the secret number.'
    },
    {
      question: 'What are the rules for Bulls and Cows?',
      answer: 'The secret number has unique digits (no repeats) and does not start with 0. You must guess a number with the same properties. You have 10 attempts to guess correctly. Each guess shows how many bulls and cows you scored.'
    },
    {
      question: 'What strategies work best for Bulls and Cows?',
      answer: 'Start with digits spread across the range (like 1234) to identify which digits are in the secret. Track which digits gave bulls vs cows. Once you know some correct digits, focus on finding their positions by moving them around in subsequent guesses.'
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
