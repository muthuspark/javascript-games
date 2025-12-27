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
        <div class="controls">
          <select id="levelSelect" class="level-select" onchange="changeLevel()">
            <option value="1">Easy (3x4)</option>
            <option value="2">Medium (4x4)</option>
            <option value="3">Hard (4x5)</option>
            <option value="4">Expert (5x6)</option>
          </select>
          <button onclick="newGame()">New Game</button>
        </div>
        <div class="stats">
          <div>Moves: <span id="moveCount">0</span></div>
          <div>Time: <span id="timer">00:00</span></div>
          <div>Best: <span id="bestScore">-</span></div>
        </div>
        <div id="winner" class="winner"></div>
        <div class="board"></div>
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
  slug: 'memory-match',
  title: 'Memory Match Game - Card Matching Puzzle',
  shortTitle: 'Memory Match',
  description: 'Flip cards to find matching pairs. Train your memory with this classic concentration game. Multiple grid sizes from easy to challenging.',
  metaDescription: 'Play Memory Match online free. Flip cards to find matching pairs in this classic concentration game. 4 difficulty levels to challenge your memory skills.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Memory Games', 'Classic Games'],
  keywords: ['memory game', 'matching game', 'concentration game', 'card matching', 'memory training', 'brain game'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'How do you play Memory Match?',
      answer: 'Click on cards to flip them over and reveal the icons. Try to find two cards with matching icons. When you find a match, both cards stay face up. Continue until all pairs are matched.'
    },
    {
      question: 'What are good strategies for memory games?',
      answer: 'Start by flipping cards in a systematic pattern to build a mental map of their locations. Pay attention to every card that gets flipped, even when looking for other matches. Try to remember cards by their position relative to other cards.'
    },
    {
      question: 'How does Memory Match help train your brain?',
      answer: 'Memory matching games improve short-term memory, concentration, and visual recognition skills. Regular practice can enhance your ability to remember and recall information quickly.'
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
