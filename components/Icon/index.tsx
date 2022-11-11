import { VariantProps } from '@stitches/react';
import { SVGAttributes } from 'react';
import tw from 'twin.macro';

import GithubIcon from './IconList/github.svg';
import LinkedinIcon from './IconList/linkedin.svg';
import MoonIcon from './IconList/moon.svg';
import SunIcon from './IconList/sun.svg';
import TwitterIcon from './IconList/twitter.svg';

import { styled } from '/stitches.config';

type Props = SVGAttributes<SVGElement> & {
  name: keyof typeof iconsDict;
  variant?: VariantProps<typeof StyledIcon>['variant'];
};

const iconsDict = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  moon: MoonIcon,
  sun: SunIcon,
  twitter: TwitterIcon,
};

const StyledIcon = styled('svg', {
  variants: {
    variant: {
      default: tw`text-current`,
      primary: tw`text-theme-colors-text-primary`,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Icon = ({ name, ...rest }: Props) => {
  const IconCompoent = iconsDict[name];

  return <StyledIcon as={IconCompoent} {...rest} />;
};

export default Icon;
