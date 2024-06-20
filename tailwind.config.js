/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
       
      },
      colors: {
        'Primary': '',
        'Secondary': '',
        'Blue': '',
        'Red': '',
        'Text': '',
      },
      fontFamily:{
        'body': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

