/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

const { createScale, pxUnitToRem, addPxSuffix, unitToPx, withOpacity } = require('./tailwind.config.utils');

module.exports = {
  theme: {
    colors: {
      white: {
        DEFAULT: withOpacity('var(--colors-white)'),
      },
      black: {
        DEFAULT: withOpacity('var(--colors-black)'),
      },
      grey: {
        lightest: withOpacity('var(--colors-grey-lightest)'),
        light: withOpacity('var(--colors-grey-light)'),
        dark: withOpacity('var(--colors-grey-dark)'),
        darkest: withOpacity('var(--colors-grey-darkest)'),
      },
      yellow: {
        DEFAULT: withOpacity('var(--colors-yellow)'),
      },
      pink: {
        DEFAULT: withOpacity('var(--colors-pink)'),
      },
      transparent: 'transparent',
      current: 'currentColor',

      theme: {
        body: 'var(--colors-body)',
      },
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
      ...createScale({ max: 32, steps: 1, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 32, max: 64, steps: 2, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 68, max: 128, steps: 4, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 136, max: 256, steps: 8, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 272, max: 512, steps: 16, formatKey: addPxSuffix, formatVal: unitToPx }),
      ...createScale({ min: 544, max: 1024, steps: 32, formatKey: addPxSuffix, formatVal: unitToPx }),
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
    borderRadius: {
      none: '0',
      sm: '6px',
      md: '8px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-yellow': 'var(--gradient-yellow)',
        'gradient-pink': 'var(--gradient-pink)',
        'gradient-grey': 'var(--gradient-grey)',
        'gradient-grey-dark': 'var(--gradient-grey-dark)',
      },
    },
  },
};
