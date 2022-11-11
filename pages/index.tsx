import Button from '/components/Button';
import Container from '/components/Container';
import Hero from '/components/Hero';
import { Layout } from '/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <Container tw='flex flex-col gap-56-px md:gap-128-px py-56-px md:py-128-px'>
        <Hero />
        <Button>Ttest</Button>
      </Container>
    </Layout>
  );
}
