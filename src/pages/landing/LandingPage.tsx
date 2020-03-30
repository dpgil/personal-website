import React from "react";
import { Board } from "./Board";

const boardSize = 5;

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20
};

export type PuzzleState = boolean[];

export const LandingPage: React.FC = () => {
  const [puzzleState, setPuzzleState] = React.useState<PuzzleState>([
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  return (
    <div style={pageStyle}>
      <Description puzzleState={puzzleState} />
      <Board size={boardSize} setPuzzleState={setPuzzleState} />
    </div>
  );
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 10
};

const Description: React.FC<{ puzzleState: PuzzleState }> = props => {
  return (
    <div style={descriptionStyle}>
      hi, i'm daniel gil (not the american ninja warrior). check out my pages or
      try to solve this puzzle, or both, or neither. the world is your{" "}
      <Oyster puzzleState={props.puzzleState} />
    </div>
  );
};

const getLetterStyle = (solved: boolean): React.CSSProperties => {
  return {
    color: solved ? "#f9b49b" : "inherit"
  };
};

const Oyster: React.FC<{ puzzleState: PuzzleState }> = props => {
  const { puzzleState } = props;
  return (
    <>
      <OysterLetter c="o" i={0} puzzleState={puzzleState} />
      <OysterLetter c="y" i={1} puzzleState={puzzleState} />
      <OysterLetter c="s" i={2} puzzleState={puzzleState} />
      <OysterLetter c="t" i={3} puzzleState={puzzleState} />
      <OysterLetter c="e" i={4} puzzleState={puzzleState} />
      <OysterLetter c="r" i={5} puzzleState={puzzleState} />
    </>
  );
};

interface OysterLetterProps {
  c: string;
  i: number;
  puzzleState: PuzzleState;
}

const OysterLetter: React.FC<OysterLetterProps> = props => {
  const { c, i, puzzleState } = props;

  return (
    <span style={getLetterStyle(puzzleState.length > i && puzzleState[i])}>
      {c}
    </span>
  );
};
