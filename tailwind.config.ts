import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white': '#f5f5f0',
        'primary': '#f5f5f0',
        'primary-dark': '#e8e8e0',
        'primary-darker': '#d1d1c8',
        'card': '#ffffff',
      },
      colors: {
        accent: {
          DEFAULT: '#6495ed', // rgb(100, 149, 237)
          dark: '#5081d9',    // rgb(80, 129, 217)
          light: '#78a9f7',   // rgb(120, 169, 247)
        },
        'beige': {
          light: '#f5f5f0',
          DEFAULT: '#e8e8e0',
          dark: '#d1d1c8',
          darker: '#5c5c56',
        },
        'text': {
          light: '#9a9a94',
          DEFAULT: '#5c5c56',
          dark: '#403e3a',
          darker: '#2a2826',
        },
      },
      textColor: {
        'on-dark': '#403e3a',
      },
    },
  },
  plugins: [],
};

export default config; 