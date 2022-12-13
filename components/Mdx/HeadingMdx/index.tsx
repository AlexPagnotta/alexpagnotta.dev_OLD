import Anchor from '/components/Anchor';
import { H2, H3 } from '/components/Text';

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  variant: 'h2' | 'h3';
};

const VariantComponent = {
  h2: H2,
  h3: H3,
};

const HeadingMdx = ({ id, variant, children, ...rest }: Props) => {
  const HeadingComponent = VariantComponent[variant];

  return id ? (
    <HeadingComponent id={id} {...rest}>
      <Anchor href={`#${id}`} variant='heading'>
        {children}
      </Anchor>
    </HeadingComponent>
  ) : (
    <HeadingComponent id={id} {...rest}>
      {children}
    </HeadingComponent>
  );
};

export default HeadingMdx;
