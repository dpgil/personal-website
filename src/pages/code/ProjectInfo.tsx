import React from "react";
import { Project } from "./projects";

const wrapperStyle: React.CSSProperties = {
  height: "100%"
};

const titleStyle: React.CSSProperties = {
  fontWeight: "bold",
  paddingBottom: 10
};

const descriptionStyle: React.CSSProperties = {
  fontSize: 20
};

export const ProjectInfo: React.FC<{ project: Project }> = props => {
  const { project } = props;

  return (
    <div style={wrapperStyle}>
      <div style={titleStyle}>{project.title}</div>
      <div style={descriptionStyle}>{project.description}</div>
    </div>
  );
};
