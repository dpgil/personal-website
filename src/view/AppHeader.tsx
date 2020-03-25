import React from "react";
import Grid from "@material-ui/core/Grid";

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

const nameStyle: React.CSSProperties = {
  fontSize: "45px",
  fontFamily: "Helvetica,Verdana,sans-serif",
  fontWeight: "bold",
  display: "inline-grid"
};

export const Name = React.memo(function Name() {
  return <span style={nameStyle}>DANIEL GIL</span>;
});
