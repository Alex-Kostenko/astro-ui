/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/services/index.astro",
    "./src/pages/[lang]/services/index.astro",
  ],

  theme: {
    extend: {},
  },
};
