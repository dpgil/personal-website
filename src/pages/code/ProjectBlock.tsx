import React from "react";
import { Project } from "../../media/projects";

interface ProjectBlockProps {
  project: Project;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = props => {
  const { project } = props;
  return <div>{project.title}</div>;
};
