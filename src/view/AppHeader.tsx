import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavOptions } from "./";
import { Page } from "../pages";
import { Routes } from "../routes";

const headerStyle: React.CSSProperties = {
  padding: "10px 0px",
  marginBottom: "2px"
};

const wrapperStyle: React.CSSProperties = {
  display: "inline-block",
  borderBottom: "solid",
  padding: "5px 0px"
};

export const AppHeader: React.FC = () => {
  return (
    <div style={headerStyle}>
      <div style={wrapperStyle}>
        <Switch>
          <Route path={Routes.ArtPage.path}>
            <NavOptions selectedPage={Page.ART} />
          </Route>
          <Route exact path={Routes.CodePage.path}>
            <NavOptions selectedPage={Page.CODE} />
          </Route>
          <Route exact path={Routes.MusicPage.path}>
            <NavOptions selectedPage={Page.MUSIC} />
          </Route>
          <Route path={Routes.BlogPage.path}>
            <NavOptions selectedPage={Page.BLOG} />
          </Route>
          <Route exact path={Routes.ContactPage.path}>
            <NavOptions selectedPage={Page.CONTACT} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
