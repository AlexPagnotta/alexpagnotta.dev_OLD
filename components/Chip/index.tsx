import tw from 'twin.macro';

import { styled } from '/stitches.config';

const Chip = styled('span', {
  ...tw`inline-flex items-center justify-center px-10-px w-max h-32`,
  ...tw`text-current bg-theme-colors-chip-bg text-body-1 font-semibold rounded-md`,
  transition: 'background var(--animation-mode-duration) var(--animation-mode-function)',
});

export default Chip;
