import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import dayjs from "dayjs";
import { Main } from "../../styles/Main";
import { useQuery } from "@apollo/client";
import { getBlogByRoute } from "../../gql/blog";

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

const BlogDetails: React.FC<RouteComponentProps<{ routeId: string }>> = ({
  match,
}) => {
  const { routeId } = match.params;
  const [post, setPost] = useState<Post>();
  const [exists, setExists] = useState<boolean>(true);
  const { data, loading } = useQuery<{
    blogPostCollection: { items: PostData[] };
  }>(getBlogByRoute, {
    variables: { route: routeId },
  });

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
      console.log(blogPost);
      const {
        sys,
        content: { json },
        ...fields
      } = blogPost;
      setPost({ ...fields, ...sys, content: json });
    }
  }, [data, loading]);

  if (!loading && !exists) return <h2>NOT FOUND</h2>;

  if (!post) return null;

  return (
    <Main width="800px">
      <section className="blog">
        <header>
          <span>{post.title}</span>
          <span className="date">
            {dayjs(post!.firstPublishedAt).format("DD/MM/YYYY")}
          </span>
        </header>
        {/* <article>{body}</article> */}
      </section>
    </Main>
  );
};

export default BlogDetails;
