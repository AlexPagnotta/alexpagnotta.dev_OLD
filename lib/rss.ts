/* eslint-disable no-console */
import { writeFileSync } from 'fs';

import chalk from 'chalk';
import RSS from 'rss';

import { PostFrontmatter, ProjectFrontmatter, SnippetFrontmatter } from '/types/content';
import siteConfig from '/config/site.mjs';

export const generateRssFeed = async (contents: (PostFrontmatter | ProjectFrontmatter | SnippetFrontmatter)[]) => {
  try {
    const feed = new RSS({
      title: siteConfig.title,
      description: siteConfig.description,
      site_url: `${siteConfig.url}`,
      feed_url: `${siteConfig.url}/rss.xml`,
      image_url: siteConfig.shareImage.url,
      pubDate: new Date(),
      language: 'en',
    });

    contents.forEach((content) => {
      feed.item({
        title: content.title,
        description: content.subtitle,
        url: content.extendedSlug,
        date: content.date,
        author: siteConfig.author,
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
