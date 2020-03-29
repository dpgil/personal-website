import React from "react";
import { projects } from "../../media/projects";
import { ProjectBlock } from "./ProjectBlock";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20
};

export const CodePage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <Description />
      {projects.map((p, i) => (
        <ProjectBlock project={p} imageLeft={false} />
      ))}
    </div>
  );
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 20
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
        previously i was at microsoft in redmond, wa working on office online
        and the{" "}
        <TextLink
          text="fluid framework"
          link="https://www.pcmag.com/news/what-is-microsofts-fluid-framework"
        />
        .
      </div>
      <div style={descriptionStyle}>
        i also write code for fun. here are some projects that i've worked on in
        my free time:
      </div>
    </>
  );
};

const TextLink: React.FC<{ text: string; link: string }> = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      {props.text}
    </a>
  );
};
