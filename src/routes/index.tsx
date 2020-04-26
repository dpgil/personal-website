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
    <Route
      exact
      path={process.env.PUBLIC_URL + Routes.Home.path}
      component={LandingPage}
    />
    <Route
      path={process.env.PUBLIC_URL + Routes.ArtPage.path}
      component={ArtPage}
    />
    <Route
      exact
      path={process.env.PUBLIC_URL + Routes.CodePage.path}
      component={CodePage}
    />
    <Route
      exact
      path={process.env.PUBLIC_URL + Routes.ContactPage.path}
      component={ContactPage}
    />
    <Route
      exact
      path={process.env.PUBLIC_URL + Routes.MusicPage.path}
      component={MusicPage}
    />
  </Switch>
);

export default routes;
