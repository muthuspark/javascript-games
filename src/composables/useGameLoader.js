import { ref, onMounted, onBeforeUnmount } from 'vue'

// Module-level state - persists across component instances to prevent script re-loading
const loadedScripts = new Set()

export function useGameLoader(slug, initCode, extraScripts = []) {
  const loadedElements = ref([])

  const loadGameAssets = () => {
    const scriptKey = `/posts/${slug}/script.js`

    // Load extra scripts first (like txtgen for typing-speed)
    extraScripts.forEach(src => {
      if (!loadedScripts.has(src)) {
        const script = document.createElement('script')
        script.src = src
        script.async = false
        document.head.appendChild(script)
        loadedScripts.add(src)
      }
    })

    // Load game-specific CSS
    const existingLink = document.querySelector(`link[href="/posts/${slug}/style.css"]`)
    if (!existingLink) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = `/posts/${slug}/style.css`
      document.head.appendChild(link)
      loadedElements.value.push(link)
    }

    // Check if this game's script is already loaded (in Set or in DOM)
    const existingScript = document.querySelector(`script[src="${scriptKey}"]`)
    const scriptAlreadyLoaded = loadedScripts.has(scriptKey) || existingScript

    if (scriptAlreadyLoaded) {
      // Mark as loaded if found in DOM but not in Set (e.g., after HMR)
      loadedScripts.add(scriptKey)
      // Script already loaded, just reinitialize the game
      setTimeout(() => {
        try {
          if (initCode) {
            new Function(initCode)()
          }
        } catch (e) {
          console.error('Error initializing game:', e)
        }
      }, 100)
    } else {
      // Load game-specific JS for the first time
      const script = document.createElement('script')
      script.src = scriptKey
      document.body.appendChild(script)
      loadedScripts.add(scriptKey)

      script.onload = () => {
        setTimeout(() => {
          try {
            if (initCode) {
              new Function(initCode)()
            }
          } catch (e) {
            console.error('Error initializing game:', e)
          }
        }, 200)
      }

      script.onerror = () => {
        console.error(`Failed to load script: ${scriptKey}`)
        loadedScripts.delete(scriptKey)
      }
    }
  }

  const cleanupAssets = () => {
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
