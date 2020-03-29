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
        {imageLeft && <ProjectImage src={project.imgSrc} alt={project.title} />}
        <ProjectInfo project={project} />
        {!imageLeft && (
          <ProjectImage src={project.imgSrc} alt={project.title} />
        )}
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

const ProjectImage: React.FC<{ alt: string; src: string }> = props => {
  return (
    <div style={projectImageWrapperStyle}>
      <img alt={props.alt} style={projectImageStyle} src={props.src}></img>
    </div>
  );
};
