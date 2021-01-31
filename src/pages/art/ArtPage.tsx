import Grid from "@material-ui/core/Grid";
import { History } from "history";
import React from "react";
import { Link } from "react-router-dom";
import { DetailPage } from "./DetailPage";
import { ImageBlock } from "./ImageBlock";
import { linkStyle } from "../../common";
import { images } from "../../media/art";
import { Routes } from "../../routes";
import { maxPageWidth } from "../../common/constants";

const pageStyle: React.CSSProperties = {
  maxWidth: maxPageWidth * 2,
  margin: "auto"
};

export const ArtPage: React.FC<{ history: History }> = props => {
  const path = props.history.location.pathname;
  if (path.length > Routes.ArtPage.path.length) {
    // Trim off /art/ from /art/XXX
    const piecePath = path.substr(Routes.ArtPage.path.length + 1);
    const piece = images.find(
      i => i.path === piecePath || `${i.path}/` === piecePath
    );
    if (piece !== undefined) {
      // We're on the detail page for some piece.
      return <DetailPage image={piece} />;
    }
  }

  return (
    <div style={pageStyle}>
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
