import React from "react";
import Grid from "@material-ui/core/Grid";
import { Name, NavOptions } from "./";
import { Page } from "./NavOptions";

const headerStyle: React.CSSProperties = {
  // todo: delete outline
  outline: "solid black 1px",
  padding: "10px 0px",
  marginBottom: "2px",
  fontFamily: "Helvetica,Verdana,sans-serif"
};

interface AppHeaderProps {
  setSelectedPage: (page: Page) => void;
}

export const AppHeader: React.FC<AppHeaderProps> = props => {
  return (
    <div style={headerStyle}>
      <Grid>
        <Name />
        <NavOptions setSelectedPage={props.setSelectedPage} />
      </Grid>
    </div>
  );
};
