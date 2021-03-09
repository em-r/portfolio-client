import React, { useState, useEffect, useContext } from "react";
import { Main } from "../../styles/Main";
import ProjectSummary from "./Summary";
import { useFetch } from "../../hooks";
import { globalContext } from "../../store/globalContext";

type Project = {
  name: string;
  description: string;
  stack: string[];
  links: { [key: string]: string };
  thumbnail: string;
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const fetchProjects = useFetch<{ projects: Project[] }>("projects");
  const {
    globalState: { menuToggle },
  } = useContext(globalContext);

  useEffect(() => {
    document.title = "EMR - Projects";
    const projectList = async () => {
      const list = await fetchProjects;
      if (!list) return null;
      setProjects(list.projects);
    };
    projectList();
    // eslint-disable-next-line
  }, []);

  return (
    <Main width="1000px" isHidden={menuToggle}>
      <header>Some of my work</header>
      <section className="projects">
        {projects &&
          projects.map((project) => (
            <ProjectSummary {...project} key={project.name} />
          ))}
      </section>
    </Main>
  );
};

export default Projects;
