

export interface BasePost {
  title: string;
  readTime: number;
  tags: string[];
  github: string;
  references: string[];
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