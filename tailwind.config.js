/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Defining my own custom color palette
        'turquoise': '#44ddd0',
        'green': '#27d7a1',
        'light-green': '#45f69e',
        'light': '#f8f8f8',
        'dark-green': '#006450'

        // primary color is green
        // link color will be light green
        // turquoise for heading
      },
      // fontFamily: {

      // }
    },
  },
  plugins: [],
}

