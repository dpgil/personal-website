import React from "react";
import Grid from "@material-ui/core/Grid";
import { ImageBlock } from "./ImageBlock";
import { images, Image } from "../../media/art";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import { History } from "history";

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
          <Link
            key={i.name}
            to={`${Routes.ArtPage.path}/${i.path}`}
            style={linkStyle}
          >
            <ImageBlock image={i} />
          </Link>
        ))}
      </Grid>
    </div>
  );
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit"
};

const detailImageStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 600,
  padding: 10
};

const DetailPage: React.FC<{ image: Image }> = props => {
  const { image } = props;
  return <img src={image.src} style={detailImageStyle} />;
};
