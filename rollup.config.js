const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
// const path = require('path')

module.exports = {
  input: './src/index.js',
  output: {
    file: './dist/float-number.min.js',
    format: 'cjs'
  },
  plugins: [ // 增加 plugins
    commonjs(),
    babel({
      exclude: 'node_modules/**' // 不对node_modules进行编译
    })
  ]
}