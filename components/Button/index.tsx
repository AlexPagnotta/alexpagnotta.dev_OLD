import { VariantProps } from '@stitches/react';
import React from 'react';
import tw from 'twin.macro';

import Icon, { Props as IconProps } from '../Icon';

import { styled } from '/stitches.config';

type PolymorphicElement = 'a' | 'button';

type Props<T extends PolymorphicElement> = {
  as?: T;
  variant?: VariantProps<typeof StyledButton>['variant'];
} & (
  | {
      icon: IconProps['name'];
      iconStart?: never;
      iconEnd?: never;
      children?: never;
    }
  | { icon?: never; iconStart?: IconProps['name']; iconEnd?: IconProps['name']; children?: React.ReactNode }
  | { icon?: never; iconStart?: never; iconEnd?: never; children?: React.ReactNode }
) &
  Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

const StyledButton = styled('button', {
  ...tw`appearance-none select-none cursor-pointer disabled:(cursor-not-allowed opacity-60)`,
  ...tw`inline-flex justify-center items-center h-44 overflow-hidden isolate active:scale-95`,
  willChange: 'transform', // Fix text bluriness on transform
  WebkitTapHighlightColor: 'transparent',
  transitionProperty: 'transform, background, border',
  transitionDuration: '0.3s, var(--animation-mode-duration)',
  transitionTimingFunction: 'var(--animation-mode-function)',

  '&:before': {
    ...tw`content-[""] absolute inset-0 z-[-1] opacity-0`,
    transition: 'opacity 0.5s',
  },

  '&:focus-visible': {
    ...tw`ring-0`,
    '&:before': {
      ...tw`opacity-100`,
    },
  },

  '&:hover': {
    '&:not(:disabled)': {
      '&:before': {
        ...tw`opacity-100`,
      },
    },
  },

  variants: {
    variant: {
      primary: {
        ...tw`bg-theme-colors-button-primary-bg text-theme-colors-button-primary-content`,

        '&:before': {
          ...tw`bg-theme-button-primary-bg-hover `,
        },
      },
      secondary: {
        ...tw`bg-theme-colors-button-secondary-bg text-theme-colors-button-secondary-content border-theme-colors-button-secondary-content border-2`,

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

const Button = <T extends PolymorphicElement = 'button'>(props: Props<T>) => {
  // Props destructured to get the "rest" props
  const { icon, iconStart, iconEnd, ...rest } = props;

  if (!props.icon || (!props.iconStart && !props.iconEnd)) {
    props.children;
  }
  return (
    <StyledButton buttonType={props.icon ? 'icon' : 'default'} {...rest}>
      {props.iconStart || props.iconEnd ? (
        <>
          {props.iconStart && <StyledIcon name={props.iconStart} aria-hidden />}
          {props.children}
          {props.iconEnd && <StyledIcon name={props.iconEnd} aria-hidden />}
        </>
      ) : props.icon ? (
        <StyledIcon name={props.icon} aria-hidden />
      ) : (
        <>{props.children}</>
      )}
    </StyledButton>
  );
};

export default Button;
