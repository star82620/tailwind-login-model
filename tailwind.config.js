/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "rgb(0, 20, 31)",
        "primary-color": "rgb(0, 170, 255)",
        "primary-light": "rgb(209, 240, 255)",
        "success": "rgb(0, 255, 0)",
        "error": "rgb(255, 0, 0)",
        
      },
      backgroundImage: {
        "full-page-image": 'url("../img/BG2.JPG")',
      },
      boxShadow: {
        "line": "0 0 0 1px",

      },
      spacing: {
        "640px": "40rem",
      },
    },
  },
  plugins: [],
}

