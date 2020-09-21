import React, { useState, useEffect } from "react";
import { Main } from "../../styles/Main";
import { useFetch } from "../../hooks";

type Skill = {
  title: string;
  stack: string[];
};
const RenderSkill: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { title, stack } = skill;

  return (
    <div className="skill">
      <h3>
        <span role="img" aria-label="arrow">
          ➡️
        </span>{" "}
        {title}
      </h3>
      <p>{stack.join(", ")}</p>
    </div>
  );
};

const About: React.FC = () => {
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const fetchSkills = useFetch<{ skills: Skill[] }>("skills");
  useEffect(() => {
    document.title = "EMR - About";
    const skillsList = async () => {
      const list = await fetchSkills;
      if (!list) return;
      setSkills(list.skills);
    };
    skillsList();
    // eslint-disable-next-line
  }, []);
  return (
    <Main width="800px">
      <header>
        Hey{" "}
        <span role="img" aria-label="waving">
          👋
        </span>
        , my name is Mehdi, I'm a software developer with a mechanical
        engineering background.
      </header>
      <section>
        <header>Technical Skills:</header>
        <div>
          {skills &&
            skills.map((skill) => (
              <RenderSkill skill={skill} key={skill.title} />
            ))}
        </div>
      </section>
    </Main>
  );
};

export default About;
