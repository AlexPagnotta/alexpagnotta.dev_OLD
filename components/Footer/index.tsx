import Anchor from '../Anchor';
import Button from '../Button';
import Container from '../Container';
import Text, { H2 } from '../Text';

const Footer = () => {
  return (
    <Container as='footer' tw='py-80-px md:py-128-px'>
      <H2>Stay in touch 👈</H2>
      {/* TODO: Placeholder */}
      <Text size='body-3' tw='block mt-24'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do you can an email at{' '}
        <Anchor href='mailto:ap.alex.pagnotta@gmail.com'>ap.alex.pagnotta@gmail.com</Anchor>.
        <br /> <br />
        Ornare quam viverra orci sagittis eu volutpat odio. Suspendisse interdum consectetur libero id sed do eiusmod
        tempor incididunt.
      </Text>
      <div tw='flex gap-48-px mt-42'>
        <Button
          icon='github'
          aria-label='Go to Github'
          title='Go to Github'
          as='a'
          href='https://wwww.placeholder.com' // TODO: Placeholder
          target='_blank'
          rel='noopener noreferrer'
        />
        <Button
          icon='linkedin'
          aria-label='Go to Linkedin'
          title='Go to Linkedin'
          as='a'
          href='https://wwww.placeholder.com' // TODO: Placeholder
          target='_blank'
          rel='noopener noreferrer'
        />
        <Button
          icon='twitter'
          aria-label='Go to Twitter'
          title='Go to Twitter'
          as='a'
          href='https://wwww.placeholder.com' // TODO: Placeholder
          type='submit'
          target='_blank'
          rel='noopener noreferrer'
        />
      </div>
    </Container>
  );
};

export default Footer;
