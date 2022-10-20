// eslint-disable-next-line @typescript-eslint/no-var-requires
const addPlugin = require('tailwindcss/plugin');

const BASE_FONT_SIZE_PX = 10;

/* Utils */
const noop = (val) => val;
const unitToRem = (val) => `${val}rem`;
const pxToRem = (val) => val / BASE_FONT_SIZE_PX;
const pxUnitToRem = (val) => unitToRem(pxToRem(val));

const createScale = ({ min = 0, max = 100, steps = 1, formatVal = noop, formatKey = noop }) => {
  const limit = Math.round((max - min) / steps);
  const scale = [...new Array(limit + 1)].map((_, i) => min + i * steps);

  return scale.reduce((prev, curr) => {
    const key = String(formatKey(curr));
    const val = curr === 0 ? curr : formatVal(curr);
    return { ...prev, [key]: val };
  }, {});
};

module.exports = {
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#151515',
      },
      grey: {
        lightest: '#FBFBFB',
        light: '#F0F0F0',
        dark: '#343434',
        darkest: '#202020',
      },
      yellow: {
        DEFAULT: '#FFD84D',
      },
      pink: {
        DEFAULT: '#FF5E48',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
    spacing: {
      ...createScale({ max: 32, steps: 1, formatVal: pxUnitToRem }),
      ...createScale({ min: 32, max: 64, steps: 2, formatVal: pxUnitToRem }),
      ...createScale({ min: 68, max: 128, steps: 4, formatVal: pxUnitToRem }),
      ...createScale({ min: 136, max: 256, steps: 8, formatVal: pxUnitToRem }),
      ...createScale({ min: 272, max: 512, steps: 16, formatVal: pxUnitToRem }),
      ...createScale({ min: 544, max: 1024, steps: 32, formatVal: pxUnitToRem }),
    },
    // Font Family
    // Font Size
    // Font Weight
    extend: {
      backgroundImage: {
        'gradient-yellow': 'linear-gradient(90deg, #FFD84D 0%, #FF9446 100%);',
        'gradient-pink': 'linear-gradient(90deg, #FF5942 0%, #FFB0A6 100%);',
        'gradient-grey': 'linear-gradient(90deg, #FFFFFF 0%, #C7C7C7 100%);',
        'gradient-grey-dark': 'linear-gradient(90deg, #686868 1.59%, #202020 100%);',
      },
    },
  },
  plugins: [
    addPlugin(function ({ addBase }) {
      addBase({
        ':root': {
          fontSize: '62.5%',
        },
      });
    }),
  ],
};
