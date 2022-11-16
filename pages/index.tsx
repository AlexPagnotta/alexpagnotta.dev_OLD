import Link from 'next/link';

import Container from '/components/Container';
import Hero from '/components/Hero';
import Text, { H2, H3 } from '/components/Text';
import { Layout } from '/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <div tw='flex flex-col gap-56-px md:gap-128-px pt-56-px md:pt-128-px'>
        <Container>
          <Hero />
        </Container>

        <section>
          <Container>
            <H2 tw='mb-24'>My Stuff</H2>
          </Container>
          <div tw='bg-theme-colors-section-bg py-40-px md:py-80-px'>
            <Container tw='flex flex-col gap-48'>
              <article tw='max-w-sm'>
                <Link href='/test'>
                  <a>
                    <div>
                      <H3 tw='mb-8'>Content Title</H3>
                      <Text as='p' size='body-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </Text>
                    </div>
                  </a>
                </Link>
              </article>
              <article tw='max-w-sm'>
                <Link href='/test'>
                  <a>
                    <div>
                      <H3 tw='mb-8'>Content Title</H3>
                      <Text as='p' size='body-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </Text>
                    </div>
                  </a>
                </Link>
              </article>
            </Container>
          </div>
        </section>
      </div>
    </Layout>
  );
}
