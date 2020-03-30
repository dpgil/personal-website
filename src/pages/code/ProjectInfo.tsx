import React from "react";
import { Project } from "./projects";
import { blockColumnStyle } from "./ProjectBlock.styles";
import GitHubIcon from "@material-ui/icons/GitHub";

const wrapperStyle: React.CSSProperties = {
  height: "100%"
};

const titleStyle: React.CSSProperties = {
  fontWeight: "bold",
  paddingBottom: 15,
  fontSize: 35
};

const descriptionStyle: React.CSSProperties = {
  fontSize: 20
};

export const ProjectInfo: React.FC<{ project: Project }> = props => {
  const { project } = props;

  return (
    <div style={blockColumnStyle}>
      <div style={wrapperStyle}>
        <div style={titleStyle}>{project.title}</div>
        <div style={descriptionStyle}>
          {project.description}
          <div style={{ paddingTop: 15 }}>
            <a
              style={{ color: "inherit", fontSize: "large" }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
