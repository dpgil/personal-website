import React from "react";

enum ClickState {
  DEFAULT,
  HOVER,
  CLICK
}

const hoverStyling: React.CSSProperties = {
  color: "#a0a0a0"
};

const clickStyling: React.CSSProperties = {
  color: "#c0c0c0"
};

const defaultStyling: React.CSSProperties = {
  color: "black"
};

const getNavOptionStyle = (
  clickState: ClickState,
  isSelected: boolean
): React.CSSProperties => {
  switch (clickState) {
    case ClickState.HOVER:
      return hoverStyling;
    case ClickState.CLICK:
      return clickStyling;
    default:
      return isSelected ? hoverStyling : defaultStyling;
  }
};

interface NavOptionProps {
  name: string;
  isSelected: boolean;
  onClick?: () => void;
}

// todo: add hover and click styling
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
      {props.name}
    </span>
  );
};
