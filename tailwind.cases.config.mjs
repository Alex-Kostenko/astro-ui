/** @type {import('tailwindcss').Config} */
const customConfig = require("./tailwind.config");
export default {
  content: [
    "./src/pages/cases/**/*.{astro,html,js,jsx}",
    "./src/pages/[lang]/cases/index.astro",
    "./src/components/Sections/Cases/*.{astro,html,js,jsx}",
    "./src/components/ProjectCard/*.{astro,html,js,jsx}",
    ...customConfig.content,
  ],
  theme: {
    extend: {
      ...customConfig.theme.extend,
    },
  },
  plugins: [...customConfig.plugins],
};
