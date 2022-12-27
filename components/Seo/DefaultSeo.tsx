import { ArticleJsonLd, DefaultSeo as NextSeoDefault } from 'next-seo';

export const defaultSeoData = {
  title: 'Title Placeholder',
  description: 'Description Placeholder',
  url: process.env['NEXT_PUBLIC_URL'] || '',
  ogType: 'website',
  ogLocale: 'en_IE',
  twitter: '@placeholder',
  author: 'Alex Pagnotta',
};

const DefaultSeo = () => {
  const { title, description, url, ogType, ogLocale, twitter, author } = defaultSeoData;

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
          // images: [], TODO
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
        // TODO
        images={[]}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
      />
    </>
  );
};

export { DefaultSeo };
