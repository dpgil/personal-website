import React from "react";

export const wrapperStyle: React.CSSProperties = {
  paddingBottom: 10
};

export const separatorStyle: React.CSSProperties = {
  borderBottom: "solid black 2px",
  width: "70%",
  maxWidth: 500,
  margin: "auto",
  marginTop: 50,
  marginBottom: 50
};

const minBlockWidth = 360;
const maxBlockWidth = 500;

export const blockColumnStyle: React.CSSProperties = {
  display: "inline-block",
  minWidth: minBlockWidth,
  maxWidth: maxBlockWidth,
  width: "50%",
  padding: 10,
  verticalAlign: "middle"
};

export const getProjectImageStyle = (hover: boolean): React.CSSProperties => {
  return {
    width: "100%",
    borderRadius: 10,
    opacity: hover ? 0.5 : 1
  };
};

export const bodyStyle: React.CSSProperties = {
  width: "100%"
};
