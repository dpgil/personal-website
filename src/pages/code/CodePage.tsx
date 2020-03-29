import React from "react";

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
        nyc. maybe 80% of my time is spent building systems in golang, the rest
        on front end work in react/typescript.
      </div>
      <div style={descriptionStyle}>
        previously i worked at microsoft in redmond, wa on office online and the{" "}
        <TextLink
          text="fluid framework"
          link="https://www.pcmag.com/news/what-is-microsofts-fluid-framework"
        />
        .
      </div>
      <div style={descriptionStyle}>
        i also write code for fun. here are some projects that i've worked on:
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
