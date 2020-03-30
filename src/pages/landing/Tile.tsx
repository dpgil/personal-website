import React from "react";

const getTileStyle = (isTilted: boolean): React.CSSProperties => {
  return {
    display: "inline-block",
    margin: 10,
    width: 45,
    height: 45,
    backgroundColor: isTilted ? "#f9b49b" : "#e0e0e0",
    borderRadius: 5,
    transform: `rotate(${isTilted ? 45 : 0}deg)`,
    transition: "all 0.4s ease-in-out"
  };
};

interface TileProps {
  tilted: boolean;
  toggleTilted: () => void;
}

export const Tile: React.FC<TileProps> = props => {
  const { tilted, toggleTilted } = props;

  const onClick = () => {
    toggleTilted();
  };

  return <div onClick={onClick} style={getTileStyle(tilted)}></div>;
};
