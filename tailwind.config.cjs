/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

      backgroundSize: {
        '100': '100%',
      },

      backgroundPosition: {
        '50': '50%',
      },

      fontFamily: {
        thin: ['Avenir Thin', 'sans-serif'],
        light: ['Avenir Light', 'sans-serif'],
        medium: ['Avenir Medium', 'sans-serif'],
        regular: ['Avenir Regular', 'sans-serif'],
        sbold: ['Avenir SemiBold', 'sans-serif'],
        ebold: ['Avenir ExtraBold', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}