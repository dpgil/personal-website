import React from "react";

const nameStyle: React.CSSProperties = {
  fontSize: "45px",
  fontWeight: "bold",
  display: "inline-block",
  padding: "0px 10px"
};

export const Name: React.FC = () => {
  return <span style={nameStyle}>DANIEL GIL</span>;
};
