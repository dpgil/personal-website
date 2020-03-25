import React from "react";
import Grid from "@material-ui/core/Grid";
import { Name, NavOptions } from "./";
import { Page } from "../pages";

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

interface AppHeaderProps {
  setSelectedPage: (page: Page) => void;
}

export const AppHeader: React.FC<AppHeaderProps> = props => {
  return (
    <div style={headerStyle}>
      <Grid>
        <div style={wrapperStyle}>
          <Name />
          <NavOptions setSelectedPage={props.setSelectedPage} />
        </div>
      </Grid>
    </div>
  );
};
