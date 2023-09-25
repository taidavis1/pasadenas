/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    plugins: [require("tw-elements/dist/plugin.cjs")],
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
      extend: {
        fontFamily: {
          'new-font': ['Open Sans', 'sans-serif'],
          'new-2-font': ['Satisfy' , 'cursive'],
          'lato': ['Lato', 'sans-serif'],
          'Roboto': ['Roboto Serif' , 'serif'],
          'Freehand': ['Freehand' , 'cursive'],
          'Poppins': ['Poppins' , 'sans-serif'],
          'Abril': ['Abril Fatface' , 'cursive'],
          'Rouge': ['Rouge Script','cursive'],
          'Han-Sans': ['Black Han Sans', 'sans-serif'],
          'Monterast' :['Montserrat',' sans-serif'],
          'Gruppo': ['Gruppo', 'sans-serif'],
          'PlayFair': ['Playfair Display', 'serif'],
        },
        colors:{
          'ser-color': '#ffe4b0',
          'gold': '#ffd700',
        },
      },
    },
}