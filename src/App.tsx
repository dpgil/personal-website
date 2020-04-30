import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBody, AppHeader } from "./view";
import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#fff",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  }
});

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.root}>
        <AppHeader />
        <AppBody />
      </div>
    </Router>
  );
};
