import React from "react";
import { Project } from "./projects";
import { blockColumnStyle } from "./ProjectBlock.styles";
import GitHubIcon from "@material-ui/icons/GitHub";

const wrapperStyle: React.CSSProperties = {
  height: "100%",
  textAlign: "left"
};

const titleStyle: React.CSSProperties = {
  fontWeight: "bold",
  paddingBottom: 15,
  fontSize: 30,
  display: "inline-block"
};

const descriptionStyle: React.CSSProperties = {
  fontSize: 20
};

const githubIconStyle: React.CSSProperties = {
  paddingLeft: 10,
  color: "inherit"
};

export const ProjectInfo: React.FC<{ project: Project }> = props => {
  const { project } = props;

  return (
    <div style={blockColumnStyle}>
      <div style={wrapperStyle}>
        <a href={project.link} style={{ color: "inherit" }}>
          <div style={titleStyle}>{project.title}</div>
        </a>
        <a style={githubIconStyle} href={project.github}>
          <GitHubIcon />
        </a>
        <div style={descriptionStyle}>{project.description}</div>
      </div>
    </div>
  );
};
