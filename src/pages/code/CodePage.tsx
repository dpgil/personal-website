import React from "react";
import { projects } from "./projects";
import { ProjectBlock } from "./ProjectBlock";
import { TextLink } from "./TextLink";

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

const descriptionStyle: React.CSSProperties = {
  maxWidth: 600,
  textAlign: "left",
  paddingBottom: 20,
  margin: "auto",
  fontSize: 20
};

const Description: React.FC = () => {
  return (
    <>
      <div style={descriptionStyle}>
        for money, i write code. i currently work in observability for lyft in
        nyc. around 80% of my time is spent building systems in golang, the rest
        on front end work in react/typescript.
      </div>
      <div style={descriptionStyle}>
        previously i was in seattle working at microsoft on office online and
        the{" "}
        <TextLink
          text="fluid framework"
          link="https://www.pcmag.com/news/what-is-microsofts-fluid-framework"
        />
        .
      </div>
      <div style={{ ...descriptionStyle, paddingBottom: 0 }}>
        i also write code for fun- below are some projects that i've worked on
        in my free time. click on the picture to go to the project's website
      </div>
    </>
  );
};
