/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4EABBA',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: []
}
