/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'body': ['montserrat', 'sans-serif'],
      'sans': ['montserrat', 'sans-serif'],
      'logo': ['Tenor Sans', 'montserrat', 'sans-serif']
    },
    colors: {
      'dark': '#121117',
      'light': '#E2E2E2',
      'orange': '#FF8B14',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        '3xl': '7rem',
      },
    },
    screens: {
      'xs': { 'min': '375px', 'max': '639px' },
      // => @media (min-width: 375px amd max-width:639px)
      'sm': { 'min': '640px', 'max': '768px' },
      // => @media (min-width: 640px and max-width: 768px)

      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) 

      'lg': { 'min': '1024px', 'max': '1280px' },
      // => @media (min-width: 1024px and max-width: 1280px)

      'xl': { 'min': '1280px', 'max': '2560px' },
      // => @media (min 1280px and max-width: 2560px) 

    },
    extend: {},
  },
  plugins: [],
}
