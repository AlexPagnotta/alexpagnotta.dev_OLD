import dynamic from 'next/dynamic';

import List from '../List';
import Text, { H2, H3, Strong } from '../Text';

import AnchorMdx from './AnchorMdx';
import ImageMdx from './ImageMdx';

const Test = dynamic(() => import('./widgets/Test'));

export const MdxComponents = {
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
  a: AnchorMdx,
  Image: ImageMdx,

  // Widget Components
  Test,
};
