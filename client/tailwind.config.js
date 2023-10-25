/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "680px",
        "md": "768px",
        "lg": "1024px",
        "xl":"1280px"
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

// screens: {
//   "sm": "680px",
//   "md": "768px",
//   "lg": "1024px",
//   "xl":"1280px"
// }