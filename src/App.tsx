import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page } from "./pages";
import { AppBody, AppHeader } from "./view";

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
  const [selectedPage, setSelectedPage] = React.useState<Page>(Page.LANDING);

  return (
    <div className={classes.root}>
      <AppHeader setSelectedPage={setSelectedPage} />
      <AppBody selectedPage={selectedPage} />
    </div>
  );
};
