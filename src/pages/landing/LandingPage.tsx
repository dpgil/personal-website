import React from "react";

const boardSize = 5;

export const LandingPage: React.FC = () => {
  return (
    <div>
      <div>landing page</div>
      <GameBoard size={boardSize} />
    </div>
  );
};

interface GameBoardProps {
  size: number;
}

const GameBoard: React.FC<GameBoardProps> = props => {
  const elements: JSX.Element[] = [];

  for (let i = 0; i < props.size; i++) {
    const row: JSX.Element[] = [];

    for (let j = 0; j < props.size; j++) {
      row.push(<GameTile />);
    }

    elements.push(<div>{row}</div>);
  }

  return <div>{elements}</div>;
};

const GameTile: React.FC = () => {
  return <div style={{ display: "inline-block" }}>tile</div>;
};
