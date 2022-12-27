import { DefaultSeo as NextSeoDefault } from 'next-seo';

export const defaultSeoData = {
  title: 'Title Placeholder',
  description: 'Description Placeholder',
  url: process.env['NEXT_PUBLIC_URL'],
  ogType: 'website',
  ogLocale: 'en_IE',
  twitter: '@placeholder',
};

const DefaultSeo = () => {
  const { title, description, url, ogType, ogLocale, twitter } = defaultSeoData;

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
      {/* TODO: Schema.org data */}
    </>
  );
};

export { DefaultSeo };
