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
        "theme" : "#FFA500",
        "theme-alt" : "#3406b3",
        "theme-h" : "#FFA5007"
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

