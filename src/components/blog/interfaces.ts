import { Document } from "@contentful/rich-text-types";

export interface BasePost {
  title: string;
  readTime: number;
  tags: string[];
  github: string;
  references: string[];
  codeSnippetsTags: string[];
}

export interface Post extends BasePost {
  id: string;
  firstPublishedAt: number;
  content: any;
}

export interface PostData extends BasePost {
  content: {
    json: any;
  };
  sys: {
    id: string;
    firstPublishedAt: number;
  };
}

export interface Asset {
  id: string;
  url: string;
}

export interface BlogPostAssetBlock {
  url: string;
  sys: {
    id: string;
  };
}

export interface BlogPostAsset {
  content: {
    links: {
      assets: {
        block: BlogPostAssetBlock[];
      };
    };
  };
}

export interface CodeSnippets {
  id: string;
  content: Document;
  language: string;
}