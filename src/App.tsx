import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBody, AppHeader } from "./view";
import { Router } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const trackingId = "UA-166798692-1";
ReactGA.initialize(trackingId);

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
    <Router history={history}>
      <div className={classes.root}>
        <AppHeader />
        <AppBody />
      </div>
    </Router>
  );
};
