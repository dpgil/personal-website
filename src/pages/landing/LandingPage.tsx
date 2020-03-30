import React from "react";

const boardSize = 5;

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20
};

export const LandingPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <Description />
      <GameBoard size={boardSize} />
    </div>
  );
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 10
};

const Description: React.FC = () => {
  return (
    <div style={descriptionStyle}>
      hi, i'm daniel gil (not the american ninja warrior). check out my pages or
      try to solve this puzzle, or both, or neither. the world is your oyster
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
