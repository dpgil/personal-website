import React from "react";

export type OysterState = number;

export const Oyster: React.FC<{ oysterState: OysterState }> = props => {
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

const getLetterStyle = (solved: boolean): React.CSSProperties => {
  return {
    color: solved ? "#f9b49b" : "inherit"
  };
};

interface OysterLetterProps {
  c: string;
  i: number;
  oysterState: OysterState;
}

const OysterLetter: React.FC<OysterLetterProps> = props => {
  const { c, i, oysterState } = props;
  return <span style={getLetterStyle(!!(oysterState & (1 << i)))}>{c}</span>;
};
