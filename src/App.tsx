import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page, ArtPage, CodePage, MePage, LandingPage } from "./pages";
import { AppBody, AppHeader } from "./view";
import Routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppHeader />
        <AppBody />
      </div>
    </Router>
  );
};
