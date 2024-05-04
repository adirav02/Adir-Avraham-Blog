/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Prata", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      screens: {
        "2xl": "1344px",
        xl: "1200px",
        lg: "944px",
        md: "704px",
        sm: "544px",
      },
      outline: {
        blue: "2px dotted #4263eb",
      },
      fontSize: {
        "p-heading": "3.25rem", // equivalent to 52px
        "p-heading-sm": "2.75rem",
        "32px": "2rem",
        "10xl": "10rem",
      },
      maxHeight: {
        "1/2": "50%",
      },
      maxWidth: {
        article: "850px",
        500: "500px",
      },
    },
    letterSpacing: {
      wider: "0.05em",
      widest: "0.1em",
      heading: "-0.5px",
      subheading: "0.75px",
    },
    maxWidth: {
      "3/4": "75%",
      96: "24rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
