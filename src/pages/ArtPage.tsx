import React from "react";
import Grid from "@material-ui/core/Grid";
import { Image, images } from "../img";

const imageWidth = "400px";

export const ArtPage: React.FC = () => {
  return (
    <div>
      <Grid>
        {images.map(i => (
          <ImageBlock key={i.name} image={i} />
        ))}
      </Grid>
    </div>
  );
};

const imageBlockStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "5px"
};

const getImageStyle = (hover: boolean): React.CSSProperties => {
  return {
    maxWidth: imageWidth,
    opacity: hover ? 0.2 : 1
  };
};

interface ImageBlockProps {
  image: Image;
}

const ImageBlock: React.FC<ImageBlockProps> = props => {
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

const imageOverlayStyle: React.CSSProperties = {
  position: "absolute",
  width: imageWidth,
  height: imageWidth,
  zIndex: 1
};

const overlayTextStyle: React.CSSProperties = {
  position: "relative",
  top: "45%",
  fontStyle: "oblique",
  fontFamily: "serif",
  fontSize: 30
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
