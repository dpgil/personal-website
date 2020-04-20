import React from "react";
import { Image } from "../../media/art";
import {
  getImageStyle,
  imageBlockStyle,
  imageOverlayStyle,
  overlayTextStyle
} from "./ImageBlock.styles";

interface ImageBlockProps {
  image: Image;
}

export const ImageBlock: React.FC<ImageBlockProps> = props => {
  const { image } = props;
  const [hover, setHover] = React.useState<boolean>(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      style={imageBlockStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hover && <ImageOverlay name={image.name} />}
      <img style={getImageStyle(hover)} src={image.src} alt={image.name} />
    </div>
  );
};

interface ImageOverlayProps {
  name: string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = props => {
  return (
    <div style={imageOverlayStyle}>
      <div style={overlayTextStyle}>{props.name}</div>
    </div>
  );
};
