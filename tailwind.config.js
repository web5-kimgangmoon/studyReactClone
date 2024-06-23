/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xl: "1280px",
    },
    extend: {
      // backgroundImage: {
      //   "bg-top": "url('src/imgs/bg_top.png')",
      // },
    },
  },
  plugins: [],
};
