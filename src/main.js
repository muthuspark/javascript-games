import { ViteSSG } from 'vite-ssg'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import routes from './router.js'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: '/'
  },
  ({ app, router, isClient }) => {
    // Create and use head management
    const head = createHead()
    app.use(head)

    // Track page views on route change
    if (isClient) {
      router.afterEach((to) => {
        // Send page view to Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('config', 'G-BH3P7R68Z6', {
            page_path: to.fullPath
          })
        }
      })
    }
  }
)
