import React from "react";
import { Blog } from "../../media/blogs";

export const DetailBlog: React.FC<{ blog: Blog }> = props => {
  const { blog } = props;
  return (
    <div>
      {blog.title}
      {" detail page@!!"}
    </div>
  );
};
