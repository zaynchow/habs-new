/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      yellow: "#ffe600",
      black: "#000000",
      blue: "#0C0F26",
    },

    fontFamily: {
      jakarta: ["var(--font-jakarta)", ...fontFamily.sans],
      lora: ["var(--font-lora)", "sans-serif"],
      sans: ["var(--font-jakarta)", ...fontFamily.sans],
    },
  },
  plugins: [],
};
