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

const imageBlockStyle: React.CSSProperties = {
  maxWidth: "400px",
  display: "inline-block",
  padding: "5px"
};

interface ImageBlockProps {
  src: string;
}

const ImageBlock: React.FC<ImageBlockProps> = props => {
  return <img style={imageBlockStyle} src={props.src} />;
};
