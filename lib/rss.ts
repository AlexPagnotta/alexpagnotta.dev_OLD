/* eslint-disable no-console */
import { writeFileSync } from 'fs';

import chalk from 'chalk';
import RSS from 'rss';

import { PostFrontmatter, ProjectFrontmatter, SnippetFrontmatter } from '/types/content';
import { defaultSeoData } from '/components/Seo/DefaultSeo';

export const generateRssFeed = async (contents: (PostFrontmatter | ProjectFrontmatter | SnippetFrontmatter)[]) => {
  try {
    const feed = new RSS({
      title: defaultSeoData.title,
      description: defaultSeoData.description,
      site_url: 'https://alexpagnotta.com',
      feed_url: `https://alexpagnotta.com/rss.xml`,
      image_url: defaultSeoData.shareImage.url,
      pubDate: new Date(),
      language: 'en',
    });

    contents.forEach((content) => {
      feed.item({
        title: content.title,
        description: content.subtitle,
        url: content.extendedSlug,
        date: content.date,
        author: defaultSeoData.author,
      });
    });

    const rss = feed.xml({ indent: true });
    writeFileSync('public/rss.xml', rss);
  } catch (error) {
    console.error(chalk.red('error'), ` - An error occurred while generating the RSS feed`);
    console.error(error);
    process.exit(1);
  }
};
