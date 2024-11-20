/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'purple-button': '#90267A',
        'test-back': '#9747FF',
        'footer-back': '#CA3BAC',
        'line': '#E645C4'
      },
      backgroundImage: {
        'home-page': "url('/public/Background1.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

