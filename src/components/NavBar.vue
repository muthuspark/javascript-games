<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom" aria-label="Main navigation">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/" aria-label="Brain Busters - Home">
        <span class="brand-icon me-2" aria-hidden="true">🧩</span>
        <span class="brand-text">Brain Busters</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/" aria-label="Browse all games">
              <i class="bi bi-controller me-1" aria-hidden="true"></i> Games
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" aria-label="About the creator">
              <i class="bi bi-person me-1" aria-hidden="true"></i> About
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/muthuspark/javascript-games"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
            >
              <i class="bi bi-github" aria-hidden="true"></i>
              <span class="d-lg-none ms-1">GitHub</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://twitter.com/krimuthu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Twitter"
            >
              <i class="bi bi-twitter" aria-hidden="true"></i>
              <span class="d-lg-none ms-1">Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  padding: 0.75rem 0;
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.25rem;
}

.brand-icon {
  font-size: 1.5rem;
}

.brand-text {
  background: linear-gradient(135deg, #4CAF50, #2196F3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #4CAF50 !important;
}

.nav-link i {
  font-size: 1.1rem;
}

.router-link-active:not(.navbar-brand) {
  color: #4CAF50 !important;
}
</style>
