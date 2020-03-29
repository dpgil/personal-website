import React from "react";
import { Project } from "../../media/projects";

const wrapperStyle: React.CSSProperties = {
  paddingBottom: 10
};

const separatorStyle: React.CSSProperties = {
  borderTop: "dotted black 2px",
  maxWidth: 120,
  margin: "auto",
  marginTop: 30,
  marginBottom: 20
};

interface ProjectBlockProps {
  project: Project;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = props => {
  const { project } = props;
  return (
    <div style={wrapperStyle}>
      <div style={separatorStyle}></div>
      {project.title}
    </div>
  );
};
