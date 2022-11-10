import { VariantProps } from '@stitches/react';
import tw from 'twin.macro';

import { styled } from '/stitches.config';

const Text = styled('span', {
  ...tw`font-sans`,
  variants: {
    size: {
      'title-1': tw`text-title-1 font-bold`,
      'title-2': tw`text-title-2 font-bold`,
      'title-3': tw`text-title-3 font-bold`,
      'title-4': tw`text-title-4 font-semibold`,
      'body-5': tw`text-body-5`,
      'body-4': tw`text-body-4`,
      'body-3': tw`text-body-3`,
      'body-2': tw`text-body-2`,
      'body-1': tw`text-body-1`,
    },
    weight: {
      regular: tw`font-regular`,
      semibold: tw`font-semibold`,
      bold: tw`font-bold`,
    },
    variant: {
      default: tw`text-current`,
      primary: tw`text-theme-colors-text-primary`,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default Text;

type TextVariants = VariantProps<typeof Text>;

type StrongProps = Omit<TextVariants, 'size' | 'weight'> & React.HTMLAttributes<HTMLParagraphElement>;

export const Strong = (props: StrongProps) => <Text {...props} as='strong' weight='bold' />;

type HeadingProps = Omit<TextVariants, 'size' | 'weight'> & React.HTMLAttributes<HTMLHeadingElement>;

export const H1 = (props: HeadingProps) => <Text {...props} size='title-1' as='h1' />;

export const H2 = (props: HeadingProps) => <Text {...props} size='title-2' as='h2' />;

export const H3 = (props: HeadingProps) => <Text {...props} size='title-3' as='h3' />;

export const H4 = (props: HeadingProps) => <Text {...props} size='title-4' as='h4' />;
