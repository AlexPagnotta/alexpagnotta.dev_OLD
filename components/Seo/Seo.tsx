import { ArticleJsonLd, NextSeo } from 'next-seo';

import { defaultSeoData } from './DefaultSeo';

type Props = {
  title?: string;
  description?: string;
  route?: string;
  //   image?: string; TODO
} & (
  | {
      type: 'article';
      publishedDate: string;
      updatedDate?: string;
    }
  | { type: 'website' }
);

const Seo = ({ title, description, route, ...props }: Props) => {
  const seoUrl = route ? `${process.env['NEXT_PUBLIC_URL']}/${route}` : undefined;

  const publishedDate = props.type === 'article' ? new Date(props.publishedDate).toISOString() : undefined;
  const updatedDate =
    props.type === 'article' && props.updatedDate ? new Date(props.updatedDate).toISOString() : undefined;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seoUrl}
        openGraph={{
          type: props.type,
          ...(props.type === 'article'
            ? {
                article: {
                  publishedTime: publishedDate,
                  modifiedTime: updatedDate || publishedDate,
                },
              }
            : {}),
          title,
          description,
          url: seoUrl,
          //   images: TODO
        }}
      />
      <ArticleJsonLd
        type={props.type === 'article' ? 'Article' : 'BlogPosting'}
        title={title || defaultSeoData.title}
        description={description || defaultSeoData.title}
        authorName={defaultSeoData.author}
        url={seoUrl || defaultSeoData.url}
        // TODO
        images={[]}
        {...(props.type === 'article'
          ? {
              // TODO: : Use custom image or link to big size favicon
              publisherLogo: '',
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
