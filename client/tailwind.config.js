/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: () => ({
        '9/10': '90%'
      }),
      width: () => ({
        '9/10': '90%'
      }),
      fontFamily: {
        digital: ['digital', 'sans-serif'],
        Quicksand: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}