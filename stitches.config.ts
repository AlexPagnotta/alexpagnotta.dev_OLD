// stitches.config.ts
import { createStitches } from '@stitches/react';
export type { CSS } from '@stitches/react/types/css-util';
import { theme as twTheme } from 'twin.macro';

export const stitches = createStitches({
  theme: {},
  media: Object.entries(twTheme`screens`).reduce(
    (accumulator, [key, value]) => ({ ...accumulator, [key]: `(min-width: ${value})` }),
    {}
  ),
});

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches;
