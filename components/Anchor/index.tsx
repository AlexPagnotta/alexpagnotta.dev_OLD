import { VariantProps } from '@stitches/react';
import tw from 'twin.macro';

import { styled } from '/stitches.config';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: VariantProps<typeof StyledAnchor>['variant'];
};

const StyledAnchor = styled('a', {
  variants: {
    variant: {
      header: {
        ...tw`font-bold`,
        '@support-hover': {
          '&:hover': {
            textGradient: 'var(--colors-link-header-hover)', // TODO: Add fade in animation
          },
        },
        '&:focus': {
          ...tw`ring-0`,
          textGradient: 'var(--colors-link-header-hover)',
        },
      },
      heading: {
        ...tw`relative`,
        '&:before': {
          ...tw`absolute left-[-1em] content-['#'] opacity-0`,
          transition: 'opacity 0.3s',
        },
        '@support-hover': {
          '&:hover': {
            '&:before': tw`opacity-40`,
          },
        },
        '&:focus': {
          ...tw`ring-0`,
          '&:before': tw`opacity-40`,
        },
      },
      default: {
        ...tw`text-theme-colors-link border-b-2 border-b-transparent`,
        ...tw`support-hover:hover:border-current focus:(ring-0 border-current)`,
        transition: 'border-color 0.3s',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Anchor = ({ variant, children, ...rest }: Props) => {
  return (
    <StyledAnchor variant={variant} {...rest}>
      {children}
    </StyledAnchor>
  );
};

export default Anchor;
