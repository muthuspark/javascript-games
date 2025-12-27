<template>
  <article class="card h-100 game-card" itemscope itemtype="https://schema.org/VideoGame">
    <router-link :to="`/posts/${game.slug}/`" class="card-link" :aria-label="`Play ${game.title}`">
      <img
        :src="`/posts/${game.slug}/${game.thumbnail}`"
        :alt="`${game.title} - Free Online Puzzle Game`"
        class="card-img-top"
        loading="lazy"
        width="300"
        height="180"
        itemprop="image"
      >
      <div class="card-body">
        <h2 class="card-title h5" itemprop="name">{{ game.shortTitle || game.title }}</h2>
        <p class="card-text text-muted" itemprop="description">{{ truncatedDescription }}</p>
        <div class="card-categories">
          <span
            v-for="category in game.categories.slice(0, 2)"
            :key="category"
            class="badge bg-secondary me-1"
            itemprop="genre"
          >
            {{ category }}
          </span>
        </div>
      </div>
      <meta itemprop="url" :content="`https://games.muthu.co/posts/${game.slug}/`">
      <span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="display:none">
        <meta itemprop="price" content="0">
        <meta itemprop="priceCurrency" content="USD">
      </span>
    </router-link>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const truncatedDescription = computed(() => {
  const desc = props.game.metaDescription || props.game.description
  if (desc.length > 100) {
    return desc.substring(0, 100) + '...'
  }
  return desc
})
</script>

<style scoped>
.game-card {
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.card-img-top {
  height: 180px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.game-card:hover .card-img-top {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.85rem;
  line-height: 1.5;
}

.card-categories {
  margin-top: 0.75rem;
}

.badge {
  font-weight: 500;
  font-size: 0.75rem;
}
</style>
