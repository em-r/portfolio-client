import React, { useState, useEffect, useContext } from "react";
import { Main } from "../../styles/Main";
import ProjectSummary from "./Summary";
import { globalContext } from "../../store/globalContext";
import { useQuery } from "@apollo/client";
import { getProjects } from "../../gql/project";

type Project = {
  name: string;
  description: string;
  stack: string[];
  links: { [key: string]: string };
  thumbnail: string;
};

type ProjectCollection = {
  items: Project[];
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { data } =
    useQuery<{ projectCollection: ProjectCollection }>(getProjects);
  const {
    globalState: { menuToggle },
  } = useContext(globalContext);

  useEffect(() => {
    document.title = "EMR - Projects";
  }, []);

  useEffect(() => {
    if (!data) return;
    setProjects(data.projectCollection.items);
  }, [data]);

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
