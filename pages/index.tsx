import Link from 'next/link';
import tw from 'twin.macro';

import Chip from '/components/Chip';
import Container from '/components/Container';
import Hero from '/components/Hero';
import Text, { H2, H3 } from '/components/Text';
import Layout from '/layouts/Layout';
import { styled } from '/stitches.config';

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

export default function Home() {
  return (
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
              <article>
                <Link href='/content' passHref>
                  <StyledContentItemAnchor>
                    <StyledContentItemWrapper>
                      <div tw='max-w-sm'>
                        <Chip tw='mb-12'>Post</Chip>
                        <H3 tw='mb-8'>Content Title</H3>
                        <Text as='p' size='body-3'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Text>
                      </div>
                    </StyledContentItemWrapper>
                  </StyledContentItemAnchor>
                </Link>
              </article>
              <article>
                <Link href='/content' passHref>
                  <StyledContentItemAnchor>
                    <StyledContentItemWrapper>
                      <div tw='max-w-sm'>
                        <Chip tw='mb-12'>Post</Chip>
                        <H3 tw='mb-8'>Content Title</H3>
                        <Text as='p' size='body-3'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Text>
                      </div>
                    </StyledContentItemWrapper>
                  </StyledContentItemAnchor>
                </Link>
              </article>
            </Container>
          </div>
        </section>
      </div>
    </Layout>
  );
}
