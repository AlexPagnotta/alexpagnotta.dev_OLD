import { VariantProps } from '@stitches/react';
import tw from 'twin.macro';

import { styled } from '/stitches.config';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> &
  (
    | {
        variant: 'header';
        children: string; // String is needed to animate the gradient bg on hover
      }
    | {
        variant?: Exclude<VariantProps<typeof StyledAnchor>['variant'], 'header'>;
        children?: React.ReactNode;
      }
  );

const StyledAnchor = styled('a', {
  WebkitTapHighlightColor: 'transparent',
  variants: {
    variant: {
      header: {
        ...tw`relative inline-block font-bold`,

        '& span, &:before': {
          transition: 'opacity 0.3s',
        },

        '&:before': {
          ...tw`absolute content-[attr(data-content)] inset-0 opacity-0`,
          textGradient: 'var(--colors-link-header-hover)',
        },

        '&:hover': {
          '& span': tw`opacity-0`,
          '&:before': tw`opacity-100`,
        },

        '&:focus': {
          ...tw`ring-0`,
          '& span': tw`opacity-0`,
          '&:before': tw`opacity-100`,
        },
      },
      heading: {
        ...tw`relative`,
        '&:before': {
          ...tw`absolute left-[-1em] content-["#"] opacity-0`,
          transition: 'opacity 1s ease',
        },

        '&:hover': {
          '&:before': tw`opacity-40`,
        },

        '&:focus': {
          ...tw`ring-0`,
          '&:before': tw`opacity-40`,
        },
      },
      default: {
        ...tw`text-theme-colors-link font-semibold border-b-2 border-b-transparent`,
        ...tw`hover:border-current focus:(ring-0 border-current)`,
        transition: 'border-color 0.3s',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Anchor = ({ variant, children, ...rest }: Props) => {
  const isHeaderVariant = variant === 'header';

  return (
    <StyledAnchor variant={variant} {...rest} {...(isHeaderVariant ? { 'data-content': children } : {})}>
      {isHeaderVariant ? <span>{children}</span> : children}
    </StyledAnchor>
  );
};

export default Anchor;
