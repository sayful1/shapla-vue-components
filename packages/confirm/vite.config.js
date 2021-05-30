import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ShaplaConfirm',
      fileName: 'confirm',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue', '@shapla/vue-button', '@shapla/vue-modal'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          '@shapla/vue-button': 'ShaplaButton',
          '@shapla/vue-modal': 'ShaplaModal'
        }
      }
    }
  }
})
