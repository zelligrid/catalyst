// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern Sapphire Palette
        sapphire: {
          DEFAULT: '#155EEF', // The main Blue
          dark: '#004EEB',
        },
        accent: '#FF5A1F', // The Orange for CTAs
        dark: '#000000', // Black
        light: '#FFFFFF', // White
        offwhite: '#F8F9FA',
      },
    },
  },
  plugins: [],
}
