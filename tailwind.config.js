/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html'], // instance write index.html we write *.html this means in dist folder all html file's
  theme: {
    extend: {
      screens: {
        'xxsm' : '210px',
        'xsm': '460px', // extra small
        'xmd' : '900px' // extra medium
      },
      rotate :{
        '360' : '360deg',
      }
    },
  },
  plugins: [],
}

