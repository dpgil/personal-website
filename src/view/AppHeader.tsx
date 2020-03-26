import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavOptions } from "./";
import { Page } from "../pages";
import { Routes } from "../routes";

const headerStyle: React.CSSProperties = {
  // todo: delete outline
  outline: "solid black 1px",
  padding: "10px 0px",
  marginBottom: "2px",
  fontFamily: "Helvetica,Verdana,sans-serif"
};

const wrapperStyle: React.CSSProperties = {
  display: "inline-block",
  borderBottom: "solid",
  padding: "5px 0px",
  margin: "0px 10px"
};

const getSelectedPage = (): Page => {
  const path = window.location.pathname;
  switch (path) {
    case Routes.ArtPage.path:
      return Page.ART;
    case Routes.CodePage.path:
      return Page.CODE;
    case Routes.MePage.path:
      return Page.ME;
    default:
      return Page.LANDING;
  }
};

export const AppHeader: React.FC = () => {
  const [selectedPage, setSelectedPage] = React.useState<Page>(
    getSelectedPage()
  );

  return (
    <div style={headerStyle}>
      <Grid>
        <div style={wrapperStyle}>
          <NavOptions
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </Grid>
    </div>
  );
};
