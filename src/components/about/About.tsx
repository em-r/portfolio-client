import React from "react";
import { Main } from "../../styles/Main";

const dummy = [
  {
    title: "Programming Languages",
    stack: ["Python", "JavaScript", "TypeScript", "Go"],
  },
  {
    title: "Backend",
    stack: ["Flask", "Django", "NodeJS", "Apollo", "GraphQL"],
  },
  {
    title: "Frontend",
    stack: [
      "HTML/CSS",
      "React",
      "Redux",
      "NextJS",
      "ApolloClient",
      "Styled Components",
    ],
  },
  {
    title: "UI Frameworks",
    stack: ["Ant Design", "Material UI", "Framer Motion"],
  },
  {
    title: "SQL/NoSQL Databases",
    stack: ["SQLLite", "Postgres", "MySQL", "MongoDB", "DynamiteDB"],
  },
  {
    title: "ORM/ODM",
    stack: ["SQLAlchemy", "Django ORM", "TypeORM", "Mongoose"],
  },
  {
    title: "Testing",
    stack: ["Pytest", "Jest", "Mocha", "Selenium"],
  },
  {
    title: "Data Visualization",
    stack: ["Matplotlib", "D3", "Three.js"],
  },
];

const RenderSkill: React.FC<{ skill: { title: string; stack: string[] } }> = ({
  skill,
}) => {
  const { title, stack } = skill;
  return (
    <div className="skill">
      <h3>➡️ {title}</h3>
      <p>{stack.join(", ")}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <Main width="800px">
      <header>
        Hey 👋, my name is Mehdi, I'm a software developer with a mechanical
        engineering background.
      </header>
      <section>
        <header>Technical Skills:</header>
        <div>
          {dummy.map((skill) => (
            <RenderSkill skill={skill} key={skill.title} />
          ))}
        </div>
      </section>
    </Main>
  );
};

export default About;
