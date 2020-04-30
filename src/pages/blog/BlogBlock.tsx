import React from "react";
import { Blog } from "../../media/blogs";

const separatorStyle: React.CSSProperties = {
  borderBottom: "solid black 2px",
  width: "95%",
  maxWidth: 560,
  margin: "auto",
  marginTop: 20,
  marginBottom: 20
};

const titleStyle: React.CSSProperties = {
  fontWeight: "bold"
};

const descriptionStyle: React.CSSProperties = {
  fontSize: 20,
  color: "#a0a0a0"
};

export const BlogBlock: React.FC<{ blog: Blog }> = props => {
  const { blog } = props;
  return (
    <div>
      <div style={separatorStyle}></div>
      <div style={titleStyle}>{blog.title}</div>
      <div style={descriptionStyle}>
        <span>{blog.description}</span>
        {" | "}
        <span>{blog.month + "." + blog.day + "." + blog.year}</span>
      </div>
      <div style={separatorStyle}></div>
    </div>
  );
};
