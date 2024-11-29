/** @type {import('tailwindcss').Config} */
const customConfig = require("./tailwind.config");
export default {
  content: [
    "./src/pages/**/cases/**/*.{astro,html,js,jsx}",
    "./src/components/Sections/Cases/*.{astro,html,js,jsx}",
    "./src/components/ProjectCard/*.{astro,html,js,jsx}",
    "./src/components/Link/*.{astro,html,js,jsx}",
    "./src/components/Pagination/*.{astro,html,js,jsx}",
    ...customConfig.content,
  ],
  theme: {
    extend: {
      ...customConfig.theme.extend,
    },
  },
  plugins: [...customConfig.plugins],
};
