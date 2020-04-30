import React from "react";

export const TextLink: React.FC<{ text: string; link: string }> = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
    >
      {props.text}
    </a>
  );
};

export const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit"
};
