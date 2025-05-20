/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'easya': {
          primary: '#4D61FC',
          hover: '#3D4FE7'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};