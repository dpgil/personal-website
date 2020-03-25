import React from "react";
import { NavOption } from "./";
import { Page } from "../pages";
import { Link } from "react-router-dom";
import { Routes } from "../routes";

const separator = " / ";

const navOptionsStyle: React.CSSProperties = {
  padding: "0px 5px",
  display: "inline-block",
  fontSize: "28px"
};

interface NavOptionsProps {
  selectedPage: Page;
  setSelectedPage: (page: Page) => void;
}

export const NavOptions: React.FC<NavOptionsProps> = props => {
  const { selectedPage, setSelectedPage } = props;

  return (
    <div style={navOptionsStyle}>
      <NavOption
        onClick={() => setSelectedPage(Page.ART)}
        isSelected={selectedPage === Page.ART}
        route={Routes.ArtPage}
      />
      {separator}
      <NavOption
        onClick={() => setSelectedPage(Page.CODE)}
        isSelected={selectedPage === Page.CODE}
        route={Routes.CodePage}
      />
      {separator}
      <NavOption
        onClick={() => setSelectedPage(Page.ME)}
        isSelected={selectedPage === Page.ME}
        route={Routes.MePage}
      />
    </div>
  );
};
