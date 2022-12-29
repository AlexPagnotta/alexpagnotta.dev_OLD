import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export enum ContentType {
  POST = 'post',
  PROJECT = 'project',
  SNIPPET = 'snippet',
}

type BaseFrontmatter = {
  title: string;
  subtitle: string;
  excerpt?: string;
  date: string;
  tags: string[];
  slug: string;
  shareImageTitle?: string;
  extendedSlug: string;
};

export type PostFrontmatter = BaseFrontmatter & {
  type: ContentType.POST;
  updated?: string;
  readingTime?: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  source: MDXRemoteSerializeResult;
};

export type ProjectFrontmatter = BaseFrontmatter & {
  type: ContentType.PROJECT;
};

export type Project = {
  frontmatter: ProjectFrontmatter;
  source: MDXRemoteSerializeResult;
};

export type SnippetFrontmatter = BaseFrontmatter & {
  type: ContentType.SNIPPET;
};

export type Snippet = {
  frontmatter: SnippetFrontmatter;
  source: MDXRemoteSerializeResult;
};

export type ContentFrontmatter<T> = T extends ContentType.POST
  ? PostFrontmatter
  : T extends ContentType.PROJECT
  ? ProjectFrontmatter
  : SnippetFrontmatter;

export type Content<T> = T extends ContentType.POST ? Post : T extends ContentType.PROJECT ? Project : Snippet;
