import React from "react";
import Grid from "@material-ui/core/Grid";
import { ImageBlock } from "./ImageBlock";
import { images, Image } from "../../media/art";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import { History } from "history";
import { blockColumnStyle } from "../code/ProjectBlock.styles";

export const ArtPage: React.FC<{ history: History }> = props => {
  const path = props.history.location.pathname;
  if (path.length > Routes.ArtPage.path.length) {
    // Trim off /art/ from /art/XXX
    const piecePath = path.substr(Routes.ArtPage.path.length + 1);
    const piece = images.find(i => i.path === piecePath);
    if (piece !== undefined) {
      // We're on the detail page for some piece.
      return <DetailPage image={piece} />;
    }
  }

  return (
    <div>
      <Grid>
        {images.map(i => (
          <Link key={i.name} to={`${Routes.ArtPage.path}/${i.path}`}>
            <ImageBlock image={i} />
          </Link>
        ))}
      </Grid>
    </div>
  );
};

const DetailPage: React.FC<{ image: Image }> = props => {
  const { image } = props;
  return (
    <div style={{ paddingTop: 20 }}>
      <div>top</div>
      <div>
        <img src={image.src} style={{ width: "100%", maxWidth: 700 }} />
      </div>
    </div>
  );
};
