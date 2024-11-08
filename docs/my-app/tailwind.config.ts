import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './public/index.html',
    './node_modules/@easymean/ez-ui/**/*.{js,jsx,ts,tsx}', // 추가
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
} satisfies Config;
