import { ComponentMap } from 'mdx-bundler/client';
import Link from 'next/link';

import Anchor from '../Anchor';
import List from '../List';
import Text, { H2, H3, Strong } from '../Text';

const MdxAnchor = ({ href, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'));

  return isInternal ? (
    <Link href={href} passHref>
      <Anchor {...rest} />
    </Link>
  ) : (
    <Anchor href={href} target='_blank' rel='noopener noreferrer' {...rest} />
  );
};

const MdxComponents: ComponentMap = {
  a: MdxAnchor,
  h2: H2,
  h3: H3,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <Text as='p' size='body-3' {...props} />,
  strong: Strong,
  li: List.Item,
  ol: function OL(props: React.OlHTMLAttributes<HTMLOListElement>) {
    return <List variant='ordered' {...props} />;
  },
  ul: function UL(props: React.HTMLAttributes<HTMLUListElement>) {
    return <List variant='unordered' {...props} />;
  },
};

export default MdxComponents;
