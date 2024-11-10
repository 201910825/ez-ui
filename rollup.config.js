import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: false,
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [tailwindcss(), autoprefixer()],
      sourceMap: true,
    }),
    replace({
      'use client': '',
      preventAssignment: true,
    }),
    terser(),
  ],
  external: [
    'react',
    'react-dom',
    'next/image',
    'lucide-react',
    'class-variance-authority',
    'next-themes',
    'clsx',
    'tailwind-merge'
  ],
};