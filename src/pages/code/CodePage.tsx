import React from "react";
import { Description } from "./Description";
import { projects } from "./projects";
import { ProjectBlock } from "./ProjectBlock";

const pageStyle: React.CSSProperties = {
  width: "90%",
  margin: "auto",
  paddingBottom: 20,
  paddingTop: 20
};

export const CodePage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <Description />
      {projects.map(p => (
        <ProjectBlock project={p} imageLeft={false} key={p.title} />
      ))}
    </div>
  );
};
