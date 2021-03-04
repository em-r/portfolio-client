import React from "react";
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
          <a href={`/blogs/${id}`}>{title}</a>
        </header>
        <p>{summary}</p>
      </section>
      <section className="meta-data">
        <p>
          <FaCalendarAlt />
          <time dateTime={dayjs(posted).format("DD/MM/YYYY")}>
            {dayjs(posted).format("DD/MM/YYYY")}
          </time>
        </p>
        <p>
          <BiTimer size={22} />
          <span>6 mins</span>
        </p>
        <p>
          <BiRightArrowCircle size={30} style={{ cursor: "pointer" }} />
        </p>
      </section>
    </Summary>
  );
};

export default BlogSummary;
