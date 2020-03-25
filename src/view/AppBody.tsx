import React from "react";
import { ArtPage, CodePage, LandingPage, MePage, Page } from "../pages";
import { Route, Switch } from "react-router";
import { Routes } from "../routes";

const bodyStyle: React.CSSProperties = {
  // todo: delete outline
  outline: "solid 1px blue",
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
