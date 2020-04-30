import React from "react";
import { NavOption } from "./";
import { Page } from "../pages";
import { Routes } from "../routes";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

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
  fontSize: "26px"
};

const mailIconStyle: React.CSSProperties = {
  verticalAlign: "middle",
  paddingBottom: 1
};

interface NavOptionsProps {
  selectedPage: Page;
}

export const NavOptions: React.FC<NavOptionsProps> = props => {
  const { selectedPage } = props;

  return (
    <div>
      <span style={nameStyle}>
        <NavOption isSelected={false} route={Routes.Home}>
          <NavName name={Routes.Home.name} />
        </NavOption>
      </span>
      <div style={navOptionsStyle}>
        <NavOption
          isSelected={selectedPage === Page.ART}
          route={Routes.ArtPage}
        >
          <NavName name={Routes.ArtPage.name} />
        </NavOption>
        {separator}
        <NavOption
          isSelected={selectedPage === Page.CODE}
          route={Routes.CodePage}
        >
          <NavName name={Routes.CodePage.name} />
        </NavOption>
        {separator}
        <NavOption
          isSelected={selectedPage === Page.MUSIC}
          route={Routes.MusicPage}
        >
          <NavName name={Routes.MusicPage.name} />
        </NavOption>
        {separator}
        <NavOption
          isSelected={selectedPage === Page.BLOG}
          route={Routes.BlogPage}
        >
          <NavName name={Routes.BlogPage.name} />
        </NavOption>
        {separator}
        <NavOption
          isSelected={selectedPage === Page.CONTACT}
          route={Routes.ContactPage}
        >
          <MailOutlineIcon style={mailIconStyle} />
        </NavOption>
      </div>
    </div>
  );
};

export const NavName: React.FC<{ name: string }> = props => {
  return <span>{props.name}</span>;
};
