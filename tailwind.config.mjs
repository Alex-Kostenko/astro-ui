/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      zIndex: {
        header: '1010',
        headerMenu: '1000',
      },
      screens: {
        xs: '360px',
        sm: '480px',
        lg: '960px',
        '2xl': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          md: '78px',
          lg: '78px',
          '2xl': '130px',
        },
        screens: {
          xs: 'auto',
          sm: '480px',
          md: '768px',
          lg: '960px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      colors: {
        brand: {
          beige: '#AE896E',
          beigeLight: '#CBB4A2',
          white: '#F3F3EF',
          black: '#171A1F',
          green: '#0A2B21',
          gray: '#939290',
        },
        green: {
          DEFAULT: '#034425',
          100: '#033D21',
          200: '#02361E',
          300: '#02301A',
          400: '#022916',
          500: '#022213',
        },
        red: {
          DEFAULT: '#DE0D0D',
        },
        gray: {
          DEFAULT: '#939290',
          100: '#D9D9D9',
          200: '#C2C2BF',
          300: '#AAAAA7',
          400: '#92928F',
          500: '#7A7A78',
          600: '#616160',
          700: '#2B2638',
        },
        greenLight: {
          100: '#E6ECE9',
          200: '#CCD9D3',
          300: '#B3C6BD',
          400: '#99B3A7',
          500: '#80A091',
          600: '#669C7A',
        },
        white: {
          DEFAULT: '#fff',
        },
        black: {
          DEFAULT: '#000',
          100: '#232528',
        },
      },
      fontSize: {
        96: ['6rem', { lineHeight: '97px', letterSpacing: '2px' }], // 96px = 6rem, lineHeight = 1.2
        72: ['4.5rem', { lineHeight: '73px' }], // 72px
        64: ['4rem', { lineHeight: '65px' }], // 64px
        48: ['3rem', { lineHeight: '48px' }], // 48px
        46: ['2.875rem', { lineHeight: 'auto' }], // 46px = 2.875rem
        40: ['2.5rem', { lineHeight: '44px' }], // 40px = 2.5rem
        36: ['2.25rem', { lineHeight: '37px' }], // 36px = 2.25rem
        32: ['2rem', { lineHeight: '40px' }], // 32px = 2rem
        24: ['1.5rem', { lineHeight: '32px' }], // 24px = 1.5rem
        20: ['1.25rem', { lineHeight: '24px' }], // 20px = 1.25rem
        18: ['1.125rem', { lineHeight: 'auto' }], // 18px = 1.125rem
        16: ['1rem', { lineHeight: '20px' }], // 16px = 1rem
        14: ['0.875rem', { lineHeight: '18px' }], // 14px = 0.875rem
        12: ['0.75rem', { lineHeight: 'auto' }], // 12px = 0.75rem
        10: ['0.625rem', { lineHeight: 'auto' }], // 10px = 0.625rem
      },
      fontFamily: {
        gothic: 'Gothic400',
        gothic700: 'Gothic700',
        asket800Condensed: 'Asket800Condensed',
        asket300Extended: 'Asket300Extended',
        asket800: 'Asket800',
        asket300: 'Asket300',
        commissioner: 'Commissioner',
      },
      letterSpacing: {
        0.8: '0.8px',
        1: '1px',
        2: '2px',
        tight: 1.25,
      },
      keyframes: {
        toastLeft: {
          '0%': { transform: 'translateX(120%)' },
          '100%': { transform: 'translateX(0)' },
        },
        toastRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        toastLeft: 'toastLeft .2s ease-in-out forwards',
        toastRight: 'toastRight .2s ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-stroken-green-2': {
          '-webkit-text-stroke': '2px #003300',
          color: 'transparent',
        },
        '.text-stroken-green-3': {
          '-webkit-text-stroke': '3px #003300',
          color: 'transparent',
        },
        '.text-stroken-green-4': {
          '-webkit-text-stroke': '4px #003300',
          color: 'transparent',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.transform-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.rotate-y-360': {
          transform: 'rotateY(360deg)',
        },
      });
    },
  ],
};
