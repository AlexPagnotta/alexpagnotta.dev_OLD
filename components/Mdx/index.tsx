import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import tw from 'twin.macro';

import { MdxComponents } from './MdxComponents';

import { styled } from '/stitches.config';

type Props = {
  source: MDXRemoteSerializeResult;
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
  return (
    <StyledWrapper>
      <MDXRemote {...source} components={MdxComponents} />
    </StyledWrapper>
  );
};

export default MdxContent;
