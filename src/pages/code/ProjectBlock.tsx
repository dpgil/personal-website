import React from "react";
import { Project } from "../../media/projects";
import {
  bodyStyle,
  projectImageStyle,
  projectImageWrapperStyle,
  projectInfoStyle,
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
        {imageLeft && <ProjectImage project={project} />}
        <ProjectInfo project={project} />
        {!imageLeft && <ProjectImage project={project} />}
      </div>
    </div>
  );
};

const ProjectSeparator: React.FC = () => {
  return <div style={separatorStyle}></div>;
};

const ProjectInfo: React.FC<{ project: Project }> = props => {
  const { project } = props;

  return <div style={projectInfoStyle}>{project.title}</div>;
};

const ProjectImage: React.FC<{ project: Project }> = props => {
  const { project } = props;

  return (
    <div style={projectImageWrapperStyle}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          alt={project.title}
          style={projectImageStyle}
          src={project.imgSrc}
        ></img>
      </a>
    </div>
  );
};
