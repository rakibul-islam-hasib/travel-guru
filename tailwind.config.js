/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero-pattern': "url('./src/assets/Rectangle1.png')",
      },
      colors : { 
        'primary' : '#F9A51A',
      }
    },
  },
  plugins: [],
}