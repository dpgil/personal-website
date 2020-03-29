import React from "react";

export const TextLink: React.FC<{ text: string; link: string }> = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      {props.text}
    </a>
  );
};
