// import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
export default {
    input: 'src/lib/bridge/index.js',
    output: {
      file: 'lib/bridge.min.js',
      format: 'umd',
      name: 'GTJABridge'
    },
    plugins:[
      // resolve(),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
        plugins: ["@babel/external-helpers"],
        externalHelpers: true
      }),
      uglify({
        compress: {
          drop_console: true
        }
      })
    ]
  };