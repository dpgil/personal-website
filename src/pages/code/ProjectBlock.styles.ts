import React from "react";

export const wrapperStyle: React.CSSProperties = {
  paddingBottom: 10
};

export const separatorStyle: React.CSSProperties = {
  borderTop: "dotted black 2px",
  maxWidth: 120,
  margin: "auto",
  marginTop: 30,
  marginBottom: 20
};

const minBlockWidth = 360;
const maxBlockWidth = 500;

export const projectInfoStyle: React.CSSProperties = {
  display: "inline-block",
  minWidth: minBlockWidth,
  maxWidth: maxBlockWidth,
  width: "50%"
};

export const projectImageWrapperStyle: React.CSSProperties = {
  display: "inline-block",
  minWidth: minBlockWidth,
  maxWidth: maxBlockWidth,
  width: "50%"
};

export const projectImageStyle: React.CSSProperties = {
  width: "100%"
};

export const bodyStyle: React.CSSProperties = {
  width: "100%"
};
