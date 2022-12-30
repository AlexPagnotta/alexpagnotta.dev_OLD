import Anchor from '../Anchor';
import Button from '../Button';
import Container from '../Container';
import Text, { H2 } from '../Text';

import siteConfig from '/config/site.mjs';

export const footerId = 'footer-section';

const Footer = () => {
  return (
    <Container id={footerId} as='footer' tw='py-80-px md:py-128-px'>
      <H2>Stay in touch 👈</H2>
      <Text size='body-3' tw='block mt-24'>
        <span tw='block mb-20'>
          Do you want to get in touch? Write me at{' '}
          <Anchor href='mailto:ap.alex.pagnotta@gmail.com'>ap.alex.pagnotta@gmail.com</Anchor>.
        </span>
        <span>
          You can also find me on social networks, or check my Github account if you want to have a look at the source
          code of this website.
        </span>
      </Text>
      <div tw='flex gap-32-px md:(gap-42-px) mt-42'>
        <Button
          icon='github'
          aria-label='Go to Github'
          title='Go to Github'
          as='a'
          href={siteConfig.github}
          target='_blank'
          rel='noopener noreferrer'
        />
        <Button
          icon='twitter'
          aria-label='Go to Twitter'
          title='Go to Twitter'
          as='a'
          href={siteConfig.twitter.url}
          type='submit'
          target='_blank'
          rel='noopener noreferrer'
        />
        <Button
          icon='document'
          aria-label='Download my resume'
          title='Download my resume'
          as='a'
          href={siteConfig.resumeUrl}
          type='submit'
          target='_blank'
          rel='noopener noreferrer'
        />
        <Button
          icon='rss'
          aria-label='Open the RSS feed'
          title='Open the RSS feed'
          as='a'
          href={siteConfig.rss.url}
          target='_blank'
          rel='noopener noreferrer'
        />
      </div>
    </Container>
  );
};

export default Footer;
