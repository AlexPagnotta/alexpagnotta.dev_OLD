import tw, { globalStyles } from 'twin.macro';

import { globalCss } from '../stitches.config';

import colors from './colors';
import themeDark from './themes/dark';
import themeLight from './themes/light';

const customStyles = {
  ':root': {
    ...themeLight,
    ...themeDark,
    ...colors,

    fontSize: '54.6875%', // Decrease default size on mobile, using rems it will automatically scale down all font sizes
    '@md': {
      fontSize: '62.5%', // Set default size to 62.5% of 16px -> 10px, this way 1 rem -> 10px
    },

    WebkitTapHighlightColor: 'transparent',
  },

  // Reset
  '*': {
    ...tw`m-0`,
  },
  'html, body, #__next': {
    ...tw`h-full`,
  },
  body: {
    ...tw`bg-theme-colors-body antialiased font-sans text-body-3 text-theme-colors-text-primary`,
  },

  // Focus outline

  // Disable focus outline when focus comes from mouse/touch interactions
  ':focus:not(:focus-visible)': {
    ...tw`outline-none`,
  },

  // Custom style for keyboard interaction focus
  ':focus-visible': {
    ...tw`outline-none ring-4 ring-theme-colors-focus-ring`, // TODO: Temp style
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
