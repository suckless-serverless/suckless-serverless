import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/suckless-serverless.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/suckless-serverless.ems.js',
      format: 'esm'
    },
    {
      name: 'SucklessServerless',
      file: 'dist/suckless-serverless.umd.js',
      format: 'umd'

    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    production && terser()
  ]
}
