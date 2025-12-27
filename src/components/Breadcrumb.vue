<template>
  <nav aria-label="Breadcrumb" class="breadcrumb-nav">
    <ol class="breadcrumb mb-3" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li
        v-for="(item, index) in items"
        :key="item.path"
        class="breadcrumb-item"
        :class="{ active: index === items.length - 1 }"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <router-link
          v-if="index < items.length - 1"
          :to="item.path"
          itemprop="item"
        >
          <span itemprop="name">{{ item.name }}</span>
        </router-link>
        <span v-else itemprop="name" aria-current="page">{{ item.name }}</span>
        <meta itemprop="position" :content="index + 1">
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.breadcrumb-nav {
  font-size: 0.9rem;
}

.breadcrumb-item a {
  color: #4CAF50;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.breadcrumb-item.active {
  color: #6c757d;
}
</style>
