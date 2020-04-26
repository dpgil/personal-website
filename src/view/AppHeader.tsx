import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavOptions } from "./";
import { Page } from "../pages";
import { Routes } from "../routes";
import { History } from "history";

const headerStyle: React.CSSProperties = {
  padding: "10px 0px",
  marginBottom: "2px"
};

const wrapperStyle: React.CSSProperties = {
  display: "inline-block",
  borderBottom: "solid",
  padding: "5px 0px",
  margin: "0px 10px"
};

const getSelectedPage = (history: History): Page => {
  const path = history.location.pathname;
  switch (path) {
    case Routes.ArtPage.path:
      return Page.ART;
    case Routes.CodePage.path:
      return Page.CODE;
    case Routes.ContactPage.path:
      return Page.CONTACT;
    case Routes.MusicPage.path:
      return Page.MUSIC;
    default:
      return Page.LANDING;
  }
};

export const AppHeader: React.FC<{ history: History }> = props => {
  const [selectedPage, setSelectedPage] = React.useState<Page>(
    getSelectedPage(props.history)
  );

  return (
    <div style={headerStyle}>
      <Grid>
        <div style={wrapperStyle}>
          <NavOptions
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            history={props.history}
          />
        </div>
      </Grid>
    </div>
  );
};
