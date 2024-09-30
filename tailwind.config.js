/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',  // app 디렉토리
    './src/pages/**/*.{js,ts,jsx,tsx}',  // src 디렉토리의 pages
    './src/components/**/*.{js,ts,jsx,tsx}',  // src 디렉토리의 components
    './src/app/**/*.{js,ts,jsx,tsx}',  // src 디렉토리의 app
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
};