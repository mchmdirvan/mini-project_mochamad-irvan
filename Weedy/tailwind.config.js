/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {
        25: "0.25",
      },
      fontFamily: {
        "pt-serif": ['"PT Serif"', "serif"],
        "outfit": ["Outfit"],
        "niconne": ["Niconne"],
        "parisienne": ["Parisienne"],
      },
    },
  },
  plugins: [require("daisyui")],
};
