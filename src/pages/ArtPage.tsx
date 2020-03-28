import React from "react";
import Grid from "@material-ui/core/Grid";
import { ImageBlock } from "./ImageBlock";
import { images } from "../img";

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
