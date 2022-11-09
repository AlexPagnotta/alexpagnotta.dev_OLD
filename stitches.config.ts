// stitches.config.ts
import { createStitches } from '@stitches/react';
export type { CSS } from '@stitches/react/types/css-util';
import { theme as twTheme } from 'twin.macro';

export const stitches = createStitches({
  theme: {},
  media: {
    ...Object.entries(twTheme`screens`).reduce((accumulator, [key, value]) => {
      if (key === 'support-hover') return accumulator;

      return { ...accumulator, [key]: `(min-width: ${value})` };
    }, {}),

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
