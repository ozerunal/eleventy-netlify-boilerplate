/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      padding: {
        '20': '80px',
      }
    },
  },
  plugins: [],
}
