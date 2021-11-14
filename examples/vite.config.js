import {defineConfig} from 'vite'
import {createVuePlugin} from 'vite-plugin-vue2';

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin()
  ],
  build: {
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'ShaplaVueComponentsDemo',
      fileName: 'demo',
      formats:['umd']
    },
  }
})
