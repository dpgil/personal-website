import React from "react";
import Grid from "@material-ui/core/Grid";
import { images } from "../img";

export const ArtPage: React.FC = () => {
  return (
    <div>
      <Grid>
        {images.map(i => (
          <ImageBlock src={i} />
        ))}
      </Grid>
    </div>
  );
};

const getImageBlockStyle = (hover: boolean): React.CSSProperties => {
  return {
    display: "inline-block",
    padding: "5px",
    opacity: hover ? 0.3 : 1
  };
};

const imageStyle: React.CSSProperties = {
  maxWidth: "400px"
};

interface ImageBlockProps {
  src: string;
}

const ImageBlock: React.FC<ImageBlockProps> = props => {
  const [hover, setHover] = React.useState<boolean>(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div style={getImageBlockStyle(hover)}>
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={imageStyle}
        src={props.src}
      />
    </div>
  );
};
