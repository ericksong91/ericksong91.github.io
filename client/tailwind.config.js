/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "680px"
      },
      spacing: {
        "big": "48rem"
      }
    },
    fontFamily:{
      nunito: ['Nunito', 'sans-serif']
    },
  },
  plugins: [],
}

