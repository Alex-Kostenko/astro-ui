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
        xs1: "360px",
        xs2: "375px",
        xs3: "414px",
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
          xs1: "328px",
          xs2: "343px",
          xs3: "382px",
          //sm
          sm1: "704px",
          sm2: "736px",
          //md
          md1: "960px",
          //lg
          lg2: "1216px",
          // xl
          xl1: "1376px",
          // 2xl
          xl2: "1536px",
          // 3xl
          xl3: "1680px",
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
        h6: ["6rem", { lineHeight: "1.2" }], // 96px = 6rem, lineHeight = 1.2
        title9: ["2.875rem", { lineHeight: "1.2" }], // 46px = 2.875rem
        title6: ["2.5rem", { lineHeight: "1.3" }], // 40px = 2.5rem
        title2: ["2rem", { lineHeight: "1.4" }], // 32px = 2rem
        subTitle1: ["1.5rem", { lineHeight: "1.5" }], // 24px = 1.5rem
        body4: ["1.25rem", { lineHeight: "1.6" }], // 20px = 1.25rem
        body3: ["1.125rem", { lineHeight: "1.6" }], // 18px = 1.125rem
        body1: ["0.875rem", { lineHeight: "1.6" }], // 14px = 0.875rem
        label4: ["0.75rem", { lineHeight: "1.7" }], // 12px = 0.75rem
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".body-2": {
          fontFamily: "Century Gothic",
          fontSize: "16px",
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.normal"),
          color: theme("colors.coal"),
        },
        ".body-4": {
          fontFamily: "Century Gothic",
          fontSize: "20px",
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.normal"),
          color: theme("colors.coal"),
        },
        ".text-stroken-green": {
          "-webkit-text-stroke": "4px #003300",
        },
      });
    },
  ],
};
