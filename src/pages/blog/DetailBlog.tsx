import React from "react";
import { Blog } from "../../media/blogs";

const wrapperStyle: React.CSSProperties = {
  textAlign: "left"
};

const titleStyle: React.CSSProperties = {
  paddingTop: 20,
  fontWeight: "bold",
  fontSize: 35
};

const descriptionStyle: React.CSSProperties = {
  fontSize: 24,
  color: "#808080",
  paddingBottom: 20
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
