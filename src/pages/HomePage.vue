<template>
  <article class="container py-4">
    <!-- Hero Section -->
    <header class="text-center mb-5">
      <h1 class="display-5 fw-bold mb-3">Free Online Brain Training Games</h1>
      <p class="lead text-muted mx-auto" style="max-width: 700px;">
        Challenge your mind with our collection of free puzzle games. Play Sudoku, Minesweeper,
        Tic Tac Toe, and more. No downloads required - play instantly in your browser!
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
      <h2 id="about-games-heading" class="h4 mb-3">About Our Brain Training Games</h2>
      <div class="row">
        <div class="col-md-6">
          <h3 class="h5">Why Play Puzzle Games?</h3>
          <p class="text-muted">
            Puzzle games are excellent for brain training and cognitive development.
            Regular play can improve logical thinking, memory, concentration, and problem-solving skills.
            Our games range from classic favorites like Sudoku and Minesweeper to unique challenges
            like the Knight's Tour and N-Queens puzzle.
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="h5">Play Anywhere, Anytime</h3>
          <p class="text-muted">
            All our games are free to play and work directly in your browser.
            No downloads, no registration required. Whether you have 5 minutes or an hour,
            our games adapt to your schedule with adjustable difficulty levels and
            multiple game modes.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section for SEO -->
    <section class="mt-5 pt-4 border-top" aria-labelledby="faq-heading">
      <h2 id="faq-heading" class="h4 mb-4">Frequently Asked Questions</h2>
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
    answer: 'Yes! All our games are completely free to play. No downloads, no registration, and no hidden costs. Just open your browser and start playing.'
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
.accordion-button:not(.collapsed) {
  background-color: rgba(76, 175, 80, 0.1);
  color: #2e7d32;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(76, 175, 80, 0.25);
}
</style>
