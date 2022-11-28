import fs from 'fs';
import path from 'path';

import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';

import { Content, ContentFrontmatter, ContentType } from '/types/content';

const basePath = process.cwd();

const contentFolder = path.join(basePath, 'content');

export const contentTypePath = {
  [ContentType.POST]: 'posts',
  [ContentType.PROJECT]: 'projects',
  [ContentType.SNIPPET]: 'snippets',
} as const;

export const getAllContentPaths = async (type: ContentType) => {
  return fs.readdirSync(path.join(contentFolder, contentTypePath[type]));
};

export const getAllContentSlugs = async (type: ContentType) => {
  const files = await getAllContentPaths(type);

  return files.map((file) => file.replace(/\.mdx/, ''));
};

export const getAllContentFrontMatters = async <T extends ContentType>(type: T) => {
  const files = await getAllContentPaths(type);

  return files.map((file) => {
    const fileSource = fs.readFileSync(path.join(contentFolder, contentTypePath[type], file), 'utf8');

    const { data } = matter(fileSource);

    const slug = file.replace(/\.mdx/, '');

    return {
      ...data,
      type,
      slug,
      extendedSlug: `${contentTypePath[type]}/${slug}`,
    } as ContentFrontmatter<T>;
  });
};

export const getContentBySlug = async <T extends ContentType>(type: T, slug: string) => {
  const fileSource = fs.readFileSync(path.join(contentFolder, contentTypePath[type], `${slug}.mdx`), 'utf8');

  const { code: source, frontmatter } = await bundleMDX({
    source: fileSource,
  });

  return {
    frontmatter: {
      ...frontmatter,
      type,
      slug,
      extendedSlug: `${contentTypePath[type]}/${slug}`,
      ...(type === ContentType.POST ? { readingTime: Math.ceil(readingTime(source).minutes).toString() } : undefined),
    },
    source,
  } as Content<T>;
};
