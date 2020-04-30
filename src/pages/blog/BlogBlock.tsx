import React from "react";
import { Blog } from "../../media/blogs";

const separatorStyle: React.CSSProperties = {
  borderBottom: "solid black 2px",
  maxWidth: 560,
  margin: "auto",
  marginTop: 20,
  marginBottom: 20
};

const titleStyle: React.CSSProperties = {
  fontSize: 24,
  fontWeight: "bold",
  paddingBottom: 5
};

const descriptionStyle: React.CSSProperties = {
  fontSize: 20,
  color: "#a0a0a0"
};

const getWrapperStyle = (hover: boolean): React.CSSProperties => {
  return {
    backgroundColor: hover ? "#f0f0f0" : "white",
    maxWidth: 560,
    margin: "auto"
  };
};

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
