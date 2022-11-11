import { VariantProps } from '@stitches/react';
import tw from 'twin.macro';

import { styled } from '/stitches.config';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps<typeof StyledButton>['variant'];
};

const StyledButton = styled('button', {
  ...tw`appearance-none select-none  cursor-pointer`,
  ...tw`inline-flex justify-center items-center h-44`,
  WebkitTapHighlightColor: 'transparent',
  variants: {
    variant: {
      primary: { ...tw`bg-theme-colors-button-primary-bg text-theme-colors-button-primary-content` },
      secondary: { ...tw`bg-theme-colors-button-secondary-bg text-theme-colors-button-secondary-content` },
    },
    buttonType: {
      default: {
        ...tw`px-18-px w-max rounded-md text-body-3 font-bold`,
      },
      icon: {
        ...tw`w-44 rounded-full`,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    buttonType: 'default',
  },
});

const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
