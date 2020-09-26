import React, { useEffect } from "react";
import { Main, Summary, Skills } from "../../styles/Main";

const skills = [
  {
    emoji: "🚀",
    title: "Backend developer",
    stack: ["Python", "Go", "Node.js"],
  },
  {
    emoji: "✨",
    title: "Frontend developer",
    stack: ["HTML/CSS", "JavaScript/TypeScript (ES6+)"],
  },
  {
    emoji: "🐳",
    title: "DevOps experience",
    stack: ["Docker", "Heroku"],
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
  useEffect(() => {
    document.title = "EMR - Home";
  });
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
