import React from "react";
import { NavOption } from "./";
import { Page } from "../pages";

const separator = " // ";

const navOptionsStyle: React.CSSProperties = {
  padding: "0px 5px",
  display: "inline-block",
  fontSize: "28px"
};

interface NavOptionsProps {
  setSelectedPage: (page: Page) => void;
}

export const NavOptions: React.FC<NavOptionsProps> = props => {
  const { setSelectedPage } = props;

  const onClick = (page: Page) => {
    return () => {
      setSelectedPage(page);
    };
  };

  return (
    <div style={navOptionsStyle}>
      <NavOption onClick={onClick(Page.ART)} name="art" />
      {separator}
      <NavOption onClick={onClick(Page.CODE)} name="code" />
      {separator}
      <NavOption onClick={onClick(Page.ME)} name="me" />
    </div>
  );
};
