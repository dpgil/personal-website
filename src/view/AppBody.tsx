import React from "react";
import {
  ArtPage,
  CodePage,
  ContactPage,
  LandingPage,
  MusicPage
} from "../pages";
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
          <Route path={Routes.ContactPage.path}>
            <ContactPage />
          </Route>
          <Route path={Routes.MusicPage.path}>
            <MusicPage />
          </Route>
          <Route path={Routes.Home.path}>
            <LandingPage />
          </Route>
        </Switch>
      }
    </div>
  );
};
