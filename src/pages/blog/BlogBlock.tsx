import React from "react";
import { Blog } from "../../media/blogs";
import {
  descriptionStyle,
  getWrapperStyle,
  separatorStyle,
  titleStyle
} from "./BlogBlock.styles";

export const BlogBlock: React.FC<{ blog: Blog }> = props => {
  const { blog } = props;
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  return (
    <div
      style={getWrapperStyle(isHover)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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
