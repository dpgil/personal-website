import React from "react";
import { NavOptions } from "../../view";

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
