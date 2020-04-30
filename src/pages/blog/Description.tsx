import React from "react";

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 10,
  paddingTop: 20,
  fontSize: 20
};

export const Description: React.FC = () => {
  return (
    <div style={descriptionStyle}>
      some of my tutorials, rants, and just general musings. opinions are
      entirely my own
    </div>
  );
};
