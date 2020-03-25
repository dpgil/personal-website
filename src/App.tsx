import React from "react";
import { AppBody, AppHeader } from "./view";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#fff",
    minHeight: "100vh",
    // display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black"
  }
});

export const App = React.memo(function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppHeader />
      <AppBody />
    </div>
  );
});
