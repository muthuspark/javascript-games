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
        <div class="instructions">
          <h2>How to Play</h2>
          <ol>
            <li>The game is played between two players: <span class="highlight">Player 1</span> and <span class="highlight">Player 2</span>.</li>
            <li>Each player takes turns choosing one of the 7 columns and drops their disc into it. <span class="highlight">Player 1</span> uses <span class="highlight">red discs</span>, and <span class="highlight">Player 2</span> uses <span class="highlight">yellow discs</span>.</li>
            <li>The discs fall straight down to the next available space in the column.</li>
            <li>The goal is to form a line of four discs of your own color. This line can be horizontal, vertical, or diagonal.</li>
            <li>If all the spaces on the grid are filled and neither player has connected four discs, the game ends in a draw.</li>
          </ol>
          <h2>Winning the Game</h2>
          <p>A player wins by forming a continuous line of four of their discs either horizontally, vertically, or diagonally. The first player to do so is declared the winner!</p>
        </div>

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
import { games } from '../../data/games.js'
import { useGameLoader } from '../../composables/useGameLoader.js'
import { useGameSeo } from '../../composables/useGameSeo.js'
import Breadcrumb from '../../components/Breadcrumb.vue'
import GameFaqs from '../../components/GameFaqs.vue'
import RelatedGames from '../../components/RelatedGames.vue'

const game = games.find(g => g.slug === 'connect4')

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/' },
  { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
]

useGameLoader(game.slug, game.initCode, game.extraScripts)
useGameSeo(game)
</script>

<style scoped>
h1 { font-weight: 600; }
.game-section { min-height: 400px; }
</style>
