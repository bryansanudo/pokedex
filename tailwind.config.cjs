/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        unknow: "#757575",

        primary: "#006d77",
        primaryHover: "#83c5be",
      },
    },
  },
  plugins: [],
};
