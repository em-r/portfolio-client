import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { useQuery } from "@apollo/client";
import BlogSummary from "./Summary";
import { getBlogs } from "../../gql/blog";
import { globalContext } from "../../store/globalContext";

type Post = {
  id: string;
  title: string;
  summary: string;
  readTime: number;
  publishedAt: string | Date;
  routeId: string;
  tags: string[];
};

type BlogPostItem = {
  title: string;
  summary: string;
  readTime: number;
  routeId: string;
  tags: string[];
  sys: {
    id: string;
    firstPublishedAt: string | Date;
  };
};

type BlogPostCollection = {
  total: number;
  items: BlogPostItem[];
};

const Blog: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [perPage] = useState<number>(2);
  const [, setPageNum] = useState<number>(0);
  const { data } = useQuery<{
    blogPostCollection: BlogPostCollection;
  }>(getBlogs);
  const { dispatch } = useContext(globalContext);

  const observer = useRef<any>();
  const lastPostRef = useCallback(
    (node: HTMLElement) => {
      if (observer && observer.current) {
        observer.current!.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && total > perPage) {
          setPageNum((pageNum) => pageNum + 1);
          setPosts([
            ...posts,
            ...allPosts.slice(posts.length, posts.length + perPage),
          ]);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    // eslint-disable-next-line
    [total]
  );

  useEffect(() => {
    document.title = "EMR - Blog";
  }, []);

  useEffect(() => {
    if (data) {
      const {
        blogPostCollection: { items },
      } = data;
      const blogPosts: Post[] = items.map(
        ({ sys, title, summary, readTime, routeId, tags }) => ({
          id: sys.id,
          title,
          summary,
          readTime,
          publishedAt: sys.firstPublishedAt,
          routeId,
          tags,
        })
      );
      setPosts(blogPosts.slice(0, perPage));
      setAllPosts(blogPosts);
      setTotal(total);
      dispatch({ type: "BLOGS_LOADED" });
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => setTotal(allPosts.length - posts.length), [allPosts, posts]);

  return (
    <section className="blogs">
      {posts &&
        posts.map((post, index) => {
          if (posts.length === index + 1) {
            return <BlogSummary {...post} key={post.id} myRef={lastPostRef} />;
          }
          return <BlogSummary {...post} key={post.id} />;
        })}
    </section>
  );
};

export default Blog;
