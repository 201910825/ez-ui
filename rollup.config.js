import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';

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
    typescript({
      useTsconfigDeclarationDir: true, // tsconfig의 declarationDir 사용
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'runtime', // 'runtime'으로 변경
      exclude: 'node_modules/**', // node_modules 제외
    }),
    postcss({
      plugins: [tailwindcss(), autoprefixer()],
      extract: 'dist/tailwind.css',
    }),
    replace({
      'use client': '', // 'use client' 지시어 무시
      preventAssignment: true,
    }),
    copy({
      targets: [
        { src: 'lib/utils.ts', dest: 'dist/lib' }
      ]
    })
  ],
  external: ['react', 'react-dom', 'next/image', 'lucide-react', 'class-variance-authority'],
};