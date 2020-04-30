import React from "react";
import { History } from "history";
import { Link } from "react-router-dom";
import { BlogBlock } from "./BlogBlock";
import { DetailBlog } from "./DetailBlog";
import { Description } from "./Description";
import { linkStyle } from "../../common";
import { blogs, Blog } from "../../media/blogs";
import { Routes } from "../../routes";

export const BlogPage: React.FC<{ history: History }> = props => {
  const path = props.history.location.pathname;
  if (path.length > Routes.BlogPage.path.length) {
    // Trim off /blog/ from /blog/XXX
    const piecePath = path.substr(Routes.BlogPage.path.length + 1);
    const piece = blogs.find(b => pathMatch(b, piecePath));
    if (piece !== undefined) {
      // We're on the detail page for some piece.
      return (
        <div style={pageStyle}>
          <DetailBlog blog={piece} />
        </div>
      );
    }
  }

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

const pathMatch = (blog: Blog, path: string): boolean => {
  const p = path.split("/");
  if (p.length < 4) {
    return false;
  }
  return (
    blog.year === p[0] &&
    blog.month === p[1] &&
    blog.day === p[2] &&
    blog.id === p[3]
  );
};

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: 600,
  margin: "auto",
  paddingBottom: 20
};
