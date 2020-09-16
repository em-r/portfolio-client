import React from "react";
import { Main, Summary, Skills } from "../../styles/Main";

const skills = [
  {
    emoji: "🚀",
    title: "Backend developer",
    stack: ["Python", "Node.js", "Go"],
  },
  {
    emoji: "✨",
    title: "Frontend developer",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    emoji: "🐳",
    title: "DevOps experience",
    stack: ["Kuberneetes", "Docker", "Azure"],
  },
];

const RenderSkill: React.FC<{
  emoji: string;
  title: string;
  stack: string[];
}> = ({ emoji, title, stack }) => {
  return (
    <li>
      <h4>{emoji}</h4>
      <div>
        <h4>{title}</h4>
        <span>{stack.join(", ")}</span>
      </div>
    </li>
  );
};

const Home: React.FC = () => {
  return (
    <Main>
      <div>
        <Summary>
          <header>I build amazing experiences.</header>
        </Summary>
        <Skills>
          {skills.map((skill) => (
            <RenderSkill {...skill} key={skill.title} />
          ))}
        </Skills>
      </div>
    </Main>
  );
};

export default Home;
