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
    target: "es2015",
    outDir: "docs",
    lib: {
      entry: path.resolve(__dirname, 'docs-src/main.js'),
      formats: ["umd"],
      name: 'ShaplaComponent',
      fileName: 'docs-script',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if ( "style.css" === assetInfo.name ) {
            return "docs-style.css";
          }
          return assetInfo.name;
        },
      },
    },
  }
})
