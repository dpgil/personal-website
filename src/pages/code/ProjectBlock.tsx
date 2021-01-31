import React from "react";
import { Project } from "./projects";
import { ProjectInfo } from "./ProjectInfo";
import { bodyStyle, separatorStyle, wrapperStyle } from "./ProjectBlock.styles";

interface ProjectBlockProps {
  project: Project;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = props => {
  const { project } = props;

  return (
    <div style={wrapperStyle}>
      <ProjectSeparator />
      <div style={bodyStyle}>
        <ProjectInfo project={project} />
      </div>
    </div>
  );
};

const ProjectSeparator: React.FC = () => {
  return <div style={separatorStyle}></div>;
};
