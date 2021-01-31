import React from "react";
import { Description } from "./Description";
import { projects } from "./projects";
import { ProjectBlock } from "./ProjectBlock";
import { maxPageWidth } from "../../common/constants";

const pageStyle: React.CSSProperties = {
  width: "90%",
  margin: "auto",
  paddingBottom: 20,
  paddingTop: 20,
  maxWidth: maxPageWidth
};

export const CodePage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <Description />
      {projects.map(p => (
        <ProjectBlock project={p} key={p.title} />
      ))}
    </div>
  );
};
