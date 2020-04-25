import React from "react";
import Grid from "@material-ui/core/Grid";
import { ImageBlock } from "./ImageBlock";
import { images } from "../../media/art";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";

export const ArtPage: React.FC = () => {
  const hash = window.location.hash;
  const mainPage = `#/${Routes.ArtPage.path}`;
  if (hash.length > mainPage.length) {
    const path = hash.substr(mainPage.length);
    const details = images.find(i => i.path === path);
    if (details !== undefined) {
      // We're in the detail page.
      return <DetailBlock />;
    }
  }

  return (
    <div>
      <Grid>
        {images.map(i => (
          <Link to={`${Routes.ArtPage.path}/${i.path}`} key={i.name}>
            <ImageBlock image={i} />
          </Link>
        ))}
      </Grid>
    </div>
  );
};

const DetailBlock: React.FC = () => {
  return <div>hallo</div>;
};
