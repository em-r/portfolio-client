import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { BiTimer, BiRightArrowCircle } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { Summary } from "../../styles/blog";

type Props = {
  id: number;
  title: string;
  posted: string | Date;
  summary: string;
  myRef?: (n: any) => void;
};

const BlogSummary: React.FC<Props> = ({
  id,
  title,
  posted,
  summary,
  myRef,
}) => {
  return (
    <Summary ref={myRef}>
      <section className="body">
        <header>
          <Link to={`/blogs/${id}`}>{title}</Link>
        </header>
        <p>{summary}</p>
      </section>
      <section className="meta-data">
        <p title="Posted on">
          <FaCalendarAlt />
          <time dateTime={dayjs(posted).format("DD/MM/YYYY")}>
            {dayjs(posted).format("DD/MM/YYYY")}
          </time>
        </p>
        <p title="Time to read">
          <BiTimer size={22} />
          <span>6 mins</span>
        </p>
        <p title="Read article">
          <Link to={`/blogs/${id}`}>
            <BiRightArrowCircle size={30} style={{ cursor: "pointer" }} />
          </Link>
        </p>
      </section>
    </Summary>
  );
};

export default BlogSummary;
