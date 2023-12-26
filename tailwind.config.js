/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : 
      {
        "theme" : "#FF9F1C",
        "theme-green" : "#95B46A",
        "theme-black" : "#000500",
        "theme-black-alt" : "#202020",
        "theme-white" : "#ffffff",
        "theme-red" : "#8B1E3F",
        "theme-h" : "#FF9F1C77"
      },
      fontFamily : 
      {
        "roboto-slab" : ["Roboto Slab", "Roboto", "Open Sans"],
        "archivo-narrow" : ["Archivo Narrow", "Roboto"],
        "bebas-neue" : ["Bebas Neue", "Open Sans"]
      },
      animation: {
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

