<template>
  <article class="container py-5" itemscope itemtype="https://schema.org/ProfilePage">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Profile Header -->
        <header class="text-center mb-4">
          <img
            src="/profile.png"
            alt="Muthukrishnan - Creator of Brain Busters"
            class="rounded-circle profile-img mb-3"
            width="150"
            height="150"
            loading="eager"
            itemprop="image"
          >
          <h1 itemprop="name">About the Creator</h1>
          <p class="lead text-muted" itemprop="description">
            Engineering Manager, Patent Holder & Game Developer
          </p>

          <!-- Social Links -->
          <nav class="social-links mb-4" aria-label="Social media links">
            <a
              href="https://twitter.com/krimuthu"
              class="btn btn-outline-secondary me-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Twitter"
            >
              <i class="bi bi-twitter" aria-hidden="true"></i> Twitter
            </a>
            <a
              href="https://linkedin.com/in/krimuthu"
              class="btn btn-outline-secondary me-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              <i class="bi bi-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
            <a
              href="https://github.com/muthuspark"
              class="btn btn-outline-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
            >
              <i class="bi bi-github" aria-hidden="true"></i> Github
            </a>
          </nav>
        </header>

        <!-- Bio Content -->
        <section class="about-content" aria-labelledby="bio-heading">
          <h2 id="bio-heading" class="visually-hidden">Biography</h2>

          <div itemprop="mainContentOfPage">
            <p>I'm <strong itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Muthukrishnan</span></strong>, currently working as an Engineering Manager at Sanas AI Inc. I have over 16 years of experience in building scalable SaaS applications from the ground up. Throughout my career, I've had the privilege of working in dynamic environments, from startups to established enterprises, contributing to the growth and success of each.</p>

            <p>As a hands-on leader, I've built and scaled applications that have grown from hundreds of users to millions, and I have filed about five patents. These patents cover a range of technologies, from optical character recognition (OCR) to systems for cross-application walkthroughs and UI element retrieval.</p>

            <p>In my previous role at Whatfix, I'm proud to have architected and launched the Desktop business, which now generates over $2 million in revenue. I built the team from scratch, guiding them to deliver innovative solutions that address real-world challenges.</p>

            <h3 class="h5 mt-4">Technical Expertise</h3>
            <p>My expertise extends across system design, software architecture, and various programming languages like Java, JavaScript, and Python. I'm deeply committed to process optimization and fostering an agile culture that drives efficiency and quality.</p>

            <h3 class="h5 mt-4">Why Brain Busters?</h3>
            <p>I created Brain Busters as a passion project to combine my love of programming with classic puzzle games. These games are built with vanilla JavaScript, demonstrating that you don't always need heavy frameworks to create engaging interactive experiences.</p>

            <p>When I'm not working, I enjoy sharing my insights through writing. You can always reach out to me via LinkedIn, my blog, or GitHub for a conversation about technology, engineering management, or the future of SaaS.</p>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { siteData } from '../data/games.js'

useHead({
  title: 'About Muthukrishnan - Creator of Brain Busters | Engineering Manager',
  meta: [
    { name: 'description', content: 'Learn about Muthukrishnan, the creator of Brain Busters puzzle games. Engineering Manager with 16+ years experience building scalable SaaS applications and 5 patents.' },
    { name: 'keywords', content: 'Muthukrishnan, Brain Busters creator, engineering manager, software architect, puzzle game developer' },
    { property: 'og:title', content: 'About the Creator - Brain Busters' },
    { property: 'og:description', content: 'Meet Muthukrishnan, Engineering Manager and creator of Brain Busters free online puzzle games.' },
    { property: 'og:url', content: `${siteData.siteUrl}/about` },
    { property: 'og:type', content: 'profile' },
    { property: 'og:image', content: `${siteData.siteUrl}/profile.png` },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'About the Creator - Brain Busters' },
    { name: 'twitter:description', content: 'Meet Muthukrishnan, Engineering Manager and creator of Brain Busters free online puzzle games.' }
  ],
  link: [
    { rel: 'canonical', href: `${siteData.siteUrl}/about` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "name": "Muthukrishnan",
          "jobTitle": "Engineering Manager",
          "worksFor": {
            "@type": "Organization",
            "name": "Sanas AI Inc"
          },
          "url": `${siteData.siteUrl}/about`,
          "image": `${siteData.siteUrl}/profile.png`,
          "sameAs": [
            "https://twitter.com/krimuthu",
            "https://linkedin.com/in/krimuthu",
            "https://github.com/muthuspark"
          ],
          "description": "Engineering Manager with 16+ years experience in building scalable SaaS applications. Creator of Brain Busters puzzle games."
        }
      })
    }
  ]
})
</script>

<style scoped>
.profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 3px solid #4CAF50;
}

.about-content p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.social-links .btn {
  padding: 0.5rem 1rem;
}

.social-links .btn:hover {
  background-color: #4CAF50;
  border-color: #4CAF50;
  color: white;
}
</style>
