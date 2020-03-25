import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { ArtPage, CodePage, MePage, LandingPage } from "../pages";

export const Routes = {
  Home: {
    path: "/",
    name: "home"
  },
  ArtPage: {
    path: "/art",
    name: "art"
  },
  CodePage: {
    path: "/code",
    name: "code"
  },
  MePage: {
    path: "/me",
    name: "me"
  }
};

const routes = () => (
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
);

export default routes;
