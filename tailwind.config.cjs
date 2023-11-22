/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.js"

  ],
 
  theme: {
    extend: {
      colors: {
        "brand-primary": "#1148a1",
        "brand-secondary": "#b1c43b",

      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin.cjs"),
    require("daisyui"),
  ],
  darkMode: "class"
};
