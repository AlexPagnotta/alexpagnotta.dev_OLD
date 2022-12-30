import Link from 'next/link';
import tw from 'twin.macro';

import Anchor from '../Anchor';
import Container from '../Container';
import { footerId } from '../Footer';
import Switch from '../Switch';
import Text from '../Text';

import Logo from './Logo';

import { useTheme } from '/contexts/Theme';
import { styled } from '/stitches.config';

const skipContentSectionId = 'content-skip-here';

const StyledSkipContentLink = styled('a', {
  ...tw`absolute top-32-px left-1/2 -translate-x-1/2 py-8-px px-18-px rounded-md text-body-2 font-bold`,
  ...tw`bg-theme-colors-button-primary-bg text-theme-colors-button-primary-content`,

  // Link is only visible on screen readers or when focused
  ...tw`w-1-px h-1-px overflow-hidden`,
  clip: 'rect(0, 0, 0, 0)',

  '&:focus': {
    ...tw` w-auto h-auto overflow-auto`,
    clip: 'auto',
  },
});

const Header = () => {
  const { theme, toggleMode } = useTheme();

  return (
    <Container tw='flex justify-between items-center h-96-px md:h-152-px' as='header'>
      <StyledSkipContentLink href={`#${skipContentSectionId}`}>Skip to content</StyledSkipContentLink>
      <Link href='/' passHref>
        <a aria-label='Go To Homepage' tw='rounded-full'>
          <Logo />
        </a>
      </Link>
      <div tw='flex items-center gap-24-px md:gap-36-px'>
        <Text size='body-3'>
          <Anchor href={`#${footerId}`} variant='header'>
            Contact Me
          </Anchor>
        </Text>
        <Switch
          id='toggle-mode-switch'
          checked={theme === 'light'}
          onChange={() => toggleMode()}
          variant='mode'
          aria-label='Toggle dark mode'
        />
      </div>
    </Container>
  );
};

export { skipContentSectionId };

export default Header;
