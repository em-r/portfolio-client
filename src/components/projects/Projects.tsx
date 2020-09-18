import React, { useState, useEffect } from "react";
import { Main } from "../../styles/Main";
import ProjectSummary from "./Summary";
import { useFetch } from "../../hooks";

type Project = {
  title: string;
  description: string;
  stack: string[];
  links: { [key: string]: string };
  thumbnail: string;
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const fetchProjects = useFetch<{ projects: Project[] }>("projects");

  useEffect(() => {
    const projectList = async () => {
      const list = await fetchProjects;
      if (!list) return null;
      setProjects(list.projects);
    };
    projectList();
  }, []);

  return (
    <Main width="1000px">
      <header>Some of my work</header>
      <section>
        {projects && projects.map((project) => <ProjectSummary {...project} />)}
      </section>
    </Main>
  );
};

export default Projects;
