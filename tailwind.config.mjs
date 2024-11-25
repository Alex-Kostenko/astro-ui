/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/layouts/**/*.{astro,html,js,jsx}",
    "./src/components/Button/**/*.{astro,html,js,jsx}",
    "./src/components/Container/**/*.{astro,html,js,jsx}",
    "./src/components/Typography/**/*.{astro,html,js,jsx}",
    "./src/components/Accordion/**/*.{astro,html,js,jsx}",
    "./src/components/Footer/**/*.{astro,html,js,jsx}",
    "./src/components/Sections/Home/Hero.astro",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm1: "768px",
        sm2: "800px",
        md1: "1024px",
        lg2: "1280px",
        xl1: "1440px",
        xl2: "1600px",
        xl3: "1920px",
      },
      container: {
        center: true,
        screens: {
          xs: "414px",
          sm1: "612px",
          sm2: "700px",
          md1: "852px",
          lg2: "1092px",
          xl2: "1284px",
        },
      },
      colors: {
        brand: {
          beige: "#AE896E",
          beigeLight: "#CBB4A2",
          white: "#F3F3EF",
          black: "#171A1F",
          green: "#0A2B21",
          gray: "#939290",
        },
        green: {
          DEFAULT: "#034425",
          100: "#033D21",
          200: "#02361E",
          300: "#02301A",
          400: "#022916",
          500: "#022213",
        },
        gray: {
          DEFAULT: "#939290",
          100: "#D9D9D9",
          200: "#C2C2BF",
          300: "#AAAAA7",
          400: "#92928F",
          500: "#7A7A78",
          600: "#616160",
        },
        greenLight: {
          100: "#E6ECE9",
          200: "#CCD9D3",
          300: "#B3C6BD",
          400: "#99B3A7",
          500: "#80A091",
          600: "#669C7A",
        },
        white: {
          DEFAULT: "#fff",
        },
      },
      fontSize: {
        96: ["6rem", { lineHeight: "97px", letterSpacing: "2px" }], // 96px = 6rem, lineHeight = 1.2
        72: ["4.5rem", { lineHeight: "auto" }], // 72px
        48: ["3rem", { lineHeight: "auto" }], // 48px
        46: ["2.875rem", { lineHeight: "auto" }], // 46px = 2.875rem
        40: ["2.5rem", { lineHeight: "44px" }], // 40px = 2.5rem
        32: ["2rem", { lineHeight: "40px" }], // 32px = 2rem
        24: ["1.5rem", { lineHeight: "32px" }], // 24px = 1.5rem
        20: ["1.25rem", { lineHeight: "24px" }], // 20px = 1.25rem
        18: ["1.125rem", { lineHeight: "auto" }], // 18px = 1.125rem
        14: ["0.875rem", { lineHeight: "18px" }], // 14px = 0.875rem
        12: ["0.75rem", { lineHeight: "auto" }], // 12px = 0.75rem
        10: ["0.625rem", { lineHeight: "auto" }], // 10px = 0.625rem
      },
      fontFamily: {
        gothic: "Gothic400",
        gothic700: "Gothic700",
        asket800Condensed: "Asket800Condensed",
        asket300Extended: "Asket300Extended",
        asket800: "Asket800",
        asket300: "Asket300",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".text-stroken-green": {
          "-webkit-text-stroke": "4px #003300",
        },
      });
    },
  ],
};
