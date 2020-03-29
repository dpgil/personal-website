import React from "react";
import { Project } from "./projects";

export const ProjectInfo: React.FC<{ project: Project }> = props => {
  const { project } = props;

  return (
    <>
      <span>{project.title}</span>
      {project.description}
    </>
  );
};
