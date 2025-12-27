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
            <option value="easy">Easy</option>
            <option value="medium" selected>Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onclick="newGame()">New Game</button>
        </div>

        <div id="gameStatus" class="game-status">Your turn - Select a pile</div>

        <div id="message" class="message"></div>

        <div id="pilesContainer" class="piles-container"></div>

        <div class="take-section">
          <h3>Take Objects</h3>
          <div id="takeButtons"></div>
        </div>

        <div class="rules">
          <h4>How to Play</h4>
          <ul>
            <li>Click a pile to select it</li>
            <li>Choose how many objects to take (at least 1)</li>
            <li>You can only take from one pile per turn</li>
            <li>The player who takes the last object loses!</li>
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
  slug: 'nim',
  title: 'Nim Game - Strategic Object Removal',
  shortTitle: 'Nim',
  description: 'Play Nim against AI. Take objects from piles strategically - whoever takes the last object loses. A classic mathematical strategy game.',
  metaDescription: 'Play Nim online free against AI. Remove objects from piles strategically. Whoever takes the last object loses. Multiple difficulty levels available.',
  thumbnail: 'thumbnail.png',
  categories: ['Strategy Games', 'Logic Games', 'Classic Games'],
  keywords: ['nim game', 'strategy game', 'mathematical game', 'logic puzzle', 'two player game', 'brain game', 'nim sum'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'What is Nim and how do you play?',
      answer: 'Nim is a mathematical strategy game. The game starts with several piles of objects. On your turn, you must take at least one object from exactly one pile. You can take as many objects as you want from that pile. The player who takes the last object loses the game.'
    },
    {
      question: 'What is the winning strategy in Nim?',
      answer: 'The winning strategy involves calculating the "Nim sum" - the XOR of all pile sizes. If the Nim sum is non-zero, you can always make a move to make it zero, putting your opponent in a losing position. The AI on hard difficulty uses this optimal strategy.'
    },
    {
      question: 'What are the different difficulty levels?',
      answer: 'Easy: AI makes random moves. Medium: AI plays optimally 50% of the time. Hard: AI always plays the optimal strategy using Nim sum calculations. Try to beat the AI on hard difficulty!'
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
