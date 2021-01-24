import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
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
        href="https://github.com/dpgil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
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
