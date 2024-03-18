/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pri: '#13FFF9',
        sec: '#08A6FF'
      }
    }
  },
  plugins: []
}
