import React from "react";

type Props = {
  id: number;
  title: string;
  date: string;
  body: string;
  myRef?: (n: any) => void;
};

const BlogSummary: React.FC<Props> = ({ id, title, date, body, myRef }) => {
  return (
    <section className="blog" ref={myRef}>
      <header>
        <a href={`/blogs/${id}`} className="App-link">
          {title}
        </a>
        <span className="date">{date}</span>
      </header>
      <p>{body}</p>
    </section>
  );
};

export default BlogSummary;
