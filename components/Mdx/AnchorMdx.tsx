import Link from 'next/link';

import Anchor from '../Anchor';

const AnchorMdx = ({ href, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'));

  return isInternal ? (
    <Link href={href} passHref>
      <Anchor {...rest} />
    </Link>
  ) : (
    <Anchor href={href} target='_blank' rel='noopener noreferrer' {...rest} />
  );
};

export default AnchorMdx;
