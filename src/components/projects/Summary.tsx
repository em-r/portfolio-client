import React from "react";
import {
  DiGithub,
  DiPython,
  DiMarkdown,
  DiDocker,
  DiWebplatform,
} from "react-icons/di";

type Props = {
  name: string;
  description: string;
  stack: string[];
  links: { [key: string]: string };
  thumbnail: string;
};

const LinkIcon: React.FC<{ id: string; dim: number }> = ({ id, dim }) => {
  const title = id.toLowerCase().split(" ");
  switch (title[0]) {
    case "github":
      return <DiGithub size={dim} />;
    case "pypi":
      return <DiPython size={dim} />;
    case "docker":
      return <DiDocker size={dim} />;
    case "documentation":
      return <DiMarkdown size={dim} />;
    case "live":
      return <DiWebplatform size={dim} />;
    default:
      return null;
  }
};

const ProjectLink: React.FC<{ id: string; url: string }> = ({ id, url }) => {
  const style: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 5,
  };
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...style }}
    >
      <LinkIcon id={id} dim={50} />
      <span>{id}</span>
    </a>
  );
};

const ProjectSummary: React.FC<Props> = ({
  name,
  description,
  stack,
  links,
  thumbnail,
}) => {
  const linksTo = Object.keys(links);
  return (
    <section className="project">
      <div>
        <h2>{name}</h2>
        <details open>{description}</details>
        <p>Stack: {stack.join(", ")}</p>
        <div>
          <h4>Links</h4>
          {linksTo.map((link) => (
            <ProjectLink id={link} url={links[link]} key={link} />
          ))}
        </div>
      </div>
      <div>
        <img src={thumbnail} alt={name}></img>
      </div>
    </section>
  );
};

export default ProjectSummary;
