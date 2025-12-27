# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brain Busters is a static site for browser-based puzzle and brain training games at games.muthu.co. Built with Vue 3 + Vite using Static Site Generation (SSG). Pure JavaScript (no TypeScript).

## Build Commands

```bash
npm run dev      # Start dev server
npm run build    # Build static site (outputs to /docs for GitHub Pages)
npm run preview  # Preview production build
```

## Architecture

### Hybrid SSG + Runtime Pattern

The site uses a hybrid approach:
- **Vue 3 + Vite-SSG** pre-renders all routes to static HTML for fast delivery
- **Games remain runtime-dynamic** - each game has its own script.js that manipulates DOM directly
- No centralized state management; game state lives in individual game scripts

### Game Asset Loading

Games are isolated in `/public/posts/{slug}/` with their own `script.js`, `style.css`, and `thumbnail.png`. The `useGameLoader` composable (`src/composables/useGameLoader.js`) dynamically injects these assets when a game page mounts and cleans them up on unmount. Each game script is wrapped in an IIFE to prevent conflicts.

### Key Data Flow

1. `src/data/games.js` - Central game metadata (title, description, FAQs, categories, keywords)
2. `src/router.js` - Auto-generates routes from games.js data
3. `src/pages/games/*Page.vue` - Game page components that use composables
4. `src/composables/useGameSeo.js` - Manages all head metadata and schema.org structured data

### Directory Structure

```
src/
├── composables/          # useGameLoader.js, useGameSeo.js
├── components/           # NavBar, Footer, GameCard, Breadcrumb, GameFaqs, RelatedGames
├── pages/games/          # Individual game page Vue components
├── data/games.js         # Game metadata and site-wide SEO data
└── styles/main.css       # Global wireframe styles

public/posts/
├── global.css            # Shared game styles
├── global.js             # Shared game utilities
└── {game-slug}/          # Per-game assets (script.js, style.css, thumbnail.png)
```

## Adding a New Game

1. Create folder `/public/posts/{slug}/` with `script.js`, `style.css`, `thumbnail.png`
2. Add game entry to `src/data/games.js` with all metadata
3. Create page component `src/pages/games/{Name}Page.vue`
4. Add route to `vite.config.js` ssgOptions.includedRoutes array

## External Dependencies

- Bootstrap 5.3.3 (CDN) for layout
- Bootstrap Icons (CDN)
- Google Fonts (Sniglet)
- Google Analytics and AdSense integrated in index.html
