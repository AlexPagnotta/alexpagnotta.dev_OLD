import { VariantProps } from '@stitches/react';
import tw from 'twin.macro';

import { styled } from '/stitches.config';

type Props = {
  size?: VariantProps<typeof StyledContainer>['size'];
  children: React.ReactNode;
};

const StyledContainer = styled('div', {
  ...tw`w-full bg-theme-colors-snippet-preview-wrapper-bg rounded-lg`,

  variants: {
    size: {
      md: tw`h-512-px`,
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const SnippetPreviewContainer = ({ size, children, ...rest }: Props) => {
  return (
    <StyledContainer size={size} {...rest}>
      {children}
    </StyledContainer>
  );
};

export default SnippetPreviewContainer;
