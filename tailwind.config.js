/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        "primary-dark-rgb": "rgb(0, 20, 31)",
        "primary-color-rgb": "rgb(0, 170, 255)",
        "primary-light-rgb": "rgb(209, 240, 255)",
        "success": "rgb(0, 255, 0)",
        "error": "rgb(255, 0, 0)",
        
      },


    },
  },
  plugins: [],
}

