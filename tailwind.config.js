/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        neutral:{
          100:"#FFF",
          200:"#F7f8FA", 
          400:"##E0E1E5",          
          500:"#3d4043",
          600:"#2d3037",
          700:"#1c1c1c",         
          900:"#000"
        },
        accent:{          
          500:"#3FA3A6"
        },
      },
    },
  },
  plugins: [],
}

