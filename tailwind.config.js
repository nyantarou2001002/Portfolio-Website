/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body : '#050505',
        "selected-text": "#A3A3FF",
        theme: "#5c318c",
        secondary: "#9191A4",
        badge: "#3F3F51",
        "custom-purple": "#9999FF",
      },
    },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    
  },
  plugins: [],
};

