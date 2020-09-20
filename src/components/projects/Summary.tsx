import React from "react";

interface Props {
  name: string;
  description: string;
  stack: string[];
  links: { [key: string]: string };
  thumbnail: string;
}

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
            <p>
              <a
                href={`${links[link]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </p>
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
