import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import dayjs from "dayjs";
import { useLazyQuery, useQuery } from "@apollo/client";
import { getBlogAssets, getBlogByRoute } from "../../gql/blog";
import { Main } from "../../styles/Main";
import { Asset, BlogPostAsset, Post, PostData } from "./interfaces";
import {
  getAssetsFromPost,
  getPostFromCollection,
  findAssetURL,
} from "./utils";

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

  const renderOptions: Options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const url = findAssetURL(assets, node);
        if (!url) return null;
        return (
          <div>
            <img src={url} alt="output" />
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
      const blogPost = getPostFromCollection(items, 0);
      if (!blogPost) {
        setExists(false);
        return;
      }
      setPost(blogPost);
    }
  }, [data, loading]);

  useEffect(() => {
    if (post) {
      loadAssets({ variables: { id: post.id } });
    }
    // eslint-disable-next-line
  }, [post]);

  useEffect(() => {
    if (assetsData && assetsData.blogPost) {
      const postAssets = getAssetsFromPost(assetsData.blogPost);
      if (!postAssets) return;
      setAssets(postAssets);
    }
  }, [assetsData]);

  if (!loading && !exists) return <h2>NOT FOUND</h2>;

  if (!post) return null;

  return (
    <Main width="800px">
      <header>
        <span>{post.title}</span>
        <span className="date">
          {dayjs(post!.firstPublishedAt).format("DD/MM/YYYY")}
        </span>
      </header>
      {documentToReactComponents(post.content, renderOptions)}
    </Main>
  );
};

export default BlogDetails;
