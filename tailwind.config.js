/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      width: {
               '1/10': '10%',
               '2/10': '20%',
               '3/10': '30%',
               '4/10': '40%',
               '5/10': '50%',
               '6/10': '60%',
      },
    },
  },
  plugins: [],
}
