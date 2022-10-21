/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const addPlugin = require('tailwindcss/plugin');

const { createScale, pxUnitToRem, addPxSuffix } = require('./tailwind.config.utils');

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
      // Create spacing scale with rem units
      ...createScale({ max: 32, steps: 1, formatVal: pxUnitToRem }),
      ...createScale({ min: 32, max: 64, steps: 2, formatVal: pxUnitToRem }),
      ...createScale({ min: 68, max: 128, steps: 4, formatVal: pxUnitToRem }),
      ...createScale({ min: 136, max: 256, steps: 8, formatVal: pxUnitToRem }),
      ...createScale({ min: 272, max: 512, steps: 16, formatVal: pxUnitToRem }),
      ...createScale({ min: 544, max: 1024, steps: 32, formatVal: pxUnitToRem }),

      // Recreate same scale but with px units
      ...createScale({ max: 32, steps: 1, formatKey: addPxSuffix }),
      ...createScale({ min: 32, max: 64, steps: 2, formatKey: addPxSuffix }),
      ...createScale({ min: 68, max: 128, steps: 4, formatKey: addPxSuffix }),
      ...createScale({ min: 136, max: 256, steps: 8, formatKey: addPxSuffix }),
      ...createScale({ min: 272, max: 512, steps: 16, formatKey: addPxSuffix }),
      ...createScale({ min: 544, max: 1024, steps: 32, formatKey: addPxSuffix }),
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'title-1': [
        pxUnitToRem(40),
        {
          lineHeight: '1.5',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        },
      ],
      'title-2': [
        pxUnitToRem(32),
        {
          lineHeight: '1.5',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        },
      ],
      'title-3': [
        pxUnitToRem(28),
        {
          lineHeight: '1.5',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        },
      ],
      'title-4': [
        pxUnitToRem(24),
        {
          lineHeight: '1.5',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        },
      ],
      'body-5': [
        pxUnitToRem(24),
        {
          lineHeight: '1.8',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'body-4': [
        pxUnitToRem(20),
        {
          lineHeight: '1.8',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'body-3': [
        pxUnitToRem(18),
        {
          lineHeight: '1.8',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'body-2': [
        pxUnitToRem(16),
        {
          lineHeight: '1.8',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'body-1': [
        '14px', // Font size is set in px to avoid shrink when on mobile, anything less than 14px would be too small
        {
          lineHeight: '1.8',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
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
    // TODO: Move to global style when stitches media query are configured
    addPlugin(function ({ addBase, theme }) {
      addBase({
        ':root': {
          fontSize: '54.6875%', // Decrease default size on mobile, useing rems it will automatically scale down all font sizes
          [`@media (min-width: ${theme('screens.md')})`]: {
            fontSize: '62.5%', // Set default size to 62.5% of 16px -> 10px, this way 1 rem -> 10px
          },
        },
      });
    }),
  ],
};
