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
      shadow: 'rgba(0, 0, 0, 0.25)',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        fontSize: '10px',
      });
    }),
  ],
};
