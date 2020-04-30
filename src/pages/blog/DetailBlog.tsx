import React from "react";
import { Blog } from "../../media/blogs";

const wrapperStyle: React.CSSProperties = {
  textAlign: "left",
  fontSize: 20,
  paddingBottom: 30
};

const titleStyle: React.CSSProperties = {
  paddingTop: 30,
  fontWeight: "bold",
  fontSize: 35
};

const descriptionStyle: React.CSSProperties = {
  color: "#808080",
  paddingBottom: 10,
  fontSize: 22
};

export const DetailBlog: React.FC<{ blog: Blog }> = props => {
  const { blog } = props;
  return (
    <div style={wrapperStyle}>
      <div style={titleStyle}>{blog.title}</div>
      <div style={descriptionStyle}>{blog.description}</div>
      {blog.content}
    </div>
  );
};
