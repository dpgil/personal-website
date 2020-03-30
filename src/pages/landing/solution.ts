/**
 *
 *
 *
 *
 *  are
 *
 *
 *
 *
 *
 * u
 *
 *
 *
 *
 *
 * cheating
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { BoardState } from "./Board";
import { OysterState } from "./Oyster";

export const oysterStateFromBoardState = (
  boardState: BoardState,
  key: number[]
): OysterState => {
  const oysterState = [false, false, false, false, false, false];

  boardState.forEach((tilted, i) => {
    if (tilted && !key.includes(i)) {
      console.log("returning empty oyster state");
      return oysterState;
    }
  });

  key.forEach((k, i) => {
    if (boardState[k]) {
      oysterState[i] = true;
    }
  });

  return oysterState;
};

export const generateKey = (
  possibilities: number,
  solutionSize: number
): number[] => {
  // Always have the o as the top left
  let keys: number[] = [0];
  let possibleKeys: number[] = [];

  for (let i = 1; i < possibilities; i++) {
    possibleKeys.push(i);
  }

  possibleKeys.sort(() => 0.5 - Math.random());
  possibleKeys.splice(solutionSize - 1);
  keys.push(...possibleKeys);
  return keys;
};
