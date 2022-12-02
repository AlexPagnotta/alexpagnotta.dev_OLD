import NextImage, { ImageProps } from 'next/image';

import Text from '../Text';

const ImageMdx = (props: ImageProps) => {
  return (
    <figure tw='mb-36'>
      <NextImage
        quality={75}
        layout='responsive'
        sizes='(max-width: 768px) 100vw,
              750px'
        tw='rounded-lg'
        {...props}
      />
      <Text as='figcaption' size='body-1' variant='secondary' weight='semibold' tw='pt-8'>
        {props.alt}
      </Text>
    </figure>
  );
};

export default ImageMdx;
