import Footer from '/components/Footer';
import Header from '/components/Header';
import { styled } from '/stitches.config';

type Props = {
  children?: React.ReactNode;
};

const Main = styled('main', {});

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
