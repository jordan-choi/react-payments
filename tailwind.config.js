const plugin = require('tailwindcss/plugin');

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
    },
    extend: {
      boxShadow: {
        default: '3px 3px 5px rgba(0, 0, 0, 0.25)',
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
