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
      <div class="sudoku">
        <div class="difficulty-controls">
          <button class="difficulty easy selected" onclick="setDifficulty('easy')">Easy</button>
          <button class="difficulty medium" onclick="setDifficulty('medium')">Medium</button>
          <button class="difficulty hard" onclick="setDifficulty('hard')">Hard</button>
        </div>
        <div class="timer" id="timer">00:00</div>
        <div class="controls">
          <button onclick="newGame()">New Game</button>
          <button onclick="hint()">Get Hint</button>
        </div>
        <div class="grid" id="grid"></div>
        <div class="message" id="message"></div>
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
  slug: 'sudoku',
  title: 'Play Sudoku Online Free',
  shortTitle: 'Sudoku',
  description: 'Play classic Sudoku puzzles online for free. Fill the 9x9 grid so each row, column, and 3x3 box contains digits 1-9. Multiple difficulty levels from easy to hard.',
  metaDescription: 'Play free online Sudoku puzzles with easy, medium, and hard difficulty levels. Train your brain with this classic number placement game. No download required.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Logic Games', 'Number Games'],
  keywords: ['sudoku online', 'free sudoku', 'sudoku puzzle', 'number puzzle', 'brain games'],
  initCode: 'newGame();',
  faqs: [
    {
      question: 'How do you play Sudoku?',
      answer: 'Fill the 9x9 grid so that each row, column, and 3x3 box contains the numbers 1-9 exactly once. Start with the given numbers and use logic to fill in the rest.'
    },
    {
      question: 'What are the rules of Sudoku?',
      answer: 'Each row must contain numbers 1-9 without repetition. Each column must contain numbers 1-9 without repetition. Each 3x3 box must contain numbers 1-9 without repetition.'
    },
    {
      question: 'Is Sudoku good for your brain?',
      answer: 'Yes! Sudoku improves logical thinking, memory, and concentration. Regular play can help keep your mind sharp and may reduce cognitive decline.'
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
