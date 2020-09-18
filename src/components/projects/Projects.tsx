import React from "react";
import { Main } from "../../styles/Main";
import ProjectSummary from "./Summary";

const projects = [
  {
    title: "HelloFlask",
    description:
      "HelloFlask is a CLI tool written in Python, that automates creating a Flask project and setting up its virtual environment",
    stack: ["Python"],
    links: {
      PyPi: "https://pypi.org/project/HelloFlask/",
      GitHub: "https://github.com/ElMehdi19/HelloFlask/tree/master/helloflask",
    },
    thumbnail:
      "https://www.pngfind.com/pngs/m/104-1044449_python-logo-clipart-drawing-flask-python-hd-png.png",
  },
];

const Projects: React.FC = () => {
  return (
    <Main width="1000px">
      <header>Some of my work</header>
      <section>
        {projects.map((project) => (
          <ProjectSummary {...project} />
        ))}
      </section>
    </Main>
  );
};

export default Projects;
