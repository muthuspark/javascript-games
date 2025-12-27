<template>
  <div class="d-flex flex-column min-vh-100">
    <a href="#main-content" class="visually-hidden-focusable skip-link">
      Skip to main content
    </a>
    <header>
      <NavBar />
    </header>
    <main id="main-content" class="flex-grow-1" role="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Import custom styles */
@import './styles/main.css';

/* Skip link for accessibility */
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: #4CAF50;
  color: white;
  padding: 8px 16px;
  z-index: 9999;
  text-decoration: none;
}

.skip-link:focus {
  top: 0;
}
</style>
