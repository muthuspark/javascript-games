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
      <div id="connect4">
        <div class="box-left">
          <table id="game_board"></table>
        </div>

        <div class="box-right">
          <div id="options">
            <p class="header">Difficulty</p>
            <p>
              <select id="difficulty" autocomplete="off">
                <option value="1">Level 1</option>
                <option value="2">Level 2 (Passive)</option>
                <option value="3">Level 3</option>
                <option value="4" selected="selected">Level 4 (Easy)</option>
                <option value="5">Level 5</option>
                <option value="6">Level 6 (Moderate)</option>
                <option value="7">Level 7</option>
                <option value="8">Level 8 (Tougher)</option>
              </select>
            </p>
            <p><button onclick="Game.restartGame();" type="submit">Restart game</button></p>
          </div>
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
  slug: 'connect4',
  title: 'Connect 4 Game Online - Free to Play',
  shortTitle: 'Connect 4',
  description: 'Play Connect 4 online against AI. Drop colored discs into a 7x6 grid and be first to connect four in a row. Multiple difficulty levels available.',
  metaDescription: 'Play Connect 4 online free against computer AI. 8 difficulty levels from beginner to expert. Classic strategy game - connect four discs to win.',
  thumbnail: 'thumbnail.png',
  categories: ['Puzzles', 'Strategy Games', 'Classic Games'],
  keywords: ['connect 4', 'connect four', 'four in a row', 'connect 4 online', 'strategy game'],
  initCode: 'Start();',
  faqs: [
    {
      question: 'How do you play Connect 4?',
      answer: 'Take turns dropping colored discs into columns. The first player to connect four discs horizontally, vertically, or diagonally wins.'
    },
    {
      question: 'What is the best strategy for Connect 4?',
      answer: 'Control the center column, build multiple threats at once, and block your opponent while setting up your own winning combinations.'
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
