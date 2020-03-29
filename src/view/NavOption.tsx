import React from "react";
import { Link } from "react-router-dom";

enum ClickState {
  DEFAULT,
  HOVER,
  CLICK
}

const hoverStyle: React.CSSProperties = {
  color: "#a0a0a0"
};

const clickStyle: React.CSSProperties = {
  color: "#c0c0c0"
};

const defaultStyle: React.CSSProperties = {
  color: "black"
};

const getNavOptionStyle = (
  clickState: ClickState,
  isSelected: boolean
): React.CSSProperties => {
  switch (clickState) {
    case ClickState.HOVER:
      return hoverStyle;
    case ClickState.CLICK:
      return clickStyle;
    default:
      return isSelected ? hoverStyle : defaultStyle;
  }
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit"
};

interface NavOptionProps {
  route: { path: string; name: string };
  isSelected: boolean;
  onClick?: () => void;
  children?: JSX.Element;
}

export const NavOption: React.FC<NavOptionProps> = props => {
  const [clickState, setClickState] = React.useState<ClickState>(
    ClickState.DEFAULT
  );

  const onMouseEnter = () => {
    setClickState(ClickState.HOVER);
  };

  const onMouseLeave = () => {
    setClickState(ClickState.DEFAULT);
  };

  const onMouseDown = () => {
    setClickState(ClickState.CLICK);
  };

  const onMouseUp = () => {
    setClickState(ClickState.HOVER);

    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <span
      style={getNavOptionStyle(clickState, props.isSelected)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={() => setClickState(ClickState.DEFAULT)}
    >
      <Link style={linkStyle} to={props.route.path}>
        {props.children}
      </Link>
    </span>
  );
};
