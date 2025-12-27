<template>
  <footer class="footer mt-auto py-4 bg-body-tertiary border-top" role="contentinfo">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-2 mb-md-0 text-muted">
            &copy; {{ currentYear }} <a href="/about" class="text-decoration-none">Muthukrishnan</a>. All rights reserved.
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <nav aria-label="Footer navigation">
            <router-link to="/" class="text-muted text-decoration-none me-3">Games</router-link>
            <router-link to="/about" class="text-muted text-decoration-none me-3">About</router-link>
            <a
              href="https://github.com/muthuspark/javascript-games"
              class="text-muted text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
            >
              <i class="bi bi-github" aria-hidden="true"></i> Source
            </a>
          </nav>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col text-center">
          <p class="small text-muted mb-0">
            Free online puzzle games for brain training. Play Sudoku, Minesweeper, Tic Tac Toe, and more!
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  font-size: 0.9rem;
}

.footer a:hover {
  color: #4CAF50 !important;
}
</style>
