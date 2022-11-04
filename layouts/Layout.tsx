import { styled } from '/stitches.config';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled('div', {});

const Main = styled('main', {});

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      {/* Header */}
      <Main>{children}</Main>
      {/* Footer */}
    </Wrapper>
  );
};
