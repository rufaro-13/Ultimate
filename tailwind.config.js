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
        'titleblue':'#006769',
        'crystalteal':'#006883',
        'icyteal':'#B5C4C0',
        'herodiv':'#071952',
        /* 'bluetheme':'#E8FFFF', */
        'bluetheme':'white',
        'darkbluetheme':'#003C43',
        'red':'#ff0000',
        'greentheme':'#00DFA2',
        'cards':'#FFE5E5',
        'footer':'#1A5319',
       'tealtext':'#37B7C3', 
       'yellowfooter':'#FFCD4B',
       'yellowtheme':'#FF4B91',
        'goldtheme':'#FFEA20',

      },

      /* backgroundImage: {
        'hero_pattern':"url('/src/images/52616.jpg')",
        'team_work':"url('/src/images/2151231479.jpg')",
        'social':"url('/src/images/senior-women-celebrating-friendship-park.jpg')",
        'personal':"url('/src/images/adult-male-waiting-recovery-session-start.jpg')",
        'doctor':"url('/src/images/42682.jpg')",
        'hands':"url('/src/images/2149019283.jpg')",
        'close':"url('/src/images/garden.jpg')",
        'garden':"url('/src/images/2151462944.jpg')",
        'hands1':"url('/src/images/2147664205.jpg')",
        'doctor1':"url('/src/images/2151224184.jpg')",
        'activities':"url('/src/images/70840.jpg')",
        'hiking':"url('/src/images/4521.jpg')",
        'cycling':"url('/src/images/2150816067.jpg')",
        'contacts':"url('/src/images/34665942_5_123dasa1.jpg')",
        'fishing':"url('/src/images/2147894120.jpg')",
        'sports':"url('/src/images/2149451025.jpg')",
      }, */
      


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