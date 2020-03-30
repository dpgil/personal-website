import React, { useEffect } from "react";
import { oysterStateFromBoardState } from "./solution";

interface BoardProps {
  size: number;
  setOysterState: (oysterState: OysterState) => void;
}

export type OysterState = boolean[];
export type BoardState = boolean[];

export const Board: React.FC<BoardProps> = props => {
  const { size, setOysterState } = props;

  const [boardState, setBoardState] = React.useState<BoardState>(
    new Array<boolean>(25)
  );

  const setTilted = (cellIndex: number) => {
    return () => {
      setBoardState(bs => {
        const copy = [...bs];
        copy[cellIndex] = !copy[cellIndex];
        return copy;
      });
    };
  };

  useEffect(() => {
    setOysterState(oysterStateFromBoardState(boardState, [0, 1, 2, 3, 4, 5]));
  }, [boardState]);

  const elements: JSX.Element[] = [];

  for (let i = 0; i < size; i++) {
    elements.push(
      <TileRow
        tilted={boardState}
        setTilted={setTilted}
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
  setTilted: (cellIndex: number) => () => void;
}

const TileRow: React.FC<RowProps> = props => {
  const { size, rowIndex, tilted, setTilted } = props;

  const tiles: JSX.Element[] = [];

  for (let i = 0; i < size; i++) {
    const cellIndex = rowIndex * size + i;
    tiles.push(
      <Tile
        tilted={tilted.length > cellIndex && tilted[cellIndex]}
        toggleTilted={setTilted(cellIndex)}
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
