import React from "react";

interface Props {
  thumbnail: string;
  title: string;
}

const ProjectSummary: React.FC<Props> = ({ thumbnail, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default ProjectSummary;
