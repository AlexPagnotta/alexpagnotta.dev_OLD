import tw from 'twin.macro';

import Text from '../Text';

import { styled } from '/stitches.config';

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

const StyledLabel = styled(Text, {
  ...tw`inline-block cursor-pointer select-none`,
});

const Label = ({ children, ...rest }: Props) => {
  return (
    <StyledLabel as='label' {...rest} variant='primary' size='body-3' weight='regular'>
      {children}
    </StyledLabel>
  );
};

export default Label;
