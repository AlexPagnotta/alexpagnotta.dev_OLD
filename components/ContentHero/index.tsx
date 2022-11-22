import format from 'date-fns/format';

import Chip from '../Chip';
import Text, { H1 } from '../Text';

export type Props = {
  tags?: string[];
  title: string;
  publishDate?: string;
  readingTime?: string;
  description?: string;
};

const ContentHero = ({ tags, title, publishDate, readingTime, description }: Props) => {
  const publishDateParsed = publishDate && new Date(Date.parse(publishDate));
  const publishDateMonth = publishDateParsed && format(publishDateParsed, 'MM');
  const publishDateYear = publishDateParsed && format(publishDateParsed, 'yyyy');

  return (
    <>
      {!!tags?.length && (
        <div tw='flex gap-16-px mb-16'>
          {tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      )}

      <H1>{title}</H1>

      {(publishDate || readingTime) && (
        <Text size='body-2' weight='bold' tw='mt-4'>
          {publishDate && (
            <time dateTime={publishDate}>
              <span tw='opacity-50'>{publishDateMonth}</span>
              <span>{publishDateYear}</span>
            </time>
          )}
          {publishDate && readingTime && <span aria-hidden> - </span>}
          {readingTime && <span>{readingTime}</span>}
        </Text>
      )}

      {description && (
        <Text size='body-3' as='p' tw='mt-4'>
          {description}
        </Text>
      )}
    </>
  );
};

export default ContentHero;
