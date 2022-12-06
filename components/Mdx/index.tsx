import { getMDXComponent } from 'mdx-bundler/client';
import { ComponentMap } from 'mdx-bundler/client';
import { useMemo } from 'react';
import tw from 'twin.macro';

import List from '../List';
import Text, { H2, H3, Strong } from '../Text';

import AnchorMdx from './AnchorMdx';
import ImageMdx from './ImageMdx';

import { styled } from '/stitches.config';

type Props = {
  source: string;
};

const MdxComponents: ComponentMap = {
  a: AnchorMdx,
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

  // Custom Components
  Image: ImageMdx,
};

const StyledWrapper = styled('div', {
  h2: tw`mt-[2em] mb-[1em]`,
  h3: tw`mt-[1.2em] mb-[0.6em]`,
  p: tw`mb-36`,
  '& > ul, & > ol': tw`mb-36`,

  // Code block
  '& div[data-rehype-pretty-code-fragment]': {
    ...tw`mb-36 -mx-32-px md:mx-0 text-body-2`,
    pre: {
      ...tw`bg-theme-colors-code-block-bg whitespace-pre overflow-x-auto md:rounded-lg p-32-px`,
      '& > code': tw`grid`,
    },
  },
  // Inline Code
  '& span[data-rehype-pretty-code-fragment]': tw`bg-theme-colors-code-block-bg rounded-sm p-4`,
});

const MdxContent = ({ source }: Props) => {
  const Component = useMemo(() => {
    return getMDXComponent(source);
  }, [source]);

  if (!Component) return null;

  return (
    <StyledWrapper>
      <Component components={MdxComponents} />
    </StyledWrapper>
  );
};

export default MdxContent;
