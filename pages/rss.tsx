import { GetStaticProps } from 'next';

import { getAllContentFrontMatters } from '/lib/mdx';
import { generateRssFeed } from '/lib/rss';
import { ContentType } from '/types/content';

const Rss = () => null;

// This page is only used to generate the RSS feed on build time
// A page is used instead of a build script to reuse the mdx utilities
export const getStaticProps: GetStaticProps = async () => {
  const [posts, projects, snippets] = await Promise.all([
    getAllContentFrontMatters(ContentType.POST),
    getAllContentFrontMatters(ContentType.PROJECT),
    getAllContentFrontMatters(ContentType.SNIPPET),
  ]);

  const contents = [...posts, ...projects, ...snippets].sort(({ date: date1 }, { date: date2 }) =>
    date1 > date2 ? -1 : date1 < date2 ? 1 : 0
  );

  await generateRssFeed(contents);

  return {
    notFound: true,
  };
};

export default Rss;
