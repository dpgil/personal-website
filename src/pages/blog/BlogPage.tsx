import React from "react";
import { History } from "history";
import { Link } from "react-router-dom";
import { BlogBlock } from "./BlogBlock";
import { DetailBlog } from "./DetailBlog";
import { Description } from "./Description";
import { linkStyle } from "../../common";
import { blogs } from "../../media/blogs";
import { Routes } from "../../routes";
import { maxPageWidth } from "../../common/constants";

export const BlogPage: React.FC<{ history: History }> = props => {
  const path = props.history.location.pathname;
  if (path.length > Routes.BlogPage.path.length) {
    // Trim off /blog/ from /blog/XXX
    const id = path.substr(Routes.BlogPage.path.length + 1);
    const piece = blogs.find(b => b.id === id);
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
          to={`${Routes.BlogPage.path}/${b.id}`}
          style={linkStyle}
        >
          <BlogBlock key={b.title} blog={b} />
        </Link>
      ))}
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: maxPageWidth,
  margin: "auto",
  paddingBottom: 20
};
