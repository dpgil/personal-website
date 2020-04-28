import React from "react";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20
};

export const LandingPage: React.FC = () => {
  return <div style={pageStyle}>landingpage</div>;
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 10
};

const Description: React.FC = props => {
  return (
    <div style={descriptionStyle}>
      hi, i'm daniel gil (not the american ninja warrior). check out my pages or
      try to solve this puzzle, or both, or neither. the world is your{" "}
    </div>
  );
};
