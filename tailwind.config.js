/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sky: {
          600: '#0284c7', // You can replace with your preferred color for dark mode
        },
        gray: {
          800: 'black', // Dark background color for dark mode
        },
      },
    },
  },
  plugins: [],
}

