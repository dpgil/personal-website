import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../media/blogs";
import { BlogBlock } from "./BlogBlock";
import { Routes } from "../../routes";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: 600,
  margin: "auto",
  paddingBottom: 20
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit"
};

export const BlogPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <Description />
      {blogs.map(b => (
        <Link
          key={b.title}
          to={`${Routes.BlogPage.path}/${b.year}/${b.month}/${b.day}/${b.id}`}
          style={linkStyle}
        >
          <BlogBlock key={b.title} blog={b} />
        </Link>
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
