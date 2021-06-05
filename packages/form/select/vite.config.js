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
      name: 'ShaplaSelect',
      fileName: 'select',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["vue", "@shapla/vue-chip", "@shapla/vue-cross", "@shapla/vue-dropdown", "@shapla/vue-input"],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          "vue": "Vue",
          "@shapla/vue-chip": "ShaplaChip",
          "@shapla/vue-cross": "ShaplaCross",
          "@shapla/vue-dropdown": "ShaplaDropdown",
          "@shapla/vue-input": "ShaplaInput",
        }
      }
    }
  }
})
