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
    screens: {
      // => @media (min-width: 640px) { ... }

      md: "1028px",
      // => @media (min-width: 1024px) { ... }

      lg: "1200px",
      // => @media (min-width: 1280px) { ... }
      xl: "1800px",
    },

    fontFamily: {
      jakarta: ["var(--font-jakarta)", ...fontFamily.sans],
      lora: ["var(--font-lora)", "sans-serif"],
      sans: ["var(--font-jakarta)", ...fontFamily.sans],
    },
    extend: {
      boxShadow: {
        borderBlack: "inset 0 0 0 1.5px #000",
        borderYellow: "inset 0 0 0 1.5px #ffe600",
        borderWhite: "inset 0 0 0 1px #fff",
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in",
        fadeOut: "fadeOut 0.75s ease-in",
        slideInRight: "slideInRight 0.7s ease-in",
        slideInLeft: "slideInLeft 0.7s ease-in",
        fadeInHero: "fadeInHero 1.5s ease-in",
      },

      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeInHero: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.5 },
        },
        slideInRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(-40%)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(44%)" },
        },
      }),
    },
  },
  plugins: [],
};
