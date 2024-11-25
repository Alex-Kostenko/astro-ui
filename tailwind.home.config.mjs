/** @type {import('tailwindcss').Config} */
const customConfig = require("./tailwind.config");
export default {
  content: [
    "./src/pages/index.astro",
    "./src/pages/[lang]/index.astro",
    "./src/components/Sections/Home/*.{astro,html,js,jsx}",
    "./src/components/ProjectCard/*.{astro,html,js,jsx}",
    "./src/components/Comment/*.{astro,html,js,jsx}",
    ...customConfig.content,
  ],
  theme: {
    extend: {
      ...customConfig.theme.extend,
    },
  },
  plugins: [...customConfig.plugins],
};
