const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  flowbite.content()

],
  
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'navcolour':'#2D9596',
        'titleblue':'#11009E',
        'crystalteal':'#006883',
        'icyteal':'#B5C4C0',
        'herodiv':'#071952',
        /* 'bluetheme':'#E8FFFF', */
        'bluetheme':'white',
        'darkbluetheme':'#161D6F',
        'red':'#ff0000',
        'greentheme':'#00DFA2',
        'cards':'#FFE5E5',
        'footer':'#001E6C',
        'navtitle':'#47B5FF',
       'tealtext':'#37B7C3', 
       'yellowfooter':'#FFCD4B',
       'yellowtheme':'#FF4B91',
        'goldtheme':'#FFEA20',

      },

       backgroundImage: {
        'background1':"url('https://68.media.tumblr.com/c40636a5a0d4aa39c335c8db40d2144f/tumblr_omc7z7Xv8N1slhhf0o1_1280.jpg')",
        'team_work':"url('/src/images/42631.jpg')"
      },
      


      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      },

      

      
    },
    
  },
  plugins: [require('flowbite/plugin'),
  /* require('tailwind-scrollbar-hide'), */
  flowbite.plugin(),
],
}