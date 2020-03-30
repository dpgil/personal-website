import React from "react";
import { Board, OysterState } from "./Board";

const boardSize = 5;

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20
};

export const LandingPage: React.FC = () => {
  const [oysterState, setOysterState] = React.useState<OysterState>([
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  return (
    <div style={pageStyle}>
      <Description oysterState={oysterState} />
      <Board size={boardSize} setOysterState={setOysterState} />
    </div>
  );
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 10
};

const Description: React.FC<{ oysterState: OysterState }> = props => {
  return (
    <div style={descriptionStyle}>
      hi, i'm daniel gil (not the american ninja warrior). check out my pages or
      try to solve this puzzle, or both, or neither. the world is your{" "}
      <Oyster oysterState={props.oysterState} />
    </div>
  );
};

const getLetterStyle = (solved: boolean): React.CSSProperties => {
  return {
    color: solved ? "#f9b49b" : "inherit"
  };
};

const Oyster: React.FC<{ oysterState: OysterState }> = props => {
  const { oysterState } = props;
  return (
    <>
      <OysterLetter c="o" i={0} oysterState={oysterState} />
      <OysterLetter c="y" i={1} oysterState={oysterState} />
      <OysterLetter c="s" i={2} oysterState={oysterState} />
      <OysterLetter c="t" i={3} oysterState={oysterState} />
      <OysterLetter c="e" i={4} oysterState={oysterState} />
      <OysterLetter c="r" i={5} oysterState={oysterState} />
    </>
  );
};

interface OysterLetterProps {
  c: string;
  i: number;
  oysterState: OysterState;
}

const OysterLetter: React.FC<OysterLetterProps> = props => {
  const { c, i, oysterState } = props;

  return (
    <span style={getLetterStyle(oysterState.length > i && oysterState[i])}>
      {c}
    </span>
  );
};
