import React, { useEffect } from "react";
import { Board } from "./Board";
import { Oyster, OysterState } from "./Oyster";

const boardSize = 5;

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20
};

export const LandingPage: React.FC = () => {
  const [oysterState, setOysterState] = React.useState<OysterState>(0x0);
  const [solved, setSolved] = React.useState<boolean>(false);

  useEffect(() => {
    setSolved(oysterState === 63);
  }, [oysterState]);

  return (
    <div style={pageStyle}>
      <Description oysterState={oysterState} />
      <Board size={boardSize} setOysterState={setOysterState} />
      <div>{solved ? "You did it!" : ""}</div>
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
