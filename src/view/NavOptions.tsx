import React from "react";

const separator = " // ";

const navOptionsStyle: React.CSSProperties = {
  padding: "0px 5px",
  display: "inline-block"
};

interface NavOptionsProps {
  setSelectedPage: (page: Page) => void;
}

export enum Page {
  LANDING,
  ART,
  CODE,
  ME
}

export const NavOptions: React.FC<NavOptionsProps> = props => {
  const { setSelectedPage } = props;

  const onClick = (page: Page) => {
    return () => {
      setSelectedPage(page);
    };
  };

  return (
    <div style={navOptionsStyle}>
      <NavOption onClick={onClick(Page.ART)} name="art" />
      {separator}
      <NavOption onClick={onClick(Page.CODE)} name="code" />
      {separator}
      <NavOption onClick={onClick(Page.ME)} name="me" />
    </div>
  );
};

interface NavOptionProps {
  name: string;
  onClick?: () => void;
}

// todo: add hover and click styling
const NavOption: React.FC<NavOptionProps> = props => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return <span onClick={onClick}>{props.name}</span>;
};
