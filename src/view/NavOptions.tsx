import React from "react";

const separator = " // ";

const navOptionsStyle: React.CSSProperties = {
  padding: "0px 5px",
  display: "inline-block"
};

export const NavOptions: React.FC = () => {
  return (
    <div style={navOptionsStyle}>
      <NavOption name="art" />
      {separator}
      <NavOption name="code" />
      {separator}
      <NavOption name="me" />
    </div>
  );
};

interface NavOptionProps {
  name: string;
}

// todo: add hover and click styling
const NavOption: React.FC<NavOptionProps> = props => {
  return <span>{props.name}</span>;
};
