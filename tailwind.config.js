/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'sans': ['montserrat', 'sans-serif'],
      'serif': ['Tenor Sans', 'serif']
    },
    colors: {
      'dark': '#121117',
      'light': '#E2E2E2',
      'orange': '#FF8B14',
    },
    extend: {},
  },
  plugins: [],
}
