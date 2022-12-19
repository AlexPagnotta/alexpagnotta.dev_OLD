import { VariantProps } from '@stitches/react';
import React from 'react';
import tw from 'twin.macro';

import Label from '../Label';

import { styled } from '/stitches.config';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  id: string;
  variant?: VariantProps<typeof StyledSwitch>['variant'];
  label?: React.ReactNode;
};

const StyledSwitch = styled('input', {
  ...tw`relative appearance-none m-0 flex-shrink-0 cursor-pointer inline-block`,
  ...tw`rounded-full bg-theme-colors-switch-bg w-48 h-28 md:(w-56 h-32)`,

  transition: 'background 0.2s',

  '&:after': {
    ...tw`content-[""] absolute left-4 top-4 bottom-4 w-20 h-20 md:(w-24 h-24)`,
    ...tw`rounded-full bg-theme-colors-switch-content`,
    transform: 'translateX(var(--x-translate, 0)) scale(var(--scale, 1))',
    transition: 'transform 0.2s',
  },

  '&:checked': {
    '--x-translate': '2rem',
    '@md': { '--x-translate': '2.4rem' },
  },

  '@support-hover': {
    '&:hover': {
      '&:not(:disabled)': { '--scale': '1.08' },
    },
  },

  '&:disabled': {
    ...tw`cursor-not-allowed opacity-60`,
    '& + label': tw`cursor-not-allowed`,
  },

  variants: {
    variant: {
      mode: {},
      default: {
        '&:checked': {
          ...tw`bg-theme-colors-switch-bg-checked`,
          transition: 'background 0.2s',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Switch = ({ id, label, checked, ...rest }: Props) => {
  return (
    <div tw='flex gap-12 items-center'>
      <StyledSwitch id={id} type='checkbox' checked={checked} aria-checked={checked} role='switch' {...rest} />
      {label ? <Label htmlFor={id}>{label}</Label> : null}
    </div>
  );
};

export default Switch;
