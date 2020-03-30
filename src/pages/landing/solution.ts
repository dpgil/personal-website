import { BoardState, OysterState } from "./Board";

/**
 * Are you cheating?
 */
export const oysterStateFromBoardState = (
  boardState: BoardState,
  key: number[]
): OysterState => {
  const oysterState = [false, false, false, false, false, false];

  key.forEach((k, i) => {
    if (boardState[k]) {
      oysterState[i] = true;
    }
  });

  return oysterState;
};
