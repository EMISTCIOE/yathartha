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
        "theme-white" : "#ffffff",
        "theme-red" : "#8B1E3F",
        "theme-h" : "#FF9F1C77"
      },
      fontFamily : 
      {
        "roboto-slab" : ["Roboto Slab", "Roboto", "Open Sans"],
        "archivo-narrow" : ["Archivo Narrow", "Roboto"],
        "bebas-neue" : ["Bebas Neue", "Open Sans"]
      }
    },
  },
  plugins: [],
}

