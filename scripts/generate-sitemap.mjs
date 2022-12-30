/* eslint-disable no-console */
import { writeFileSync } from 'fs';

import chalk from 'chalk';
import { globby } from 'globby';
import prettier from 'prettier';

import siteConfig from '../config/site.mjs';

const generateSitemap = async () => {
  console.info(chalk.cyan('info'), ` - Generating sitemap`);

  const prettierConfig = await prettier.resolveConfig('./.prettierrc.json');

  // Get all the paths we need using globby, ignoring api folder, 404, _app.tsx etc.
  const pages = await globby([
    // Include
    'pages/*.tsx',
    'content/**/*.mdx',
    // Exclude
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx',
  ]);

  // Generate sitemap file based on the retrieved paths
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${pages
        .map((page) => {
          const path = page.replace('pages', '').replace('content', '').replace('.tsx', '').replace('.mdx', '');
          const route = path === '/index' ? '' : path;

          return `
            <url>
                <loc>${`${siteConfig.url}${route}`}</loc>
            </url>
          `;
        })
        .join('')}
  </urlset>
  `;

  // Format filw with prettier
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);
};

generateSitemap();
