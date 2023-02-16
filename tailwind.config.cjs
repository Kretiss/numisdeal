const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      yellow: {
        DEFAULT: '#C58511',
      },
      black: '#000000',
      dark: '#1B2124',
      grey: {
        darker: '#8D9091',
        DEFAULT: '#CCCCCC',
      },
      white: {
        darker: '#EFEFEF',
        DEFAULT: '#FFFFFF',
        lighter: '#F9F9F9',
      },
    },
    fontFamily: {
      regular: ['RedHatDisplay Regular'],
      medium: ['RedHatDisplay Medium'],
      semibold: ['RedHatDisplay SemiBold'],
      bold: ['RedHatDisplay Bold'],
    },
    //For extending existing tailwind configurations
    // extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: "2.5rem", fontFamily: theme("fontFamily.bold") },
        'h2': { fontSize: "2rem", fontFamily: theme("fontFamily.bold") },
        // 'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
