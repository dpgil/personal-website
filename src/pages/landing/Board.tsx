import React, { useEffect } from "react";
import { generateKey, oysterStateFromBoardState } from "./solution";
import { OysterState } from "./Oyster";

interface BoardProps {
  size: number;
  setOysterState: (oysterState: OysterState) => void;
}

export type BoardState = boolean[];

export const Board: React.FC<BoardProps> = props => {
  const { size, setOysterState } = props;
  const [s] = React.useState<number[]>(generateKey(size * size, 6));
  console.log(s);

  const [boardState, setBoardState] = React.useState<BoardState>(
    new Array<boolean>(size * size)
  );

  const toggleTilted = (cellIndex: number) => {
    return () => {
      setBoardState(bs => {
        const copy = [...bs];
        copy[cellIndex] = !copy[cellIndex];
        return copy;
      });
    };
  };

  useEffect(() => {
    setOysterState(oysterStateFromBoardState(boardState, s));
  }, [boardState]);

  const elements: JSX.Element[] = [];

  for (let i = 0; i < size; i++) {
    elements.push(
      <TileRow
        key={`r${i}`}
        tilted={boardState}
        toggleTilted={toggleTilted}
        rowIndex={i}
        size={size}
      />
    );
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
  rowIndex: number;
  tilted: boolean[];
  toggleTilted: (cellIndex: number) => () => void;
}

const TileRow: React.FC<RowProps> = props => {
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

const getTileStyle = (isTilted: boolean): React.CSSProperties => {
  return {
    display: "inline-block",
    margin: tileMargin,
    width: 50,
    height: 50,
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

const Tile: React.FC<TileProps> = props => {
  const { tilted, toggleTilted } = props;

  const onClick = () => {
    toggleTilted();
  };

  return <div onClick={onClick} style={getTileStyle(tilted)}></div>;
};
