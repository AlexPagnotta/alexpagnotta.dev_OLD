import { ArticleJsonLd, NextSeo } from 'next-seo';

import { defaultSeoData } from './DefaultSeo';

import { generateShareImageUrl } from '/utils/shareImages';

type Props = {
  title?: string;
  description?: string;
  route?: string;
  shareImageTitle?: string;
} & (
  | {
      type: 'content';
      publishedDate: string;
      updatedDate?: string;
    }
  | { type: 'page' }
);

const Seo = ({ title, description, route, shareImageTitle, ...props }: Props) => {
  const seoUrl = route ? `${process.env['NEXT_PUBLIC_URL']}/${route}` : undefined;

  const publishedDate = props.type === 'content' ? new Date(props.publishedDate).toISOString() : undefined;
  const updatedDate =
    props.type === 'content' && props.updatedDate ? new Date(props.updatedDate).toISOString() : undefined;

  const shareImageUrl = generateShareImageUrl(shareImageTitle || title);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seoUrl}
        openGraph={{
          ...(props.type === 'content'
            ? {
                type: 'article',
                article: {
                  publishedTime: publishedDate,
                  modifiedTime: updatedDate || publishedDate,
                },
              }
            : {
                type: 'website',
              }),
          title,
          description,
          url: seoUrl,
          images: [
            {
              url: shareImageUrl,
              alt: title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        type={props.type === 'content' ? 'Article' : 'BlogPosting'}
        title={title || defaultSeoData.title}
        description={description || defaultSeoData.title}
        authorName={defaultSeoData.author}
        url={seoUrl || defaultSeoData.url}
        images={[shareImageUrl]}
        {...(props.type === 'content'
          ? {
              publisherLogo: '/static/favicons/android-chrome-512x512.png',
              publisherName: defaultSeoData.author,
            }
          : {})}
        datePublished={publishedDate || new Date().toISOString()}
        dateModified={updatedDate || publishedDate || new Date().toISOString()}
      />
    </>
  );
};

export { Seo };
