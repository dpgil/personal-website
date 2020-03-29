import React from "react";
import { Project } from "./projects";
import { ProjectInfo } from "./ProjectInfo";
import {
  blockColumnStyle,
  bodyStyle,
  getProjectImageStyle,
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
        <div style={blockColumnStyle}>
          <ProjectInfo project={project} />
        </div>
        {!imageLeft && <ProjectImage project={project} />}
      </div>
    </div>
  );
};

const ProjectSeparator: React.FC = () => {
  return <div style={separatorStyle}></div>;
};

const ProjectImage: React.FC<{ project: Project }> = props => {
  const { project } = props;
  const [hover, setHover] = React.useState<boolean>(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      style={blockColumnStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          alt={project.title}
          style={getProjectImageStyle(hover)}
          src={project.imgSrc}
        ></img>
      </a>
    </div>
  );
};
