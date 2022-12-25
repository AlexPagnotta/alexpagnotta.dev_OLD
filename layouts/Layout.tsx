import Footer from '/components/Footer';
import Header, { skipContentSectionId } from '/components/Header';
import { styled } from '/stitches.config';

type Props = {
  children?: React.ReactNode;
};

const Main = styled('main', {});

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main id={skipContentSectionId}>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
