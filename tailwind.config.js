/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF7F0',
        warmwhite: '#FFFDF9',
        champagne: '#E8D9B5',
        beige: '#F1E7D8',
        gold: '#C6A15B',
        blush: '#EAC7C2',
        burgundy: {
          DEFAULT: '#6B1E2B',
          dark: '#511420',
          light: '#8A2E3D',
        },
        charcoal: '#2B2420',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        wideish: '0.08em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
