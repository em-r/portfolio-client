import { Block, Inline } from "@contentful/rich-text-types";
import { BlogPostAsset, Asset, PostData, Post } from "./interfaces";

export const getAssetsFromPost = (postAssets: BlogPostAsset): Asset[] => {
      const { content } = postAssets;
      const { block } = content.links.assets;

      if (!block) return [];


      const assets: Asset[] = [];
      block.forEach((asset) => {
        const {
          sys: { id },
          url,
        } = asset;
        assets.push({ id, url });
      });

      return assets;
}

export const getPostFromCollection = (data: PostData[], index: number): Post | null => {
      if (data.length === 0) return null;
      const blogPost = data[index];
      const {
        sys,
        content: { json },
        ...fields
      } = blogPost;
      return { ...fields, ...sys, content: json };

}


export const findAssetURL = (assets: Asset[], node: Block | Inline): string | null => {
    const { data } = node;
    const asset = assets.find(({ id }) => id === data.target.sys.id);
    if (!asset) return null;
    return asset.url;
};