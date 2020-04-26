import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LandingPage,
  ArtPage,
  CodePage,
  ContactPage,
  MusicPage
} from "../pages";

export const Routes = {
  Home: {
    path: "/",
    name: "DANIEL GIL"
  },
  ArtPage: {
    path: "/art",
    name: "art"
  },
  CodePage: {
    path: "/code",
    name: "code"
  },
  ContactPage: {
    path: "/contact",
    name: "contact"
  },
  MusicPage: {
    path: "/music",
    name: "music"
  }
};

const routes = () => (
  <Switch>
    <Route exact path={Routes.Home.path} component={LandingPage} />
    <Route path={Routes.ArtPage.path} component={ArtPage} />
    <Route exact path={Routes.CodePage.path} component={CodePage} />
    <Route exact path={Routes.ContactPage.path} component={ContactPage} />
    <Route exact path={Routes.MusicPage.path} component={MusicPage} />
  </Switch>
);

export default routes;
