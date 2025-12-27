<template>
  <article class="container py-4">
    <!-- Hero Section -->
    <header class="mb-5">
      <h1 class="page-title mb-3">Brain Training Games</h1>
      <p class="page-subtitle">
        Free puzzle games. No downloads. Play in your browser.
      </p>
    </header>

    <!-- Game Categories -->
    <section aria-labelledby="games-heading">
      <h2 id="games-heading" class="visually-hidden">All Games</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="game in games" :key="game.slug" class="col">
          <GameCard :game="game" />
        </div>
      </div>
    </section>

    <!-- SEO Content Section -->
    <section class="mt-5 pt-4 border-top" aria-labelledby="about-games-heading">
      <h2 id="about-games-heading" class="section-title mb-3">About</h2>
      <div class="row">
        <div class="col-md-6">
          <h3 class="subsection-title">Why Play Puzzle Games?</h3>
          <p class="body-text">
            Puzzle games improve logical thinking, memory, and concentration.
            From Sudoku to the Knight's Tour—all skill levels welcome.
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="subsection-title">Play Anywhere</h3>
          <p class="body-text">
            All games work directly in your browser.
            No downloads, no registration. Just play.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section for SEO -->
    <section class="mt-5 pt-4 border-top" aria-labelledby="faq-heading">
      <h2 id="faq-heading" class="section-title mb-4">FAQ</h2>
      <div class="accordion" id="faqAccordion">
        <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
          <h3 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#faq${index}`"
              :aria-expanded="false"
              :aria-controls="`faq${index}`"
            >
              {{ faq.question }}
            </button>
          </h3>
          <div :id="`faq${index}`" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body text-muted">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { games, siteData } from '../data/games.js'
import GameCard from '../components/GameCard.vue'

// Homepage FAQs - defined before useHead to avoid reference error
const faqs = [
  {
    question: 'Are these games free to play?',
    answer: 'Yes! All the games are completely free to play. No downloads, no registration, and no hidden costs. Just open your browser and start playing.'
  },
  {
    question: 'Do I need to download anything?',
    answer: 'No downloads required. All games run directly in your web browser using JavaScript. They work on desktop computers, tablets, and mobile phones.'
  },
  {
    question: 'Are puzzle games good for your brain?',
    answer: 'Research shows that puzzle games can improve cognitive function, including memory, concentration, and problem-solving skills. Regular play may help maintain mental sharpness as you age.'
  },
  {
    question: 'Which game should I start with?',
    answer: 'If you are new to puzzle games, start with classics like Tic Tac Toe or Minesweeper. For more challenge, try Sudoku or Connect 4. The N-Queens and Knight\'s Tour are great for advanced players.'
  }
]

// SEO Head configuration
useHead({
  title: 'Brain Busters - Free Online Puzzle Games | Sudoku, Minesweeper & More',
  meta: [
    { name: 'description', content: siteData.description },
    { name: 'keywords', content: 'puzzle games, brain games, sudoku, minesweeper, tic tac toe, connect 4, word search, logic games, free online games' },
    { property: 'og:title', content: 'Brain Busters - Free Online Puzzle Games' },
    { property: 'og:description', content: siteData.description },
    { property: 'og:url', content: siteData.siteUrl },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Brain Busters - Free Online Puzzle Games' },
    { name: 'twitter:description', content: siteData.description }
  ],
  link: [
    { rel: 'canonical', href: siteData.siteUrl + '/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Brain Busters - Free Online Puzzle Games",
        "description": siteData.description,
        "url": siteData.siteUrl,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": games.map((game, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${siteData.siteUrl}/posts/${game.slug}/`,
            "name": game.title
          }))
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      })
    }
  ]
})
</script>

<style scoped>
.page-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #000;
}

.page-subtitle {
  font-size: 1rem;
  color: #666;
  max-width: 400px;
}

.section-title {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000;
}

.subsection-title {
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.body-text {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.6;
}
</style>
