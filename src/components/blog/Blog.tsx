import React, { useState, useEffect, useRef, useCallback } from "react";
import { useFetch } from "../../hooks";
import BlogSummary from "./Summary";
import { Main } from "../../styles/Main";
import { blogs } from "./dummy";

type Post = {
  id: number;
  title: string;
  body: string;
  // tags: string[];
  date: string;
};

const Blog: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [perPage] = useState<number>(4);
  const [pageNum, setPageNum] = useState<number>(0);
  // const fetchPosts = useFetch<{ total: number; blogs: Post[] }>("blog");

  const observer = useRef<any>();
  const lastPostRef = useCallback(
    (node: HTMLElement) => {
      if (observer && observer.current) {
        observer.current!.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log(posts);
          setPosts([
            ...posts,
            ...blogs.slice(posts.length, posts.length + perPage),
          ]);
          console.log(blogs);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [total]
  );

  useEffect(() => {
    const postsList = async () => {
      // const list = await fetchPosts;
      // if (!list) return null;
      // const { total, blogs } = list;
      // setTotal(total);
      // setPosts(blogs.slice(0,perPage));
      // setAllPosts(blogs.slice(perPage));
      setAllPosts(blogs);
      setTotal(blogs.length);
      setPosts(blogs.slice(0, perPage));
      setPageNum((pageNum) => pageNum + 1);
    };
    postsList();
  }, []);

  useEffect(() => setHasMore(total > 0), [blogs]);

  return (
    <Main width="800px">
      <section className="blogs">
        {posts &&
          posts.map((post, index) => {
            if (posts.length === index + 1) {
              return (
                <BlogSummary {...post} key={post.id} myRef={lastPostRef} />
              );
            }
            return <BlogSummary {...post} key={post.id} />;
          })}
      </section>
    </Main>
  );
};

export default Blog;
