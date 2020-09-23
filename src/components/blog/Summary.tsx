import React from "react";
import dayjs from "dayjs";

type Props = {
  id: number;
  title: string;
  posted: string;
  body: string;
  myRef?: (n: any) => void;
};

const BlogSummary: React.FC<Props> = ({ id, title, posted, body, myRef }) => {
  return (
    <section className="blog" ref={myRef}>
      <header>
        <a href={`/blogs/${id}`}>{title}</a>
        <span className="date">{dayjs(posted).format("DD/MM/YYYY")}</span>
      </header>
      <p>{body}</p>
    </section>
  );
};

export default BlogSummary;
