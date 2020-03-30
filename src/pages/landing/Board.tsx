import React, { useEffect } from "react";
import { generateKey, oysterStateFromBoardState } from "./solution";
import { OysterState } from "./Oyster";
import { TileRow } from "./TileRow";

interface BoardProps {
  size: number;
  setOysterState: (oysterState: OysterState) => void;
}

export type BoardState = boolean[];

const boardStyle: React.CSSProperties = {
  paddingBottom: 10
};

export const Board: React.FC<BoardProps> = props => {
  const { size, setOysterState } = props;
  const [s] = React.useState<number[]>(generateKey(size * size, 6));

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
    const oysterState = oysterStateFromBoardState(boardState, s);
    setOysterState(oysterState);
  }, [boardState, s, setOysterState]);

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

  return <div style={boardStyle}>{elements}</div>;
};
