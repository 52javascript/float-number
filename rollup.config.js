const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const path = require('path')
const { eslint } = require('rollup-plugin-eslint') // eslint插件
const ts = require('rollup-plugin-typescript2')
const getPath = _path => path.resolve(__dirname, _path)
const packageJSON = require('./package.json')

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
    }),
    ts({
      tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
      extensions: ['ts']
    }),
    eslint({
      throwOnError: true,
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**', 'test/**']
    })
  ],
  watch: {
    include: 'src/**'
  }
}
