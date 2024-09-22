/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 .5em 1em -.125em rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .02)",
      },
      colors: {
        charcoalGray: "#454545",
        gondola: "#363636",
        darkGray: "#4a4a4a",
        whitesmoke: "#F5F5F5",
      },
    },
  },

  plugins: [],
};
