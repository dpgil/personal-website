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

    elements.push(
      <div style={{ marginLeft: -10, marginRight: -10 }}>{row}</div>
    );
  }

  return <div>{elements}</div>;
};

const getTileStyle = (rotate: number): React.CSSProperties => {
  return {
    display: "inline-block",
    margin: 10,
    width: 50,
    height: 50,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    transform: `rotate(${rotate}deg)`
  };
};

const GameTile: React.FC = () => {
  const [rotate, setRotate] = React.useState<number>(0);

  const onClick = () => {
    setRotate(r => r + 45);
  };

  return (
    <div className="gameTile" onClick={onClick} style={getTileStyle(rotate)}>
      tile
    </div>
  );
};
