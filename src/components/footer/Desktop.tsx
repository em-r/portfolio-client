import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SFooter } from "../../styles/Main";

const items = [
  {
    icon: <FaGithub size="2em" />,
    link: "https://www.github.com/ElMehdi19",
  },
  {
    icon: <FaLinkedin size="2em" />,
    link: "https://www.linkedin.com/in/el-mehdi-rami-78bb6a182/",
  },
  {
    icon: <FaHackerrank size="2em" />,
    link: "https://www.hackerrank.com/iammehdi",
  },
];

const DesktopFooter: React.FC = () => {
  return (
    <SFooter className="desktop">
      {items.map(({ icon, link }) => (
        <a href={link}>{icon}</a>
      ))}
    </SFooter>
  );
};

export default DesktopFooter;
