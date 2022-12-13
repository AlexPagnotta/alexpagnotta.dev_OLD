import dynamic from 'next/dynamic';

import List from '../List';
import Text, { Strong } from '../Text';

import AnchorMdx from './AnchorMdx';
import HeadingMdx from './HeadingMdx';
import ImageMdx from './ImageMdx';

const Test = dynamic(() => import('./widgets/Test'));
const TestLiveCodeBlock = dynamic(() => import('./widgets/TestLiveCodeBlock'));

export const MdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <HeadingMdx variant='h2' {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <HeadingMdx variant='h3' {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <Text as='p' size='body-3' {...props} />,
  strong: Strong,
  li: List.Item,
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => <List variant='ordered' {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <List variant='unordered' {...props} />,
  a: AnchorMdx,
  Image: ImageMdx,

  // Widget Components
  Test,
  TestLiveCodeBlock,
};
