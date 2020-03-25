import React from "react";
import { NavOption } from "./";
import { Page } from "../pages";

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
  const { setSelectedPage, selectedPage } = props;

  const onClick = (page: Page) => {
    return () => {
      setSelectedPage(page);
    };
  };

  return (
    <div style={navOptionsStyle}>
      <NavOption
        onClick={onClick(Page.ART)}
        isSelected={selectedPage === Page.ART}
        name="art"
      />
      {separator}
      <NavOption
        onClick={onClick(Page.CODE)}
        isSelected={selectedPage === Page.CODE}
        name="code"
      />
      {separator}
      <NavOption
        onClick={onClick(Page.ME)}
        isSelected={selectedPage === Page.ME}
        name="me"
      />
    </div>
  );
};
