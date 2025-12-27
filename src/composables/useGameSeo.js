import { useHead } from '@unhead/vue'
import { siteData } from '../data/games.js'

export function useGameSeo(game) {
  const pageTitle = `${game.title} - Play Free Online | Brain Busters`
  const pageUrl = `${siteData.siteUrl}/posts/${game.slug}/`
  const imageUrl = `${siteData.siteUrl}/posts/${game.slug}/thumbnail.png`

  // Build structured data
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.metaDescription || game.description,
    "url": pageUrl,
    "image": imageUrl,
    "genre": game.categories,
    "gamePlatform": "Web Browser",
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Person",
      "name": siteData.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brain Busters"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteData.siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": game.shortTitle || game.title,
        "item": pageUrl
      }
    ]
  }

  const scripts = [
    { type: 'application/ld+json', children: JSON.stringify(gameSchema) },
    { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
  ]

  // Add FAQ schema if FAQs exist
  if (game.faqs?.length) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": game.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
    scripts.push({ type: 'application/ld+json', children: JSON.stringify(faqSchema) })
  }

  useHead({
    title: pageTitle,
    meta: [
      { name: 'description', content: game.metaDescription || game.description },
      { name: 'keywords', content: game.keywords?.join(', ') || '' },
      { property: 'og:title', content: game.title },
      { property: 'og:description', content: game.metaDescription || game.description },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: imageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: game.title },
      { name: 'twitter:description', content: game.metaDescription || game.description },
      { name: 'twitter:image', content: imageUrl }
    ],
    link: [
      { rel: 'canonical', href: pageUrl }
    ],
    script: scripts
  })

  return {
    pageTitle,
    pageUrl,
    imageUrl
  }
}
