import React from "react";

interface Props {
  title: string;
  description: string;
  stack: string[];
  links: { [key: string]: string };
  thumbnail: string;
}

const ProjectSummary: React.FC<Props> = ({
  title,
  description,
  stack,
  links,
  thumbnail,
}) => {
  const linksTo = Object.keys(links);
  return (
    <section className="project">
      <div>
        <h2>{title}</h2>
        <details open>{description}</details>
        <p>Stack: {stack.join(", ")}</p>
        <div>
          <h4>Links</h4>
          {linksTo.map((link) => (
            <p>
              <a href={`${links[link]}`} target="_blank">
                {link}
              </a>
            </p>
          ))}
        </div>
      </div>
      <div>
        <img src={thumbnail}></img>
      </div>
    </section>
  );
};

export default ProjectSummary;
