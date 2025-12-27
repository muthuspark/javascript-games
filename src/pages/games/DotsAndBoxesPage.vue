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
          <select id="gridSizeSelect" class="grid-select" onchange="changeGridSize()">
            <option value="3">3x3 (2x2 boxes)</option>
            <option value="4" selected>4x4 (3x3 boxes)</option>
            <option value="5">5x5 (4x4 boxes)</option>
            <option value="6">6x6 (5x5 boxes)</option>
          </select>
          <select id="difficultySelect" class="difficulty-select" onchange="changeDifficulty()">
            <option value="easy">Easy</option>
            <option value="medium" selected>Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onclick="newGame()">New Game</button>
        </div>

        <div id="gameStatus" class="game-status">Your turn - Click a line to draw</div>

        <div class="score-board">
          <div class="score-item player-1">
            <div class="score-label">You</div>
            <div class="score-value" id="playerScore">0</div>
          </div>
          <div class="score-item player-2">
            <div class="score-label">AI</div>
            <div class="score-value" id="aiScore">0</div>
          </div>
        </div>

        <div id="gameBoard"></div>

        <div class="legend">
          <div class="legend-item">
            <div class="legend-color player-1"></div>
            <span>Your boxes</span>
          </div>
          <div class="legend-item">
            <div class="legend-color player-2"></div>
            <span>AI boxes</span>
          </div>
        </div>

        <div class="rules">
          <h4>How to Play</h4>
          <ul>
            <li>Click on a line between two dots to draw it</li>
            <li>Complete a box by drawing its fourth side to claim it</li>
            <li>When you complete a box, you get another turn</li>
            <li>The player with the most boxes at the end wins</li>
          </ul>
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
  slug: 'dots-and-boxes',
  title: 'Dots and Boxes Game - Connect the Dots',
  shortTitle: 'Dots and Boxes',
  description: 'Play Dots and Boxes against AI. Draw lines between dots to complete boxes and score points. Classic pencil-and-paper strategy game.',
  metaDescription: 'Play Dots and Boxes online free against AI. Draw lines between dots to complete squares. Classic strategy game with multiple grid sizes and difficulty levels.',
  thumbnail: 'thumbnail.png',
  categories: ['Strategy Games', 'Classic Games', 'Puzzles'],
  keywords: ['dots and boxes', 'connect the dots', 'squares game', 'pencil paper game', 'strategy game', 'two player game', 'classic game'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'What is Dots and Boxes and how do you play?',
      answer: 'Dots and Boxes is a classic pencil-and-paper game for two players. The game starts with a grid of dots. Players take turns drawing horizontal or vertical lines between adjacent dots. When a player draws the fourth side of a box, they claim that box and get another turn. The player with the most boxes when the grid is full wins.'
    },
    {
      question: 'What is the best strategy for Dots and Boxes?',
      answer: 'The key strategy is to avoid drawing the third side of any box, as this gives your opponent a free box. Try to create chains where completing one box leads to completing many more. Sometimes sacrificing a few boxes early can let you claim a larger chain later. The AI on hard difficulty uses these strategic concepts.'
    },
    {
      question: 'What do the different difficulty levels mean?',
      answer: 'Easy: AI makes random moves. Medium: AI captures available boxes but sometimes makes suboptimal moves. Hard: AI uses strategic thinking to avoid giving away boxes and tries to create winning chains. Try the larger grid sizes for more complex games!'
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
