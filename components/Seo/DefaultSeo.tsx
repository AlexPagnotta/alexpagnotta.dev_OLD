import { ArticleJsonLd, DefaultSeo as NextSeoDefault } from 'next-seo';

import siteConfig from '/config/site.mjs';

const DefaultSeo = () => {
  const { title, description, url, shareImage, twitterUsername, author } = siteConfig;

  return (
    <>
      <NextSeoDefault
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title: title,
          description: description,
          type: 'website',
          locale: 'en_IE',
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
          handle: twitterUsername,
          site: twitterUsername,
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
