import React from "react";
import { blogs } from "../../media/blogs";
import { BlogBlock } from "./BlogBlock";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: 600,
  margin: "auto",
  paddingBottom: 20
};

export const BlogPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <Description />
      {blogs.map(b => (
        <BlogBlock key={b.title} blog={b} />
      ))}
    </div>
  );
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 10,
  paddingTop: 20,
  fontSize: 20
};

const Description: React.FC = () => {
  return (
    <div style={descriptionStyle}>
      some of my tutorials, rants, and just general musings. opinions are
      entirely my own
    </div>
  );
};
