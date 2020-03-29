import React from "react";
import { Project } from "./projects";
import { ProjectInfo } from "./ProjectInfo";
import {
  blockColumnStyle,
  bodyStyle,
  projectImageStyle,
  separatorStyle,
  wrapperStyle
} from "./ProjectBlock.styles";

interface ProjectBlockProps {
  project: Project;
  imageLeft: boolean;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = props => {
  const { project, imageLeft } = props;
  return (
    <div style={wrapperStyle}>
      <ProjectSeparator />
      <div style={bodyStyle}>
        {imageLeft && (
          <div style={blockColumnStyle}>
            <ProjectImage project={project} />
          </div>
        )}
        <div style={blockColumnStyle}>
          <ProjectInfo project={project} />
        </div>
        {!imageLeft && (
          <div style={blockColumnStyle}>
            <ProjectImage project={project} />
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectSeparator: React.FC = () => {
  return <div style={separatorStyle}></div>;
};

const ProjectImage: React.FC<{ project: Project }> = props => {
  const { project } = props;

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <img
        alt={project.title}
        style={projectImageStyle}
        src={project.imgSrc}
      ></img>
    </a>
  );
};
