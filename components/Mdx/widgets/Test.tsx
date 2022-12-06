import tw, { styled } from 'twin.macro';

import Text from '../../Text';

type Props = {
  text: string;
};

const Wrapper = styled('div', {
  ...tw`bg-pink`,
});

const Test = ({ text }: Props) => {
  return (
    <Wrapper tw='text-yellow'>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Test;
