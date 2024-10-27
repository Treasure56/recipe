/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: '#41C1A6',
          light: '#E5FAF4',
          300: '#EAE5FA'
        },
        light:{
          DEFAULT: '#FFFFFF',
          light: '#F5D9CB',
          200: '#F5F7FA',
          300: '#FAE5EC'
        },
        secondary:{
          DEFAULT: '#FFCE5D',
          dark: '#222E57',
        },
        dark:{
          DEFAULT: '#000000',
        }
      },
      
    },
  },
  plugins: [],
}

