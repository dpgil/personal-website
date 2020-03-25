import React from "react";

const nameStyle: React.CSSProperties = {
  fontSize: "45px",
  fontFamily: "Helvetica,Verdana,sans-serif",
  fontWeight: "bold",
  display: "inline-grid"
};

export const Name = React.memo(function Name() {
  return <span style={nameStyle}>DANIEL GIL</span>;
});
