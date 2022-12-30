import tw from 'twin.macro';

import Anchor from '../Anchor';

import Text, { Strong } from '/components/Text';
import { keyframes, styled } from '/stitches.config';

const wavingAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '4%': {
    transform: 'rotate(-5deg)',
  },
  '8%': {
    transform: 'rotate(20deg)',
  },
  '12%': {
    transform: 'rotate(-5deg)',
  },
  '16%': {
    transform: 'rotate(20deg)',
  },
  '20%': {
    transform: 'rotate(-3deg)',
  },
  '24%': {
    transform: 'rotate(0deg)',
  },
});

const StyledEmoticon = styled('span', {
  ...tw`inline-block `,
  transformOrigin: 'bottom left',
  animation: `10s ease-in-out 2s infinite normal none running ${wavingAnimation}`,
});

const Hero = () => {
  return (
    <div>
      <Text size='body-5' as='h1'>
        <span tw='block mb-20'>
          I&apos;m <Strong>Alex Pagnotta</Strong>, a frontend developer from Italy <StyledEmoticon>🤌</StyledEmoticon>
          <br />
          This is my blog, where I share posts, snippets and generally anything I find interesting.
        </span>
        <span>
          Currently working at <Anchor href='https://wild.as/'>Wild</Anchor> building wonderful websites.
        </span>
      </Text>
    </div>
  );
};

export default Hero;
