import React from "react";
import { ArtPage, CodePage, LandingPage, MePage } from "../pages";
import { Route, Switch } from "react-router";
import { Routes } from "../routes";

const bodyStyle: React.CSSProperties = {
  marginTop: "5px"
};

export const AppBody: React.FC = () => {
  return (
    <div style={bodyStyle}>
      {
        <Switch>
          <Route path={Routes.ArtPage.path}>
            <ArtPage />
          </Route>
          <Route path={Routes.CodePage.path}>
            <CodePage />
          </Route>
          <Route path={Routes.MePage.path}>
            <MePage />
          </Route>
          <Route path={Routes.Home.path}>
            <LandingPage />
          </Route>
        </Switch>
      }
    </div>
  );
};
