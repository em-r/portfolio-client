import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import dayjs from "dayjs";
import { Main } from "../../styles/Main";
import { useLazyQuery, useQuery } from "@apollo/client";
import { getBlogAssets, getBlogByRoute } from "../../gql/blog";
import { Block, Inline } from "@contentful/rich-text-types";

interface BasePost {
  title: string;
  readTime: number;
  tags: string[];
  github: string;
  references: string[];
}

interface Post extends BasePost {
  id: string;
  firstPublishedAt: number;
  content: any;
}

interface PostData extends BasePost {
  content: {
    json: any;
  };
  sys: {
    id: string;
    firstPublishedAt: number;
  };
}

interface Asset {
  id: string;
  url: string;
}

interface BlogPostAssetBlock {
  url: string;
  sys: {
    id: string;
  };
}

interface BlogPostAsset {
  content: {
    links: {
      assets: {
        block: BlogPostAssetBlock[];
      };
    };
  };
}

const BlogDetails: React.FC<RouteComponentProps<{ routeId: string }>> = ({
  match,
}) => {
  const { routeId } = match.params;
  const [post, setPost] = useState<Post>();
  const [exists, setExists] = useState<boolean>(true);
  const [assets, setAssets] = useState<Asset[]>([]);
  const { data, loading } = useQuery<{
    blogPostCollection: { items: PostData[] };
  }>(getBlogByRoute, {
    variables: { route: routeId },
  });
  const [loadAssets, { data: assetsData }] = useLazyQuery<{
    blogPost: BlogPostAsset;
  }>(getBlogAssets);

  const findAssetURL = (node: Block | Inline): string | null => {
    const { data } = node;
    const asset = assets.find(({ id }) => id === data.target.sys.id);
    console.log("ASSET: ", asset);
    if (!asset) return null;
    return asset.url;
  };

  const renderOptions: Options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const url = findAssetURL(node);
        if (!url) return null;
        return (
          <div>
            <img src={url} />
          </div>
        );
      },
    },
  };

  useEffect(() => {
    document.title = "EMR - Blog";
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!loading && data) {
      const {
        blogPostCollection: { items },
      } = data;
      if (items.length === 0) {
        setExists(false);
        return;
      }
      const blogPost = items[0];
      const {
        sys,
        content: { json },
        ...fields
      } = blogPost;

      setPost({ ...fields, ...sys, content: json });
    }
  }, [data, loading]);

  useEffect(() => {
    if (post) {
      loadAssets({ variables: { id: post.id } });
    }
  }, [post]);

  useEffect(() => {
    if (assetsData && assetsData.blogPost) {
      const { content } = assetsData.blogPost;
      const { block } = content.links.assets;

      if (!block) return;

      const postAssets: Asset[] = [];
      block.forEach((asset) => {
        const {
          sys: { id },
          url,
        } = asset;
        postAssets.push({ id, url });
      });

      setAssets(postAssets);
    }
  }, [assetsData]);

  if (!loading && !exists) return <h2>NOT FOUND</h2>;

  if (!post) return null;

  // const Body = documentToReactComponents(post.content);

  return (
    <Main width="800px">
      {/* <section className="blog"> */}
      <header>
        <span>{post.title}</span>
        <span className="date">
          {dayjs(post!.firstPublishedAt).format("DD/MM/YYYY")}
        </span>
      </header>
      {documentToReactComponents(post.content, renderOptions)}
      {/* </section> */}
    </Main>
  );
};

export default BlogDetails;
