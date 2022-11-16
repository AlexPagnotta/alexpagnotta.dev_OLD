import tw from 'twin.macro';

import { styled } from '/stitches.config';

const Container = styled('div', {
  ...tw` px-32-px`,
  variants: {
    size: {
      sm: tw`max-w-sm`,
      md: tw`max-w-md`,
      lg: tw`max-w-lg`,
    },
    centered: {
      true: tw`mx-auto`,
    },
  },
  defaultVariants: {
    size: 'lg',
    centered: true,
  },
});

export default Container;
