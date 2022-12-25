import tw from 'twin.macro';

import Layout from './Layout';

import Container from '/components/Container';
import ContentHero, { Props as ContentHeroProps } from '/components/ContentHero';
import { styled } from '/stitches.config';

type Props = ContentHeroProps & {
  children?: React.ReactNode;
};

const StyledContentWrapper = styled('div', {
  ...tw`bg-theme-colors-foreground pt-64-px pb-96-px`,
  transition: 'background var(--animation-mode-duration) var(--animation-mode-function)',
});

const ContentLayout = ({ children, ...contentHeroProps }: Props) => {
  return (
    <Layout>
      <article>
        <Container size='md' tw='mt-72-px mb-24-px' as='header'>
          <ContentHero {...contentHeroProps} />
        </Container>
        <StyledContentWrapper>
          <Container size='md'>{children}</Container>
        </StyledContentWrapper>
      </article>
    </Layout>
  );
};

export default ContentLayout;
