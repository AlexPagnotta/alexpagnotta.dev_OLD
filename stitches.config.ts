import { createStitches } from '@stitches/react';

export type { CSS } from '@stitches/react/types/css-util';
import { breakpoints } from './utils/breakpoints';

export const stitches = createStitches({
  theme: {},
  media: {
    ...breakpoints,
    'support-hover': '(hover: hover) and (pointer: fine)',
  },
  utils: {
    textGradient: (value: string) => ({
      backgroundImage: value,
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }),
  },
});

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches;
