import React from "react";

const headerStyle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: "bold",
  paddingTop: 25,
  paddingBottom: 10
};

export const Header: React.FC = props => {
  return <div style={headerStyle}>{props.children}</div>;
};

const pStyle: React.CSSProperties = {
  paddingTop: 13,
  paddingBottom: 13
};

// yes i know <p> tag exists
export const Paragraph: React.FC = props => {
  return <div style={pStyle}>{props.children}</div>;
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  paddingTop: 5,
  paddingBottom: 5
};

export const Image: React.FC<{ src: string; alt: string }> = props => {
  return <img style={imgStyle} src={props.src} alt={props.alt} />;
};
