import React from "react";

const bodyStyle: React.CSSProperties = {
  // todo: delete outline
  outline: "solid 1px blue",
  marginTop: "5px"
};

export const AppBody = React.memo(function AppBody() {
  return <div style={bodyStyle}>body</div>;
});
