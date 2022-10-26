import { globalStyles } from 'twin.macro';

import { globalCss } from '../stitches.config';

import colors from './colors';
import themeDark from './themes/dark';
import themeLight from './themes/dark';

const customStyles = {
  ...themeLight,
  ...themeDark,
  ':root': {
    ...colors,
  },
  body: {
    backgroundColor: 'var(--colors-body)',
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
