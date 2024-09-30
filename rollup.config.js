import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    postcss({
      plugins: [tailwindcss(), autoprefixer()],
      extract: 'dist/tailwind.css',
    }),
    replace({
      'use client': '', // 'use client' 지시어 무시
      preventAssignment: true,
    }),
  ],
  external: ['react', 'react-dom', 'next/image', 'lucide-react', 'class-variance-authority'],
};