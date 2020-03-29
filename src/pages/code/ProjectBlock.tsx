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
  left: boolean;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = props => {
  const { project, left } = props;
  return (
    <div style={wrapperStyle}>
      <div style={separatorStyle}></div>
      <div style={bodyStyle}>
        {left && <ProjectImage src={project.imgSrc} alt={project.title} />}
        <ProjectInfo project={project} />
        {!left && <ProjectImage src={project.imgSrc} alt={project.title} />}
      </div>
    </div>
  );
};

const ProjectInfo: React.FC<{ project: Project }> = props => {
  const { project } = props;

  return <div style={projectInfoStyle}>{project.title}</div>;
};

const ProjectImage: React.FC<{ alt: string; src: string }> = props => {
  return (
    <div style={projectImageWrapperStyle}>
      <img alt={props.alt} style={projectImageStyle} src={props.src}></img>
    </div>
  );
};
