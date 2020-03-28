import React from "react";

const imageBlockWidth = 360;

export const imageBlockStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "5px"
};

export const getImageStyle = (hover: boolean): React.CSSProperties => {
  return {
    maxWidth: imageBlockWidth,
    opacity: hover ? 0.2 : 1
  };
};

export const imageOverlayStyle: React.CSSProperties = {
  position: "absolute",
  width: imageBlockWidth,
  height: imageBlockWidth,
  zIndex: 1
};

export const overlayTextStyle: React.CSSProperties = {
  position: "relative",
  top: "45%",
  fontStyle: "oblique",
  fontFamily: "serif",
  fontSize: 30
};
