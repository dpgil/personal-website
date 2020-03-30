import React from "react";
import { Tile } from "./Tile";

const rowStyle: React.CSSProperties = {
  marginLeft: -10,
  marginRight: -10
};

interface RowProps {
  size: number;
  rowIndex: number;
  tilted: boolean[];
  toggleTilted: (cellIndex: number) => () => void;
}

export const TileRow: React.FC<RowProps> = props => {
  const { size, rowIndex, tilted, toggleTilted } = props;

  const tiles: JSX.Element[] = [];

  for (let i = 0; i < size; i++) {
    const cellIndex = rowIndex * size + i;
    tiles.push(
      <Tile
        key={`c${cellIndex}`}
        tilted={tilted.length > cellIndex && tilted[cellIndex]}
        toggleTilted={toggleTilted(cellIndex)}
      />
    );
  }

  return <div style={rowStyle}>{tiles}</div>;
};
