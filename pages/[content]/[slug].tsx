import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import ContentLayout from '/layouts/ContentLayout';
import { contentTypePath, getAllContentSlugs, getContentBySlug } from '/lib/mdx';
import { ContentType, PostFrontmatter, ProjectFrontmatter, SnippetFrontmatter } from '/types/content';

type Props = {
  contentType: ContentType;
  frontmatter: PostFrontmatter | ProjectFrontmatter | SnippetFrontmatter;
  source: string;
};

const Content = ({ contentType, frontmatter, source }: Props) => {
  const { isFallback } = useRouter();

  const Component = useMemo(() => {
    if (!isFallback) return getMDXComponent(source);
  }, [source, isFallback]);

  if (isFallback || !Component) {
    // TODO: Replace with better UI
    return <div>Loading...</div>;
  }

  return (
    <ContentLayout
      title={frontmatter.title}
      description={'subtitle' in frontmatter ? frontmatter.subtitle : undefined}
      readingTime={'readingTime' in frontmatter ? frontmatter.readingTime : undefined}
      tags={frontmatter.tags}
      publishDate={contentType === ContentType.POST ? frontmatter.date : undefined}
    >
      <Component />
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
        content: ContentType.POST,
        slug: slug,
      },
    })),
    ...projectsSlugs.map((slug) => ({
      params: {
        content: ContentType.PROJECT,
        slug: slug,
      },
    })),
    ...snippetsSlugs.map((slug) => ({
      params: {
        content: ContentType.SNIPPET,
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
        contentType,
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
