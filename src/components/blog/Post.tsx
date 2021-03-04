import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import dayjs from "dayjs";
import { useFetch } from "../../hooks";
import { Main } from "../../styles/Main";

type Blog = {
  id: number;
  title: string;
  body: string;
  posted: string;
};

const BlogDetails: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const { id } = match.params;
  const [blog, setBlog] = useState<Blog>();
  const fetchBlog = useFetch<{ blog: Blog }>("blog", { id: parseInt(id) });

  useEffect(() => {
    document.title = "EMR - Blog";
    const blogDetails = async () => {
      const details = await fetchBlog;
      if (!details) return;
      setBlog(details.blog);
    };
    blogDetails();
    // eslint-disable-next-line
  }, []);

  if (!blog) return null;

  const { title, body, posted } = blog;

  return (
    <Main width="800px">
      <section className="blog">
        <header>
          <span>{title}</span>
          <span className="date">{dayjs(posted).format("DD/MM/YYYY")}</span>
        </header>
        <article>{body}</article>
      </section>
    </Main>
  );
};

export default BlogDetails;
