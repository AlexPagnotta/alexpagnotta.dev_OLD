import { GetStaticProps } from 'next';
import Link from 'next/link';
import tw from 'twin.macro';

import Chip from '/components/Chip';
import Container from '/components/Container';
import Hero from '/components/Hero';
import Text, { H2, H3 } from '/components/Text';
import Layout from '/layouts/Layout';
import { getAllContentFrontMatters } from '/lib/mdx';
import { styled } from '/stitches.config';
import { ContentType, PostFrontmatter, ProjectFrontmatter, SnippetFrontmatter } from '/types/content';

type Props = {
  contents: (PostFrontmatter | ProjectFrontmatter | SnippetFrontmatter)[];
};

const StyledContentItemWrapper = styled('div', {
  ...tw`relative isolate`,

  '&:before': {
    ...tw`content-[""] absolute -inset-20-px z-[-1] opacity-0 bg-theme-colors-section-bg-hover rounded-lg`,
    transition: 'opacity 0.5s',
  },

  '@support-hover': {
    '&:hover': {
      '&:before': { ...tw`opacity-50` },
    },
  },
});

const StyledContentItemAnchor = styled('a', {
  '&:focus': {
    ...tw`ring-0`,
    [`& ${StyledContentItemWrapper}`]: {
      '&:before': {
        ...tw`opacity-50`,
      },
    },
  },
});

const Home = ({ contents }: Props) => (
  <Layout>
    <div tw='flex flex-col gap-80-px md:gap-128-px pt-56-px md:pt-128-px'>
      <Container>
        <Hero />
      </Container>

      <section>
        <Container>
          <H2 tw='mb-24-px'>My Stuff</H2>
        </Container>
        <div tw='bg-theme-colors-section-bg py-64-px'>
          <Container tw='flex flex-col gap-48-px'>
            {contents?.map((content) => (
              <article key={content.extendedSlug}>
                <Link href={content.extendedSlug} passHref>
                  <StyledContentItemAnchor>
                    <StyledContentItemWrapper>
                      <div tw='max-w-sm'>
                        <Chip tw='mb-12 capitalize'>{content.type}</Chip>
                        <H3 tw='mb-8'>{content.title}</H3>
                        {content.excerpt && (
                          <Text as='p' size='body-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </Text>
                        )}
                      </div>
                    </StyledContentItemWrapper>
                  </StyledContentItemAnchor>
                </Link>
              </article>
            ))}
          </Container>
        </div>
      </section>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const [posts, projects, snippets] = await Promise.all([
    getAllContentFrontMatters(ContentType.POST),
    getAllContentFrontMatters(ContentType.PROJECT),
    getAllContentFrontMatters(ContentType.SNIPPET),
  ]);

  const contents = [...posts, ...projects, ...snippets].sort(({ date: date1 }, { date: date2 }) =>
    date1 > date2 ? -1 : date1 < date2 ? 1 : 0
  );

  return {
    props: {
      contents,
    },
  };
};

export default Home;
