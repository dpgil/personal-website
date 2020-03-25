import React from "react";

enum ClickState {
  DEFAULT,
  HOVER,
  CLICK
}

const getColor = (clickState: ClickState, isSelected: boolean): string => {
  switch (clickState) {
    case ClickState.HOVER:
      return "#808080";
    case ClickState.CLICK:
      return "#c0c0c0";
    default:
      return isSelected ? "#808080" : "black";
  }
};

const getNavOptionStyle = (
  clickState: ClickState,
  isSelected: boolean
): React.CSSProperties => {
  return {
    color: getColor(clickState, isSelected)
  };
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

  console.log(props.name + ": " + props.isSelected);

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
