import React from "react";

interface NavOptionProps {
  name: string;
  onClick?: () => void;
}

// todo: add hover and click styling
export const NavOption: React.FC<NavOptionProps> = props => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return <span onClick={onClick}>{props.name}</span>;
};
