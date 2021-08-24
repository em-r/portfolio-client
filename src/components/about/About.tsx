import React, { useState, useEffect, useContext } from "react";
import { Main } from "../../styles/Main";
import { globalContext } from "../../store/globalContext";
import { useQuery } from "@apollo/client";
import { getSkills } from "../../gql/skills";

type Skill = {
  title: string;
  stack: string[];
};

type SkillCollection = {
  items: Skill[];
};

type Props = {
  skill: Skill;
  emoji: string;
};

const RenderSkill: React.FC<Props> = ({ skill, emoji }) => {
  const { title, stack } = skill;

  return (
    <div className="skill">
      <h3>
        <span role="img" aria-label="arrow">
          {emoji}
        </span>{" "}
        {title}
      </h3>
      <p>{stack.join(", ")}</p>
    </div>
  );
};

const About: React.FC = () => {
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const { data } = useQuery<{ skillsCollection: SkillCollection }>(getSkills);
  const {
    globalState: { menuToggle, theme },
  } = useContext(globalContext);

  const emojis = ["👨🏻‍💻", "🚀", "✨", "💾", "🔗", "🐳"];
  useEffect(() => {
    document.title = "EMR - About";
  }, []);

  useEffect(() => {
    if (!data) return;
    setSkills(data.skillsCollection.items);
  }, [data]);

  return (
    <Main width="800px" isHidden={menuToggle}>
      <header>
        Hey{" "}
        <span role="img" aria-label="waving">
          👋🏻
        </span>
        , my name is Mehdi, I'm a software developer with a mechanical
        engineering background. Also I'm the biggest fan of{" "}
        <a
          href="https://www.imdb.com/title/tt0386676/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ color: theme === "light" ? "#0555ea" : "#61dafb" }}>
            The Office
          </span>
          .
        </a>
      </header>
      <section>
        <header>Technical Skills:</header>
        <div style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
          {skills &&
            skills.map((skill, idx) => (
              <RenderSkill
                skill={skill}
                key={skill.title}
                emoji={emojis[idx]}
              />
            ))}
        </div>
      </section>
    </Main>
  );
};

export default About;
