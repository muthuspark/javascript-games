<template>
  <section class="mt-5 pt-4 border-top" aria-labelledby="related-heading" v-if="relatedGames.length">
    <h2 id="related-heading" class="section-title mb-4">More Games</h2>
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
.section-title {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000;
}

.related-game-card {
  border: 1px solid #ccc;
  border-radius: 0;
  color: inherit;
  transition: background-color 0.15s;
}

.related-game-card:hover {
  background-color: #f8f9fa;
}

.related-game-card .card-img-top {
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
  filter: grayscale(20%);
}

.related-game-card:hover .card-img-top {
  filter: grayscale(0%);
}

.related-game-card .card-title {
  font-size: 0.875rem;
  font-weight: 400;
}
</style>
