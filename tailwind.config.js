/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5AB29',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: []
}
