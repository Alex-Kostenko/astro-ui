/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/layouts/**/*.{astro,html,js,jsx}",
    "./src/components/Button/**/*.{astro,html,js,jsx}",
    "./src/components/Container/**/*.{astro,html,js,jsx}",
    "./src/components/Typography/**/*.{astro,html,js,jsx}",
    "./src/components/Accordion/**/*.{astro,html,js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        // xs
        xs: "0px",
        //sm
        sm1: "768px",
        sm2: "800px",
        //md
        md1: "1024px",
        //lg
        lg2: "1280px",
        // xl
        xl1: "1440px",
        // 2xl
        xl2: "1600px",
        // 3xl
        xl3: "1920px",
      },
      container: {
        center: true,
        screens: {
          // xs
          xs: "414px",
          sm1: "612px",
          sm2: "700px",
          //md
          md1: "852px",
          //lg
          lg2: "1092px",
          // 2xl
          xl2: "1284px",
        },
      },
      colors: {
        coal: "#171A1F",
        biscuit: "#F3F3EF",
        brown: {
          DEFAULT: "#CBB4A2",
        },
        green: {
          DEFAULT: "#034425",
          100: "#033D21",
          200: "#02361E",
          300: "#02301A",
          500: "#022213",
        },
        greenLight: { 200: "#CCD9D3" },
        wooden: {
          DEFAULT: "#AE896E",
        },
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.3" }], // 48px = 3rem
        h3: ["4.5rem", { lineHeight: "1.3" }], // 72px
        h6: ["6rem", { lineHeight: "1.2" }], // 96px = 6rem, lineHeight = 1.2
        title9: ["2.875rem", { lineHeight: "1.2" }], // 46px = 2.875rem
        title6: ["2.5rem", { lineHeight: "1.3" }], // 40px = 2.5rem
        title2: ["2rem", { lineHeight: "1.4" }], // 32px = 2rem
        subTitle1: ["1.5rxem", { lineHeight: "1.5" }], // 24px = 1.5rem
        body4: ["1.25rem", { lineHeight: "1.6" }], // 20px = 1.25rem
        body3: ["1.125rem", { lineHeight: "1.6" }], // 18px = 1.125rem
        body1: ["0.875rem", { lineHeight: "1.6" }], // 14px = 0.875rem
        label4: ["0.75rem", { lineHeight: "1.7" }], // 12px = 0.75rem
        label3: ["0.625rem", { lineHeight: "1.7" }], // 10px = 0.625rem
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".text-stroken-green": {
          "-webkit-text-stroke": "4px #003300",
        },
      });
    },
  ],
};
