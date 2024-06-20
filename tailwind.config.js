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
        customColor: '#3fa3a6', // Add your custom color
      },
      fontFamily:{
        'body': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

