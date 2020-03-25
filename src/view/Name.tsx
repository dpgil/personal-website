import React from "react";

const nameStyle: React.CSSProperties = {
  fontSize: "45px",
  fontWeight: "bold",
  display: "inline-grid",
  padding: "0px 10px"
};

export const Name = React.memo(function Name() {
  return <span style={nameStyle}>DANIEL GIL</span>;
});
