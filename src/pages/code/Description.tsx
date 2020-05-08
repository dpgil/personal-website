import React from "react";
import { TextLink } from "../../common";
import { maxPageWidth } from "../../common/constants";

const descriptionStyle: React.CSSProperties = {
  maxWidth: maxPageWidth,
  textAlign: "left",
  paddingBottom: 20,
  margin: "auto",
  fontSize: 20
};

export const Description: React.FC = () => {
  return (
    <>
      <div style={descriptionStyle}>
        for money, i write code. i currently work in observability for lyft in
        nyc. around 80% of my time is spent building systems in go, the rest on
        front end work in react/typescript.
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
