import Layout from './Layout';

import Container from '/components/Container';
import ContentHero, { Props as ContentHeroProps } from '/components/ContentHero';

type Props = ContentHeroProps & {
  children?: React.ReactNode;
};

const ContentLayout = ({ children, ...contentHeroProps }: Props) => {
  return (
    <Layout>
      <article>
        <Container size='md' tw='mt-72-px mb-24-px' as='header'>
          <ContentHero {...contentHeroProps} />
        </Container>
        <div tw='bg-theme-colors-section-bg pt-64-px pb-96-px'>
          <Container size='md'>{children}</Container>
        </div>
      </article>
    </Layout>
  );
};

export default ContentLayout;
