<template>
  <section class="mt-5 pt-4 border-top" aria-labelledby="related-heading" v-if="relatedGames.length">
    <h2 id="related-heading" class="h4 mb-4">You Might Also Like</h2>
    <div class="row row-cols-1 row-cols-md-3 g-3">
      <div v-for="game in relatedGames" :key="game.slug" class="col">
        <router-link
          :to="`/posts/${game.slug}/`"
          class="card h-100 text-decoration-none related-game-card"
        >
          <img
            :src="`/posts/${game.slug}/${game.thumbnail}`"
            :alt="`Play ${game.shortTitle || game.title}`"
            class="card-img-top"
            loading="lazy"
          >
          <div class="card-body">
            <h3 class="card-title h6 mb-0">{{ game.shortTitle || game.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { games } from '../data/games.js'

const props = defineProps({
  currentSlug: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    default: () => []
  }
})

const relatedGames = computed(() => {
  return games
    .filter(g => g.slug !== props.currentSlug)
    .filter(g => g.categories.some(c => props.categories.includes(c)))
    .slice(0, 3)
})
</script>

<style scoped>
.related-game-card {
  transition: transform 0.2s, box-shadow 0.2s;
  color: inherit;
}

.related-game-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.related-game-card .card-img-top {
  height: 120px;
  object-fit: cover;
}
</style>
