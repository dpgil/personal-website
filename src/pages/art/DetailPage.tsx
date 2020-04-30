import React from "react";
import { Image } from "../../media/art";
import { maxPageWidth } from "../../common/constants";

const detailImageStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: maxPageWidth,
  padding: 10
};

export const DetailPage: React.FC<{ image: Image }> = props => {
  const { image } = props;
  return <img src={image.src} style={detailImageStyle} alt={image.name} />;
};
