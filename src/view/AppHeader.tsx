import React from "react";
import Grid from "@material-ui/core/Grid";
import { Name } from "./";

const headerStyle: React.CSSProperties = {
  // todo: delete outline
  outline: "solid black 1px",
  marginBottom: "2px"
};

export const AppHeader = React.memo(function AppHeader() {
  return (
    <div style={headerStyle}>
      <Grid>
        <Name />
        <Name />
      </Grid>
    </div>
  );
});
