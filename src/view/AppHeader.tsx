import React from "react";

const headerStyle: React.CSSProperties = {
  // todo: delete outline
  outline: "solid black 1px",
  width: "910px",
  fontSize: "45px",
  fontFamily: "Helvetica,Verdana,sans-serif",
  fontWeight: "bold"
  //   textAlign: "left"
};

export const AppHeader = React.memo(function AppHeader() {
  return <div style={headerStyle}>DANIEL GIL</div>;
});
