/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
    
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Raleway','sans-serif'],
    },
  },
  plugins: [],
}

