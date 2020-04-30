import React from "react";

export const separatorStyle: React.CSSProperties = {
  borderBottom: "solid black 2px",
  maxWidth: 560,
  margin: "auto",
  marginTop: 20,
  marginBottom: 20
};

export const titleStyle: React.CSSProperties = {
  fontSize: 24,
  fontWeight: "bold",
  paddingBottom: 5
};

export const descriptionStyle: React.CSSProperties = {
  fontSize: 20,
  color: "#a0a0a0"
};

export const getWrapperStyle = (hover: boolean): React.CSSProperties => {
  return {
    backgroundColor: hover ? "#f0f0f0" : "white",
    maxWidth: 560,
    margin: "auto"
  };
};
