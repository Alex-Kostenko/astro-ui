/** @type {import('tailwindcss').Config} */
const customConfig = require("./tailwind.config");
export default {
  content: [
    "./src/pages/cases/index.astro",
    "./src/pages/[lang]/cases/index.astro",
    "./src/components/Sections/Home/*.{astro,html,js,jsx}",
    ...customConfig.content,
  ],
  theme: {
    extend: {
      ...customConfig.theme.extend,
    },
  },
  plugins: [...customConfig.plugins],
};
