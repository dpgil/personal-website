import React from "react";
import Grid from "@material-ui/core/Grid";
import { Name, NavOptions } from "./";

const headerStyle: React.CSSProperties = {
  // todo: delete outline
  outline: "solid black 1px",
  padding: "10px 0px",
  marginBottom: "2px",
  fontFamily: "Helvetica,Verdana,sans-serif"
};

export const AppHeader = React.memo(function AppHeader() {
  return (
    <div style={headerStyle}>
      <Grid>
        <Name />
        <NavOptions />
      </Grid>
    </div>
  );
});
