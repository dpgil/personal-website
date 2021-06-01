import React from "react";
import { NavName, NavOption, NavOptions } from "../../view";
import { Routes } from "../../routes";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20,
  paddingTop: 0,
  textAlign: "left"
};

const iconStyle: React.CSSProperties = {
  fontSize: "120px"
};

const textStyle: React.CSSProperties = {
  fontSize: "20px",
  paddingTop: "15px"
};

export const LandingPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <div style={iconStyle}>☂︎</div>
      <NavOptions leftPadding={0} />
      <div style={textStyle}>
        i'm a software engineer in nyc working on real-time monitoring systems
        and data visualization.
      </div>
      <div style={textStyle}>
        other interests include exploring the city on my bicycle, trying new
        plant-based recipes, and learning how to live minimally.
      </div>
      <div style={textStyle}>welcome to my page!</div>
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
