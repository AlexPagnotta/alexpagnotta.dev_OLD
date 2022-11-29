import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import tw from 'twin.macro';

import { styled } from '/stitches.config';

import MdxComponents from './Components';

type Props = {
  source: string;
};

const StyledWrapper = styled('div', {
  h2: tw`mt-[2em] mb-[1em]`,
  h3: tw`mt-[1.2em] mb-[0.6em]`,
  p: tw`mb-36`,
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
