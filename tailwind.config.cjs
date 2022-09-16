/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light": "#F5F6FA",
        "purple": "#5358B6",
        "dark-overlay": "#00000020",
      },
    },
  },
  plugins: [],
};
