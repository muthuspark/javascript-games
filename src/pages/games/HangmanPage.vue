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
        <svg class="hangman-svg" viewBox="0 0 200 250">
          <!-- Gallows -->
          <line x1="20" y1="230" x2="100" y2="230"></line>
          <line x1="60" y1="230" x2="60" y2="20"></line>
          <line x1="60" y1="20" x2="140" y2="20"></line>
          <line x1="140" y1="20" x2="140" y2="50"></line>
          <!-- Hangman parts -->
          <circle id="head" cx="140" cy="70" r="20"></circle>
          <line id="body" x1="140" y1="90" x2="140" y2="150"></line>
          <line id="leftArm" x1="140" y1="110" x2="110" y2="140"></line>
          <line id="rightArm" x1="140" y1="110" x2="170" y2="140"></line>
          <line id="leftLeg" x1="140" y1="150" x2="110" y2="190"></line>
          <line id="rightLeg" x1="140" y1="150" x2="170" y2="190"></line>
        </svg>

        <div class="hint" id="hint">Category: </div>
        <div id="wordDisplay" class="word-display"></div>
        <div id="message" class="message"></div>
        <div id="keyboard"></div>

        <div class="stats">
          <div>Wrong: <span id="wrongCount">0</span>/6</div>
          <div>Wins: <span id="wins">0</span></div>
          <div>Losses: <span id="losses">0</span></div>
        </div>

        <div class="controls">
          <button onclick="newGame()">New Game</button>
        </div>

        <div class="info">Tip: You can also use your keyboard to guess letters!</div>
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
  slug: 'hangman',
  title: 'Hangman Game - Word Guessing Puzzle',
  shortTitle: 'Hangman',
  description: 'Guess the hidden word one letter at a time. Classic word guessing game with multiple categories including animals, countries, foods, and more.',
  metaDescription: 'Play Hangman online free. Guess the hidden word letter by letter before the hangman is complete. Multiple word categories for endless fun.',
  thumbnail: 'thumbnail.png',
  categories: ['Word Games', 'Classic Games', 'Educational'],
  keywords: ['hangman', 'word game', 'guessing game', 'word puzzle', 'vocabulary game', 'spelling game'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'How do you play Hangman?',
      answer: 'Try to guess the hidden word by selecting letters. Each correct letter reveals its position in the word. Each wrong guess adds a body part to the hangman. Guess the word before the hangman is complete to win!'
    },
    {
      question: 'How many wrong guesses do I get?',
      answer: 'You get 6 wrong guesses before the game is over. The hangman figure builds up with each wrong guess: head, body, left arm, right arm, left leg, and right leg.'
    },
    {
      question: 'What word categories are available?',
      answer: 'Words are randomly selected from five categories: Animals, Countries, Foods, Sports, and Science. The category is shown as a hint to help you guess.'
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
