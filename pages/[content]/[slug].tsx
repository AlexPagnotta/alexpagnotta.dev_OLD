import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import MdxContent from '/components/Mdx';
import ContentLayout from '/layouts/ContentLayout';
import { contentTypePath, getAllContentSlugs, getContentBySlug } from '/lib/mdx';
import { ContentType, PostFrontmatter, ProjectFrontmatter, SnippetFrontmatter } from '/types/content';

type Props = {
  frontmatter: PostFrontmatter | ProjectFrontmatter | SnippetFrontmatter;
  source: string;
};

const Content = ({ frontmatter, source }: Props) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    // TODO: Replace with better UI
    return <div>Loading...</div>;
  }

  return (
    <ContentLayout
      title={frontmatter.title}
      description={
        frontmatter.type === ContentType.PROJECT || frontmatter.type === ContentType.SNIPPET
          ? frontmatter.subtitle
          : undefined
      }
      readingTime={frontmatter.type === ContentType.POST ? frontmatter.readingTime : undefined}
      tags={frontmatter.tags}
      publishDate={frontmatter.type === ContentType.POST ? frontmatter.date : undefined}
    >
      <MdxContent source={source} />
    </ContentLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const [postsSlugs, projectsSlugs, snippetsSlugs] = await Promise.all([
    getAllContentSlugs(ContentType.POST),
    getAllContentSlugs(ContentType.PROJECT),
    getAllContentSlugs(ContentType.SNIPPET),
  ]);

  const paths = [
    ...postsSlugs.map((slug) => ({
      params: {
        content: contentTypePath[ContentType.POST],
        slug: slug,
      },
    })),
    ...projectsSlugs.map((slug) => ({
      params: {
        content: contentTypePath[ContentType.PROJECT],
        slug: slug,
      },
    })),
    ...snippetsSlugs.map((slug) => ({
      params: {
        content: contentTypePath[ContentType.SNIPPET],
        slug: slug,
      },
    })),
  ];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const contentPath = params?.content as string;
    const slug = params?.slug as string;

    // Get content type from folder path
    // TODO: Improve types here (?)
    let contentType = undefined as ContentType | undefined;
    Object.entries(contentTypePath).forEach(([key, value]) => {
      if (value === contentPath) contentType = key as ContentType;
    });

    if (!contentType) return { notFound: true };

    const { frontmatter, source } = await getContentBySlug(contentType, slug);

    return {
      props: {
        frontmatter,
        source,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export default Content;
