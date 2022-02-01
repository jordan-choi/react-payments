const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false,
  content: [],
  theme: {
    colors: {
      white: '#fff',
      gray0: '#ecebf1',
      gray1: '#e5e5e5',
      gray2: '#d3d3d3',
      gray3: '#9ca3af',
      gray4: '#575757',
      gray5: '#525252',
      gray6: '#383838',
      card: '#94dacd',
      cardchip: '#cbba64',
      ...colors,
    },
    extend: {
      boxShadow: {
        default: '3px 3px 5px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        1.6: '0.4rem',
        4.8: '1.2rem',
        5.6: '1.4rem',
        6.4: '1.6rem',
        9.6: '2.4rem',
        18: '4.5rem',
        83.2: '20.8rem',
      },
      fontSize: {
        4.8: '1.2rem',
        5.6: '1.4rem',
      },
      lineHeight: {
        5.6: '1.4rem',
        6.4: '1.6rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        fontSize: '10px',
      });
    }),
  ],
};
