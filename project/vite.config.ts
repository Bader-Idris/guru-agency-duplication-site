import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import postcssFocus from 'postcss-focus'
// import postcssEpub from 'postcss-epub'
// import postcssUnprefix from 'postcss-unprefix'

// import { vite as vidstack } from 'vidstack/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue({
    //   template: {
    //     compilerOptions: {
    //       isCustomElement: (tag) => tag.startsWith('media-')
    //     }
    //   }
    // }),
    // vidstack({ include: /player\// })
    // vidstack()
    vue()
  ],
  //? changed it for allowing "vidstack/vue" instead of  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/main.scss";`
      }
    },
    postcss: {
      plugins: [
        // postcssUnprefix(), // Use postcss-unprefix
        // postcssEpub(), // Use postcss-epub
        postcssFocus(), // Include postcss-focus
        autoprefixer({
          // Adjust the browsers list to support the last 4 years of browsers
          overrideBrowserslist: [
            'last 6 versions', // Support the last 6 versions of all browsers
            'not dead', // Exclude browsers that are no longer maintained
            'not < 1%', // Exclude browsers with less than 1% market share
            'Firefox >= 59',
            'Safari >= 10.1'
          ],
          grid: 'autoplace',
          flexbox: 'no-2009',
          cascade: false
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'es2018' // Set the target to es2018
  }
})
