import React from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
import {
  LandingPage,
  ArtPage,
  CodePage,
  ContactPage,
  MusicPage
} from "../pages";
import { BlogPage } from "../pages/blog/BlogPage";

const bodyStyle: React.CSSProperties = {
  marginTop: "5px"
};

export const AppBody: React.FC = () => {
  return (
    <div style={bodyStyle}>
      <Switch>
        <Route exact path={Routes.Home.path} component={LandingPage} />
        <Route path={Routes.ArtPage.path} component={ArtPage} />
        <Route exact path={Routes.CodePage.path} component={CodePage} />
        <Route exact path={Routes.MusicPage.path} component={MusicPage} />
        <Route exact path={Routes.BlogPage.path} component={BlogPage} />
        <Route exact path={Routes.ContactPage.path} component={ContactPage} />
      </Switch>
    </div>
  );
};
