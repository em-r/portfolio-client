import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { BiTimer, BiRightArrowCircle } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { Summary } from "../../styles/blog";

type Props = {
  id: string;
  title: string;
  publishedAt: string | Date;
  summary: string;
  readTime: number;
  myRef?: (n: any) => void;
  routeId: string;
};

const BlogSummary: React.FC<Props> = ({
  title,
  publishedAt,
  summary,
  readTime,
  routeId,
  myRef,
}) => {
  return (
    <Summary ref={myRef}>
      <section className="body">
        <header>
          <Link to={`/blogs/${routeId}`}>{title}</Link>
        </header>
        <p>{summary}</p>
      </section>
      <section className="meta-data">
        <p title="Posted on">
          <FaCalendarAlt />
          <time dateTime={dayjs(publishedAt).format("DD/MM/YYYY")}>
            {dayjs(publishedAt).format("DD/MM/YYYY")}
          </time>
        </p>
        <p title="Time to read">
          <BiTimer size={22} />
          <span>{readTime} mins</span>
        </p>
        <p title="Read article">
          <Link to={`/blogs/${routeId}`}>
            <BiRightArrowCircle size={30} style={{ cursor: "pointer" }} />
          </Link>
        </p>
      </section>
    </Summary>
  );
};

export default BlogSummary;
