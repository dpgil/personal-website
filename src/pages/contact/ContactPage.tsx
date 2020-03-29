import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const pageStyle: React.CSSProperties = {
  marginTop: 15
};

const iconStyle: React.CSSProperties = {
  padding: 7,
  textDecoration: "none",
  color: "inherit"
};

export const ContactPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <a style={iconStyle} href="mailto:daniel.patrick.gil@gmail.com">
        <EmailIcon fontSize="large" />
      </a>
      <a
        style={iconStyle}
        href="https://www.facebook.com/daniel.gil.10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon fontSize="large" />
      </a>
      <a
        style={iconStyle}
        href="https://github.com/dpgil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </a>
      <a
        style={iconStyle}
        href="https://www.instagram.com/dang__ink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon fontSize="large" />
      </a>
      <a
        style={iconStyle}
        href="https://www.linkedin.com/in/dpgil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </a>
    </div>
  );
};
