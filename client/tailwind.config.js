/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "680px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px"
      },
      spacing: {
        "big": "48rem"
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-5deg)" },
        "50%": { transform: "rotate(5deg)" }
      }
    },
    animation: {
      wiggle: "wiggle 200ms ease-in-out"
    }
  },
  plugins: [],
}

// screens: {
//   "sm": "680px",
//   "md": "768px",
//   "lg": "1024px",
//   "xl":"1280px"
// }