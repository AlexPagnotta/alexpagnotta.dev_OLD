import { VariantProps } from '@stitches/react';
import React from 'react';
import tw from 'twin.macro';

import Icon, { Props as IconProps } from '../Icon';

import { styled } from '/stitches.config';

type PolymorphicElement = 'a' | 'button';

type Props<T extends PolymorphicElement> = {
  as?: T;
  variant?: VariantProps<typeof StyledButton>['variant'];
  children?: React.ReactNode;
} & (
  | {
      icon?: IconProps['name'];
      iconStart?: never;
      iconEnd?: never;
      children?: never;
    }
  | { icon?: never; iconStart?: IconProps['name']; iconEnd?: IconProps['name']; children: React.ReactNode }
) &
  React.ComponentPropsWithoutRef<T>;

const StyledButton = styled('button', {
  ...tw`appearance-none select-none cursor-pointer disabled:cursor-not-allowed `,
  ...tw`inline-flex justify-center items-center h-44 overflow-hidden isolate active:scale-95`,
  WebkitTapHighlightColor: 'transparent',
  transition: 'transform 0.3s',
  willChange: 'transform', // Fix text bluriness on transform

  '&:before': {
    ...tw`content-[""] absolute inset-0 z-[-1] opacity-0`,
    transition: 'opacity 0.5s',
  },

  '@support-hover': {
    '&:hover': {
      '&:not(:disabled)': {
        '&:before': {
          ...tw`opacity-100`,
        },
      },
    },
  },

  variants: {
    variant: {
      primary: {
        ...tw`bg-theme-colors-button-primary-bg text-theme-colors-button-primary-content`,
        ...tw`focus-visible:(ring-0 bg-theme-button-primary-bg-hover) disabled:opacity-60`,

        '&:before': {
          ...tw`bg-theme-button-primary-bg-hover `,
        },
      },
      secondary: {
        ...tw`bg-theme-colors-button-secondary-bg text-theme-colors-button-secondary-content border-theme-colors-button-secondary-content border-2`,
        ...tw`focus-visible:(ring-0 bg-theme-button-secondary-bg-hover) disabled:opacity-60`,

        '&:before': {
          ...tw`bg-theme-button-secondary-bg-hover `,
        },
      },
    },
    buttonType: {
      default: {
        ...tw`px-18-px w-max rounded-md gap-8 text-body-3 font-bold`,
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

const StyledIcon = styled(Icon, { ...tw`h-24 flex-shrink-0 pointer-events-none` });

const Button = <T extends PolymorphicElement = 'button'>({ icon, iconStart, iconEnd, children, ...rest }: Props<T>) => {
  return (
    <StyledButton buttonType={icon ? 'icon' : 'default'} {...rest}>
      {icon ? (
        <StyledIcon name={icon} aria-hidden />
      ) : (
        <>
          {iconStart && <StyledIcon name={iconStart} aria-hidden />}
          {children}
          {iconEnd && <StyledIcon name={iconEnd} aria-hidden />}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
