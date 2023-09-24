/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '15px',
      base: '18px',
      xl: '20px',
      '2xl': '25px',
      '3xl': '32px',
      '4xl': '46px',
      '5xl': '58px',
      'xs': '11px',
    },
    
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1042px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '416px'},
      // => @media (max-width: 639px) { ... }

      '2xs': {'max': '355px'},
      // => @media (max-width: 639px) { ... }
    },  


    extend: {
      colors: {
        "primary-100" : "#b81101",
        "primary-200": "#db3130",
        "primary-300": "#ffc665",
      },      
      fontFamily: {
        'Scrivano' : ['scrivano', 'serif'],
        'Hypatia' : ['hypatia-sans-pro', 'sans-serif'],
        'Inter' : ['Open Sans', 'sans-serif'],
        'Bagatela' : ["bagatela", 'serif']
        
      },
      borderWidth:{
        'xs': '0.0925rem'
      },
      screens: {
        '2xs': {'max': '385px'},
        '2md': {'max': '850px'},
        // => @media (max-width: 639px) { ... }
      },  
    },
  },
  plugins: [],
};

 