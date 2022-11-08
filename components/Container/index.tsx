import tw from 'twin.macro';

import { styled } from '/stitches.config';

const Container = styled('div', {
  ...tw`mx-auto px-32-px`,
  variants: {
    size: {
      md: tw`max-w-md`,
      lg: tw`max-w-lg`,
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export default Container;
