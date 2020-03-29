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

export const blockColumnStyle: React.CSSProperties = {
  display: "inline-block",
  minWidth: minBlockWidth,
  maxWidth: maxBlockWidth,
  width: "50%",
  padding: 10,
  verticalAlign: "middle"
};

export const projectImageStyle: React.CSSProperties = {
  width: "100%"
};

export const bodyStyle: React.CSSProperties = {
  width: "100%"
};
