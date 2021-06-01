import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { BiTimer, BiRightArrowCircle } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { BlogTags, Summary } from "../../styles/blog";

type LinkProps = {
  children: string | React.ReactNode;
  isOut: boolean;
  href: string;
};

const BlogLink: React.FC<LinkProps> = ({ href, isOut, children }) => {
  if (isOut) {
    return (
      <a href={`${href}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link to={`/blogs/${href}`}>{children}</Link>;
};

type Props = {
  id: string;
  title: string;
  publishedAt: string | Date;
  summary: string;
  readTime: number;
  routeId: string;
  tags: string[];
};

const BlogSummary: React.FC<Props> = ({
  title,
  publishedAt,
  summary,
  readTime,
  routeId,
  tags,
}) => {
  const isOut = routeId.startsWith("http");
  return (
    <Summary>
      <section className="body">
        <header>
          <BlogLink href={routeId} isOut={isOut}>
            {title}
          </BlogLink>
        </header>
        <p>{summary}</p>
        <BlogTags>
          {tags.map((tag, idx) => (
            <li className="blog-tag" key={idx}>
              {tag}
            </li>
          ))}
        </BlogTags>
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
          <BlogLink href={routeId} isOut={isOut}>
            <BiRightArrowCircle size={30} style={{ cursor: "pointer" }} />
          </BlogLink>
        </p>
      </section>
    </Summary>
  );
};

export default BlogSummary;
