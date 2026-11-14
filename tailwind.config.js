// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.njk",
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "#191919",
        accent: "#0FA9E6",
        "accent-light": "#7FD6FF",
        "accent-soft": "#5ED9D1"
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};