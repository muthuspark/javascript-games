import { games, siteData } from '../src/data/games.js'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const today = new Date().toISOString().split('T')[0]

function generateSitemap() {
  const urls = []

  // Homepage
  urls.push(`
  <url>
    <loc>${siteData.siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`)

  // About page
  urls.push(`
  <url>
    <loc>${siteData.siteUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`)

  // Game pages
  games.forEach((game) => {
    urls.push(`
  <url>
    <loc>${siteData.siteUrl}/posts/${game.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${siteData.siteUrl}/posts/${game.slug}/thumbnail.png</image:loc>
      <image:title>${game.title}</image:title>
    </image:image>
  </url>`)
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls.join('')}
</urlset>
`

  const outputPath = join(__dirname, '../public/sitemap.xml')
  writeFileSync(outputPath, sitemap)
  console.log(`Sitemap generated with ${games.length + 2} URLs (${games.length} games + homepage + about)`)
}

generateSitemap()
