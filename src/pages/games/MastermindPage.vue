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
      <div id="game_main_container" class="game-container">
        <div id="secretCode" class="secret-code"></div>

        <div class="legend">
          <div class="legend-item">
            <div class="legend-pin black"></div>
            <span>Correct color & position</span>
          </div>
          <div class="legend-item">
            <div class="legend-pin white"></div>
            <span>Correct color, wrong position</span>
          </div>
        </div>

        <div id="board"></div>

        <div id="colorPalette" class="color-palette"></div>

        <div class="controls">
          <button class="primary" onclick="submitGuess()">Submit Guess</button>
          <button class="secondary" onclick="undoLastColor()">Undo</button>
          <button class="secondary" onclick="clearCurrentGuess()">Clear</button>
          <button class="danger" onclick="newGame()">New Game</button>
        </div>

        <div class="stats">
          <div>Guesses: <span id="guessCount">0 / 10</span></div>
          <div>Won: <span id="gamesWon">0</span></div>
          <div>Played: <span id="gamesPlayed">0</span></div>
          <div>Win Rate: <span id="winRate">0%</span></div>
        </div>

        <div id="message" class="message"></div>

        <p class="instructions">
          Crack the secret 4-color code! Click colors to build your guess, then submit.
          Black pegs mean right color in right position. White pegs mean right color in wrong position.
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
  slug: 'mastermind',
  title: 'Mastermind Game - Code Breaking Puzzle',
  shortTitle: 'Mastermind',
  description: 'Crack the secret color code in 10 guesses or less. Use logic and deduction from feedback pegs to figure out the hidden pattern.',
  metaDescription: 'Play Mastermind online free. Guess the secret 4-color code using logic and deduction. Get feedback after each guess to crack the code in 10 tries.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Logic Games', 'Classic Games'],
  keywords: ['mastermind', 'code breaker', 'logic puzzle', 'deduction game', 'color code', 'brain game'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'How do you play Mastermind?',
      answer: 'The computer creates a secret 4-color code. You make guesses by selecting colors and submitting them. After each guess, you receive feedback: black pegs mean a color is correct and in the right position, white pegs mean a color is correct but in the wrong position. Use this feedback to deduce the secret code within 10 guesses.'
    },
    {
      question: 'What do the feedback pegs mean?',
      answer: 'Black pegs indicate you have the right color in the right position. White pegs indicate you have a correct color but in the wrong position. No peg means that color is not in the code (or all instances are already accounted for). The pegs do not tell you which specific colors they refer to.'
    },
    {
      question: 'What is a good strategy for Mastermind?',
      answer: 'Start with a guess using different colors to gather maximum information. Pay attention to how many pegs you get. If you get 2 black pegs, try keeping 2 colors in their positions and changing the others. Eliminate colors systematically based on feedback. Some players use the "1-1-2-2" starting pattern to efficiently narrow down possibilities.'
    },
    {
      question: 'Can colors repeat in Mastermind?',
      answer: 'In this version, yes! The secret code can contain the same color multiple times. This adds complexity because you need to consider that a color might appear more than once in the solution.'
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
