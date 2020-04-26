import React from "react";
import { NavOption } from "./";
import { Page } from "../pages";
import { Routes } from "../routes";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { History } from "history";

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

const mailIconStyle: React.CSSProperties = {
  verticalAlign: "middle",
  paddingBottom: 1
};

interface NavOptionsProps {
  selectedPage: Page;
  setSelectedPage: (page: Page) => void;
  history: History;
}

export const NavOptions: React.FC<NavOptionsProps> = props => {
  const { selectedPage, setSelectedPage } = props;

  return (
    <div>
      <span style={nameStyle}>
        <NavOption
          onClick={() => {
            setSelectedPage(Page.LANDING);
          }}
          isSelected={false}
          route={Routes.Home}
        >
          <NavName name={Routes.Home.name} />
        </NavOption>
      </span>
      <div style={navOptionsStyle}>
        <NavOption
          onClick={() => {
            setSelectedPage(Page.ART);
          }}
          isSelected={selectedPage === Page.ART}
          route={Routes.ArtPage}
        >
          <NavName name={Routes.ArtPage.name} />
        </NavOption>
        {separator}
        <NavOption
          onClick={() => {
            setSelectedPage(Page.CODE);
          }}
          isSelected={selectedPage === Page.CODE}
          route={Routes.CodePage}
        >
          <NavName name={Routes.CodePage.name} />
        </NavOption>
        {separator}
        <NavOption
          onClick={() => {
            setSelectedPage(Page.MUSIC);
          }}
          isSelected={selectedPage === Page.MUSIC}
          route={Routes.MusicPage}
        >
          <NavName name={Routes.MusicPage.name} />
        </NavOption>
        {separator}
        <NavOption
          onClick={() => {
            setSelectedPage(Page.CONTACT);
          }}
          isSelected={selectedPage === Page.CONTACT}
          route={Routes.ContactPage}
        >
          <MailOutlineIcon style={mailIconStyle} />
        </NavOption>
      </div>
    </div>
  );
};

const NavName: React.FC<{ name: string }> = props => {
  return <span>{props.name}</span>;
};
