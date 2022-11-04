import tw, { globalStyles } from 'twin.macro';

import { globalCss } from '../stitches.config';

import colors from './colors';
import themeDark from './themes/dark';
import themeLight from './themes/dark';

const customStyles = {
  ':root': {
    ...themeLight,
    ...themeDark,
    ...colors,

    fontSize: '54.6875%', // Decrease default size on mobile, using rems it will automatically scale down all font sizes
    '@md': {
      fontSize: '62.5%', // Set default size to 62.5% of 16px -> 10px, this way 1 rem -> 10px
    },
  },
  '*': {
    ...tw`m-0`,
  },
  'html, body, #__next': {
    ...tw`h-full`,
  },
  body: {
    ...tw`bg-theme-body antialiased font-sans text-body-3`,
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
