/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#113e21',    // Dark Green
        secondary: '#B38B59',  // Light Brown
        textbg: '#F0F0F0',     // Light Grey
        whitebg: '#FEFEFE',    // White
        // Add more colors as needed
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

