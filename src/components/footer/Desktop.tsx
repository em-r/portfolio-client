import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SFooter } from "../../styles/Main";

const items = [
  {
    id: 1,
    icon: <FaGithub size="2em" />,
    link: "https://www.github.com/ElMehdi19",
  },
  {
    id: 2,
    icon: <FaLinkedin size="2em" />,
    link: "https://www.linkedin.com/in/el-mehdi-rami/",
  },
  {
    id: 3,
    icon: <FaHackerrank size="2em" />,
    link: "https://www.hackerrank.com/iammehdi",
  },
];

const DesktopFooter: React.FC = () => {
  return (
    <SFooter className="desktop">
      {items.map(({ icon, link, id }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
          {icon}
        </a>
      ))}
    </SFooter>
  );
};

export default DesktopFooter;
