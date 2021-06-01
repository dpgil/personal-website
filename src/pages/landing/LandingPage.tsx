import React from "react";
import { NavName, NavOption, NavOptions } from "../../view";
import { Routes } from "../../routes";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20,
  paddingTop: 20,
  textAlign: "left"
};

const nameStyle: React.CSSProperties = {
  fontSize: "40px",
  fontWeight: "bold",
  display: "inline-block",
  paddingBottom: "10px"
};

const iconStyle: React.CSSProperties = {
  fontSize: "120px"
};

const textStyle: React.CSSProperties = {
  fontSize: "20px"
};

export const LandingPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <div style={iconStyle}>☂︎</div>
      <div style={nameStyle}>DANIEL GIL</div>
      <div style={textStyle}>
        i'm a software engineer in nyc working on real-time monitoring systems
        and data visualization. music
      </div>
      {/* <NavOptions /> */}
    </div>
  );
};

const mailIconStyle: React.CSSProperties = {
  verticalAlign: "middle",
  paddingBottom: 1
};

const landingOptionStyle: React.CSSProperties = {
  fontSize: 35,
  padding: 3
};

const LandingOption: React.FC<{
  route: { path: string; name: string };
}> = props => {
  const { route } = props;

  const child =
    route.name === Routes.ContactPage.name ? (
      <MailOutlineIcon fontSize="large" style={mailIconStyle} />
    ) : (
      <NavName name={route.name} />
    );

  return (
    <div style={landingOptionStyle}>
      <NavOption isSelected={false} route={route}>
        {child}
      </NavOption>
    </div>
  );
};
