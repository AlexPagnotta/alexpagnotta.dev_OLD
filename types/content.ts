export enum ContentType {
  POST = 'post',
  PROJECT = 'project',
  SNIPPET = 'snippet',
}

type BaseFrontmatter = {
  title: string;
  excerpt?: string;
  date: string;
  tags: string[];
  slug: string;
};

export type PostFrontmatter = BaseFrontmatter & {
  readingTime?: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  source: string;
};

export type ProjectFrontmatter = BaseFrontmatter & {
  subtitle?: string;
};

export type Project = {
  frontmatter: ProjectFrontmatter;
  source: string;
};

export type SnippetFrontmatter = BaseFrontmatter & {
  subtitle?: string;
};

export type Snippet = {
  frontmatter: SnippetFrontmatter;
  source: string;
};

export type ContentFrontmatter<T> = T extends ContentType.POST
  ? PostFrontmatter
  : T extends ContentType.PROJECT
  ? ProjectFrontmatter
  : SnippetFrontmatter;

export type Content<T> = T extends ContentType.POST ? Post : T extends ContentType.PROJECT ? Project : Snippet;
