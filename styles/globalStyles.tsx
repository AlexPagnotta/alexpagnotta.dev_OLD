import tw, { globalStyles } from 'twin.macro';

import { globalCss } from '../stitches.config';

import animation from './animation';
import colors from './colors';
import themeDark from './themes/dark';
import themeLight from './themes/light';

const customStyles = {
  ':root': {
    ...themeLight,
    ...themeDark,
    ...colors,
    ...animation,

    fontSize: '54.6875%', // Decrease default size on mobile, using rems it will automatically scale down all font sizes
    '@md': {
      fontSize: '62.5%', // Set default size to 62.5% of 16px -> 10px, this way 1 rem -> 10px
    },
  },

  // Reset
  '*': {
    ...tw`m-0`,
  },
  'html, body, #__next': {
    ...tw`h-full`,
  },
  'html > body': {
    ...tw`bg-theme-colors-body antialiased font-sans text-body-3 text-theme-colors-text-primary`,
    transitionProperty: 'background, color',
    transitionDuration: 'var(--animation-mode-duration)',
    transitionTimingFunction: 'var(--animation-mode-function)',
  },

  // Focus outline

  // Disable focus outline when focus comes from mouse/touch interactions
  ':focus:not(:focus-visible)': {
    ...tw`outline-none`,
  },

  // Custom style for keyboard interaction focus
  ':focus-visible': {
    ...tw`outline-none ring-4 ring-theme-colors-focus-ring`,
  },

  // Custom selection colors
  '::selection': {
    ...tw`bg-theme-colors-selection-bg text-theme-colors-selection-content`,
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
