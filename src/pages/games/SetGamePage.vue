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
        <div class="controls">
          <button onclick="newGame()">New Game</button>
          <button onclick="addCards()">Add Cards (+3)</button>
          <button onclick="showHint()">Hint</button>
        </div>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-label">Sets Found: </span>
            <span class="stat-value" id="setsFound">0</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Time: </span>
            <span class="stat-value" id="timer">00:00</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Cards Left: </span>
            <span class="stat-value" id="cardsLeft">0</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Sets Available: </span>
            <span class="stat-value" id="setsAvailable">0</span>
          </div>
        </div>
        <div id="board"></div>
      </div>
    </section>

    <div class="instructions">
      <h2>How to Play</h2>
      <ol>
        <li>Find three cards that form a valid <strong>Set</strong></li>
        <li>A valid set has cards where each feature (shape, color, fill, count) is either <strong>all the same</strong> or <strong>all different</strong> across the three cards</li>
        <li>Click three cards to select them - if they form a valid set, they'll be replaced with new cards</li>
        <li>If no sets are available, click "Add Cards" to add 3 more cards to the board</li>
        <li>Use "Hint" if you're stuck - it will briefly highlight a valid set</li>
      </ol>
      <p><strong>Features:</strong></p>
      <ul>
        <li><strong>Shapes:</strong> Diamond, Oval, Squiggle</li>
        <li><strong>Colors:</strong> Red, Green, Purple</li>
        <li><strong>Fills:</strong> Solid, Striped, Empty</li>
        <li><strong>Counts:</strong> 1, 2, or 3 shapes</li>
      </ul>
    </div>

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
  slug: 'set-game',
  title: 'Set Game - Find Matching Card Sets',
  shortTitle: 'Set Game',
  description: 'Find sets of three cards where each feature is either all the same or all different. A challenging visual logic puzzle that trains pattern recognition.',
  metaDescription: 'Play Set Game online free. Find valid sets of three cards based on shape, color, fill, and count. A classic pattern recognition puzzle that challenges your brain.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Logic Games', 'Pattern Games'],
  keywords: ['set game', 'card game', 'pattern recognition', 'logic puzzle', 'brain game', 'visual puzzle', 'matching game'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'What is a valid Set in the Set Game?',
      answer: 'A valid Set consists of three cards where each of the four features (shape, color, fill, and count) is either all the same or all different across the three cards. For example, three cards with different shapes, different colors, different fills, and the same count would be a valid set.'
    },
    {
      question: 'What are the four features in Set?',
      answer: 'Each card has four features: Shape (diamond, oval, or squiggle), Color (red, green, or purple), Fill (solid, striped, or empty), and Count (1, 2, or 3 shapes). With 3 options for each of 4 features, there are 81 unique cards in the deck.'
    },
    {
      question: 'How do I get better at finding Sets?',
      answer: 'Start by focusing on one feature at a time. Look for cards that share two features and check if a third card completes the set. Practice recognizing common patterns and train yourself to quickly scan all four features. The more you play, the faster you\'ll spot valid sets.'
    },
    {
      question: 'What if there are no valid Sets on the board?',
      answer: 'If no valid sets exist among the displayed cards, click the "Add Cards" button to add 3 more cards to the board. The game automatically ensures there\'s at least one valid set when starting, but as you find sets, situations with no valid sets can occur.'
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
