import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [
      dts({
        tsconfig: './tsconfig.json',
      }),
      resolve(),
      external(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
    ],
    external: ['react', 'react-dom'],
  },
];
