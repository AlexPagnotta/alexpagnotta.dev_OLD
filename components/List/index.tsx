import tw from 'twin.macro';

import { styled } from '/stitches.config';

type ListProps =
  | ({ variant: 'ordered' } & React.OlHTMLAttributes<HTMLOListElement>)
  | ({ variant: 'unordered' } & React.HTMLAttributes<HTMLUListElement>);

type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

const StyledList = styled('div', {
  ...tw`flex flex-col gap-16`,
  variants: {
    variant: {
      unordered: {
        '& > li': {
          '&:before': {
            ...tw`content-[""] w-8-px h-8-px translate-y-10 bg-current rounded-full`,
          },
        },
      },
      ordered: {
        counterReset: 'ordered-list',
        '& > li': {
          counterIncrement: 'ordered-list',
          '&:before': {
            content: "counters(ordered-list, '.') '. '",
            ...tw`font-bold`,
          },
        },
      },
    },
  },
});

const StyledListItem = styled('li', {
  ...tw`flex gap-18-px`,
});

const List = ({ variant, children, ...rest }: ListProps) => {
  return (
    <StyledList as={variant === 'ordered' ? 'ol' : 'ul'} variant={variant} {...rest}>
      {children}
    </StyledList>
  );
};

const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <StyledListItem {...rest}>
      <div>{children}</div>
    </StyledListItem>
  );
};

List.Item = ListItem;

export default List;
