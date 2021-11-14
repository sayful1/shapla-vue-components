import {defineConfig} from 'vite'
import {createVuePlugin} from 'vite-plugin-vue2';

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin()
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ShaplaButton',
      fileName: 'button',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
