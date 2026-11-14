/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,html,md,js}",
    "./src/_includes/**/*.{njk,html}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#191919",
        primary: "#191919",
        accent: {
          DEFAULT: "#0FA9E6",
          primary: "#0FA9E6",
          light: "#7FD6FF",
          soft: "#5ED9D1"
        }
      },
      fontFamily: {
        heading: ["'Playfair Display'", "Georgia", "serif"],
        body: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"]
      },
      scale: {
        '102': '1.02'
      },
      transitionTimingFunction: {
        'bounce-subtle': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
};
