import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import del from 'rollup-plugin-delete'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/theme.js',
    format: 'esm'
  },
  plugins: [
    del({targets: 'dist/*.js', hook: 'buildEnd', runOnce: true}),
    scss({outputStyle: 'compressed', processor: () => postcss([autoprefixer()])}),
  ]
}
