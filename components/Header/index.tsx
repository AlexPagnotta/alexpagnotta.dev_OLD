import Link from 'next/link';

import Anchor from '../Anchor';
import Container from '../Container';
import Text from '../Text';

import Logo from './Logo';

import { useTheme } from '/contexts/Theme';

const Header = () => {
  const { toggleMode } = useTheme();

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
        {/* TODO: Temp */}
        <button onClick={() => toggleMode()}>
          <Text size='body-3'>Toggle</Text>
        </button>
      </div>
    </Container>
  );
};

export default Header;
