import React from "react";
import { Page } from "./NavOptions";
import { ArtPage, CodePage, LandingPage, MePage } from "../pages";

const bodyStyle: React.CSSProperties = {
  // todo: delete outline
  outline: "solid 1px blue",
  marginTop: "5px"
};

interface AppBodyProps {
  selectedPage: Page;
}

const getPageComponent = (page: Page) => {
  switch (page) {
    case Page.ART:
      return <ArtPage />;
    case Page.CODE:
      return <CodePage />;
    case Page.ME:
      return <MePage />;
    default:
      return <LandingPage />;
  }
};

export const AppBody: React.FC<AppBodyProps> = props => {
  return <div style={bodyStyle}>{getPageComponent(props.selectedPage)}</div>;
};
