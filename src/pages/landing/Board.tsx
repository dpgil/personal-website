import React from "react";

interface BoardProps {
  size: number;
}

export const Board: React.FC<BoardProps> = props => {
  const elements: JSX.Element[] = [];

  for (let i = 0; i < props.size; i++) {
    elements.push(<TileRow size={props.size} />);
  }

  return <div>{elements}</div>;
};

const tileMargin = 10;

const rowStyle: React.CSSProperties = {
  marginLeft: -tileMargin,
  marginRight: -tileMargin
};

interface RowProps {
  size: number;
}

const TileRow: React.FC<RowProps> = props => {
  const tiles: JSX.Element[] = [];

  for (let i = 0; i < props.size; i++) {
    tiles.push(<Tile />);
  }

  return <div style={rowStyle}>{tiles}</div>;
};

const getTileStyle = (rotate: number): React.CSSProperties => {
  return {
    display: "inline-block",
    margin: tileMargin,
    width: 50,
    height: 50,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    transform: `rotate(${rotate}deg)`,
    transition: "all 0.4s ease-in-out"
  };
};

const Tile: React.FC = () => {
  const [rotate, setRotate] = React.useState<number>(0);

  const onClick = () => {
    setRotate(r => r + 45);
  };

  return (
    <div
      className="gameTile"
      onClick={onClick}
      style={getTileStyle(rotate)}
    ></div>
  );
};
