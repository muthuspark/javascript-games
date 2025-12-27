import { ref, onMounted, onBeforeUnmount } from 'vue'

// Track extra scripts (CDN libs like txtgen) - these persist across games
const loadedExtraScripts = new Set()

export function useGameLoader(slug, initCode, extraScripts = []) {
  const loadedElements = ref([])

  // Load a single extra script (CDN libraries) and return a promise
  const loadExtraScript = (src) => {
    return new Promise((resolve, reject) => {
      // Extra scripts (like txtgen) persist - don't reload
      if (loadedExtraScripts.has(src)) {
        resolve()
        return
      }

      // Check if already in DOM
      const existing = document.querySelector(`script[src="${src}"]`)
      if (existing) {
        loadedExtraScripts.add(src)
        resolve()
        return
      }

      const script = document.createElement('script')
      script.src = src
      script.async = false
      script.onload = () => {
        loadedExtraScripts.add(src)
        resolve()
      }
      script.onerror = () => {
        console.error(`Failed to load script: ${src}`)
        reject(new Error(`Failed to load: ${src}`))
      }
      document.head.appendChild(script)
    })
  }

  const loadGameAssets = async () => {
    const scriptPath = `/posts/${slug}/script.js`

    // Load extra scripts first (CDN libs like txtgen)
    if (extraScripts.length > 0) {
      try {
        await Promise.all(extraScripts.map(src => loadExtraScript(src)))
      } catch (e) {
        console.error('Error loading extra scripts:', e)
      }
    }

    // Load game-specific CSS
    const cssPath = `/posts/${slug}/style.css`
    const existingLink = document.querySelector(`link[href="${cssPath}"]`)
    if (!existingLink) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = cssPath
      document.head.appendChild(link)
      loadedElements.value.push(link)
    }

    // Load game script - each script is wrapped in IIFE so safe to reload
    const script = document.createElement('script')
    script.src = scriptPath
    script.async = false
    script.dataset.gameSlug = slug

    script.onload = () => {
      setTimeout(() => {
        try {
          if (initCode) {
            new Function(initCode)()
          }
        } catch (e) {
          console.error('Error initializing game:', e)
        }
      }, 50)
    }

    script.onerror = () => {
      console.error(`Failed to load script: ${scriptPath}`)
    }

    document.body.appendChild(script)
    loadedElements.value.push(script)
  }

  const cleanupAssets = () => {
    // Remove CSS and scripts added by this game
    loadedElements.value.forEach(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
    })
    loadedElements.value = []
  }

  onMounted(() => {
    loadGameAssets()
  })

  onBeforeUnmount(() => {
    cleanupAssets()
  })

  return {
    loadGameAssets,
    cleanupAssets
  }
}
