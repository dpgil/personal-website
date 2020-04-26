import React from "react";
import Routes from "../routes";

const bodyStyle: React.CSSProperties = {
  marginTop: "5px"
};

export const AppBody: React.FC = () => {
  return (
    <div style={bodyStyle}>
      <Routes />
    </div>
  );
};
