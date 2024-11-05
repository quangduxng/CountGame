/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      screens: {
        '2xl': {'max': '1440px'},
  
        'xl': {'max': '1279px'},
  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '639px'}, 
      },
      extend: {
        colors:{
          'primary':'#0047FF',
          'white':'#FFFFFF',
          'black':'#101828',
          'gray':'#667085',
          'lightBG':'#F5F5F5'
        },
        fontFamily:{
          'inter': ['Inter']
        },
        borderRadius:{
          'm':'8px',
          'xl':'16px'
        }
      },
    },
    plugins: [],
    corePlugins: {
      preflight: false 
    },
  }