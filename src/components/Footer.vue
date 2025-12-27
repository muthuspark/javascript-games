<template>
  <footer class="footer mt-auto py-4" role="contentinfo">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-2 mb-md-0">
            &copy; {{ currentYear }} <a href="/about">Muthukrishnan</a>
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <nav aria-label="Footer navigation" class="footer-nav">
            <router-link to="/">Games</router-link>
            <router-link to="/about">About</router-link>
            <a
              href="https://github.com/muthuspark/javascript-games"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
            >
              Source
            </a>
          </nav>
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
  font-size: 0.8rem;
  border-top: 1px solid #ccc;
  background: #fff;
  color: #666;
}

.footer a {
  color: #1a1a1a;
  text-decoration: underline;
}

.footer a:hover {
  text-decoration: none;
}

.footer-nav a {
  margin-left: 1.5rem;
}

.footer-nav a:first-child {
  margin-left: 0;
}
</style>
