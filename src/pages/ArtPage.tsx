import React from "react";
import Grid from "@material-ui/core/Grid";
import ava from "../img/ava_square.png";

export const ArtPage: React.FC = () => {
  return (
    <div>
      <Grid>
        <Grid item xs>
          <ImageBlock src={ava} />
        </Grid>
      </Grid>
    </div>
  );
};

interface ImageBlockProps {
  src: string;
}
const ImageBlock: React.FC<ImageBlockProps> = props => {
  return <img style={{ width: "50%", boxShadow: "2px" }} src={props.src} />;
};
