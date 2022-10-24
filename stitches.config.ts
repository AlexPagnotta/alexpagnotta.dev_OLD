// stitches.config.ts
import { createStitches } from '@stitches/react';
export type { CSS } from '@stitches/react/types/css-util';
import { theme as twTheme } from 'twin.macro';

import { toFlatPropertyMap } from 'tailwind.config.utils';

export const stitches = createStitches({
  theme: {
    colors: toFlatPropertyMap(twTheme`colors`),
    space: twTheme`space` as any,
    sizes: twTheme`space` as any,
    // fontSizes: {},
    fonts: Object.entries(twTheme`fontFamily`).reduce(
      (accumulator, [key, value]) => ({ ...accumulator, [key]: (value as string[]).join(', ') }),
      {}
    ),
    fontWeights: twTheme`fontWeight` as any,
    radii: twTheme`borderRadius` as any,
    // lineHeights: {},
    // letterSpacings: {},
    // borderWidths: {},
    // borderStyles: {},
    // shadows: {},
    // zIndices: {},
    // transitions: {},
  },
  media: Object.entries(twTheme`screens`).reduce(
    (accumulator, [key, value]) => ({ ...accumulator, [key]: `(min-width: ${value})` }),
    {}
  ),
});

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches;
