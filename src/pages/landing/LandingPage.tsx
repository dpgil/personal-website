import React from "react";
import { NavName, NavOption } from "../../view";
import { Routes } from "../../routes";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20,
  paddingTop: 100
};

const nameStyle: React.CSSProperties = {
  fontSize: "45px",
  fontWeight: "bold",
  display: "inline-block",
  padding: "0px 10px",
  borderBottom: "solid",
  marginBottom: 10
};

export const LandingPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <div style={nameStyle}>DANIEL GIL</div>
      <LandingOption route={Routes.ArtPage} />
      <LandingOption route={Routes.CodePage} />
      <LandingOption route={Routes.MusicPage} />
      <LandingOption route={Routes.BlogPage} />
      <LandingOption route={Routes.ContactPage} />
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
