import { NextSeo } from 'next-seo';

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
    props.type === 'article' && props.updatedDate ? new Date(props.updatedDate).toISOString() : publishedDate;

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
      {/* TODO: Schema.org data */}
    </>
  );
};

export { Seo };
