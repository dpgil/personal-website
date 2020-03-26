import React from "react";
import { NavOption } from "./";
import { Page } from "../pages";
import { Routes } from "../routes";

const separator = " / ";

const nameStyle: React.CSSProperties = {
  fontSize: "45px",
  fontWeight: "bold",
  display: "inline-block",
  padding: "0px 10px"
};

const navOptionsStyle: React.CSSProperties = {
  padding: "0px 10px",
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
    <div>
      <span style={nameStyle}>
        <NavOption
          onClick={() => setSelectedPage(Page.LANDING)}
          isSelected={false}
          route={Routes.Home}
        />
      </span>
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
    </div>
  );
};
