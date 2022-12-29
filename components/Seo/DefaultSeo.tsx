import { ArticleJsonLd, DefaultSeo as NextSeoDefault } from 'next-seo';

import { generateShareImageUrl } from '/utils/shareImages';

export const defaultSeoData = {
  title: 'TODO: Placeholder',
  description: 'TODO: Placeholder',
  url: process.env['NEXT_PUBLIC_URL'] || '',
  shareImage: {
    url: generateShareImageUrl(),
    width: 1200,
    height: 600,
  },
  ogType: 'website',
  ogLocale: 'en_IE',
  twitter: 'TODO: @Placeholder',
  author: 'Alex Pagnotta',
};

const DefaultSeo = () => {
  const { title, description, url, shareImage, ogType, ogLocale, twitter, author } = defaultSeoData;

  return (
    <>
      <NextSeoDefault
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title: title,
          description: description,
          type: ogType,
          locale: ogLocale,
          url: url,
          images: [
            {
              url: shareImage.url,
              alt: title,
              width: shareImage.width,
              height: shareImage.height,
            },
          ],
        }}
        twitter={{
          handle: twitter,
          site: twitter,
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        type='BlogPosting'
        title={title}
        description={description}
        authorName={author}
        url={url || ''}
        images={[shareImage.url]}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
      />
    </>
  );
};

export { DefaultSeo };
