<template>
  <article class="card h-100 game-card" itemscope itemtype="https://schema.org/VideoGame">
    <router-link :to="`/posts/${game.slug}/`" class="card-link" :aria-label="`Play ${game.shortTitle || game.title}`">
      <img
        :src="`/posts/${game.slug}/${game.thumbnail}`"
        :alt="`${game.shortTitle || game.title} game preview`"
        class="card-img-top"
        :loading="priority ? 'eager' : 'lazy'"
        decoding="async"
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
            class="badge bg-secondary"
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
  priority: {
    type: Boolean,
    default: false
  },
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
  border: 1px solid var(--color-border);
  border-radius: 0;
  background: var(--color-surface);
  transition: background-color 0.15s;
}

.game-card:hover {
  background-color: var(--color-surface-subtle);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.card-img-top {
  height: 200px;
  width: 100%;
  object-fit: contain;
  padding: 0.75rem;
  background: var(--color-surface-subtle);
  border-bottom: 1px solid var(--color-border);
}

.card-title {
  font-size: var(--text-heading);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.card-text {
  font-size: var(--text-body);
  line-height: 1.5;
  color: var(--color-text-muted);
}

.card-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.75rem;
}
</style>
