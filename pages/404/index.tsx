import Button from '/components/Button';
import Container from '/components/Container';
import Text from '/components/Text';

import Background from './bg.svg';

import { styled } from '/stitches.config';

import tw from 'twin.macro';
import Link from 'next/link';

const StyledBackground = styled(Background, {
  ...tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-640-px md:w-960-px opacity-10`,
});

const NotFound = () => (
  <div tw='h-full relative overflow-hidden'>
    <StyledBackground aria-hidden />
    <Container tw='h-full flex flex-col justify-center items-center text-center'>
      <Text size='title-1' as='h1' weight='black' tw='mb-4 md:mb-12'>
        PAGE NOT FOUND
      </Text>
      <Text as='p' size='body-3' tw='mb-32'>
        Sorry, we couldn&apos;t find the page you were looking for...
      </Text>
      <Link href='/' passHref>
        <Button as='a' variant='secondary'>
          Back to Home
        </Button>
      </Link>
    </Container>
  </div>
);

export default NotFound;
