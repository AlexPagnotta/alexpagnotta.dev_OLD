import Link from 'next/link';

import Anchor from '../Anchor';
import Container from '../Container';
import Text from '../Text';
import Switch from '../Switch';

import Logo from './Logo';

import { useTheme } from '/contexts/Theme';

const Header = () => {
  const { theme, toggleMode } = useTheme();

  return (
    <Container tw='flex justify-between items-center h-96-px md:h-152-px' as='header'>
      <Link href='/'>
        <a aria-label='Go To Homepage'>
          <Logo />
        </a>
      </Link>
      <div tw='flex items-center gap-24-px md:gap-36-px'>
        <Text size='body-3'>
          <Anchor href='/test' variant='header'>
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

export default Header;
