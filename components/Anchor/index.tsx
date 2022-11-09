import { VariantProps } from '@stitches/react';
import tw, { styled } from 'twin.macro';

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
      default: {
        ...tw`text-theme-colors-link border-b-2 border-b-transparent`,
        ...tw`support-hover:hover:border-theme-colors-link focus:(ring-0 border-theme-colors-link)`,
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
