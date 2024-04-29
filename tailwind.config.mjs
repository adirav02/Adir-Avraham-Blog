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
        "p-heading-sm": "2.75rem", // equivalent to 52px
      },
      maxHeight: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
