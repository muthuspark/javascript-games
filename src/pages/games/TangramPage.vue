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
      <div id="game_main_container">
        <div class="puzzle-info">
          <div class="puzzle-preview">
            <h3>Target Shape</h3>
            <canvas id="puzzleCanvas" width="200" height="200"></canvas>
          </div>
          <div class="puzzle-details">
            <h2 id="puzzleName">Square</h2>
            <span class="difficulty" id="puzzleDifficulty">Easy</span>
            <div class="stats">
              Completed: <span id="completedCount">0</span> / <span id="totalPuzzles">10</span>
            </div>
          </div>
        </div>

        <canvas id="gameCanvas" width="500" height="500"></canvas>

        <div class="controls">
          <div class="control-group">
            <button onclick="prevPuzzle()" class="btn-nav" title="Previous puzzle">
              <i class="bi bi-chevron-left"></i> Prev
            </button>
            <button onclick="nextPuzzle()" class="btn-nav" title="Next puzzle">
              Next <i class="bi bi-chevron-right"></i>
            </button>
          </div>
          <div class="control-group">
            <button onclick="rotateCCW()" class="btn-rotate" title="Rotate counter-clockwise (E)">
              <i class="bi bi-arrow-counterclockwise"></i>
            </button>
            <button onclick="rotateCW()" class="btn-rotate" title="Rotate clockwise (R)">
              <i class="bi bi-arrow-clockwise"></i>
            </button>
            <button onclick="flip()" class="btn-flip" title="Flip parallelogram (F)">
              <i class="bi bi-symmetry-horizontal"></i> Flip
            </button>
          </div>
          <div class="control-group">
            <button onclick="shufflePieces()" class="btn-action" title="Shuffle all pieces">
              <i class="bi bi-shuffle"></i> Shuffle
            </button>
            <button onclick="resetCurrentPuzzle()" class="btn-reset" title="Reset pieces">
              <i class="bi bi-arrow-repeat"></i> Reset
            </button>
          </div>
          <div class="control-group">
            <button onclick="markComplete()" class="btn-complete" title="Mark puzzle as complete">
              <i class="bi bi-check-lg"></i> Done
            </button>
          </div>
        </div>

        <div class="instructions">
          <h4>How to Play</h4>
          <ul>
            <li><strong>Drag</strong> pieces to move them into position</li>
            <li><strong>Click a piece</strong> to select it, then use <kbd>R</kbd>/<kbd>E</kbd> to rotate</li>
            <li><strong>Press <kbd>F</kbd></strong> to flip the parallelogram (pink piece)</li>
            <li>Arrange all 7 pieces to match the target silhouette</li>
            <li>Click <strong>Done</strong> when you've completed the puzzle</li>
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
  slug: 'tangram',
  title: 'Tangram Puzzle - Classic Shape Puzzle Game',
  shortTitle: 'Tangram',
  description: 'Arrange seven geometric pieces to match silhouette puzzles. Drag, rotate, and flip pieces to create shapes. A timeless Chinese puzzle game.',
  metaDescription: 'Play free Tangram puzzles online. Arrange 7 geometric shapes to match silhouettes. Classic Chinese dissection puzzle with multiple difficulty levels.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Pattern Games', 'Classic Games'],
  keywords: ['tangram', 'tangram puzzle', 'shape puzzle', 'chinese puzzle', 'geometric puzzle', 'tangram online', 'brain teaser'],
  initCode: 'initGame();',
  faqs: [
    {
      question: 'What is a Tangram puzzle?',
      answer: 'Tangram is an ancient Chinese dissection puzzle consisting of seven flat pieces called tans. The objective is to arrange all seven pieces to form a specific shape shown as a silhouette, using all pieces without overlapping.'
    },
    {
      question: 'What are the seven Tangram pieces?',
      answer: 'A traditional Tangram consists of: 2 large triangles, 1 medium triangle, 2 small triangles, 1 square, and 1 parallelogram. Together they form a square, but can create thousands of different shapes.'
    },
    {
      question: 'How do I rotate pieces in this game?',
      answer: 'Click on a piece to select it, then press R to rotate clockwise or E to rotate counter-clockwise. You can also use the rotation buttons on screen. Pieces rotate in 45-degree increments.'
    },
    {
      question: 'Can I flip pieces in Tangram?',
      answer: 'Only the parallelogram (pink piece) can be flipped. Select it and press F or use the Flip button. This is because the parallelogram is the only piece that has a different shape when mirrored.'
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
