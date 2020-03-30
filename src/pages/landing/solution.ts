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
 * ???
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
  let oysterState = 0x0;

  for (let i = 0; i < boardState.length; i++) {
    if (boardState[i] && !key.includes(i)) {
      return oysterState;
    }
  }

  key.forEach((k, i) => {
    if (boardState[k]) {
      oysterState |= 1 << i;
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
  let possibleKeys = []; // [key, rando]

  for (let i = 1; i < possibilities; i++) {
    possibleKeys.push([i, Math.random()]);
  }

  possibleKeys.sort((a, b) => a[1] - b[1]);
  possibleKeys.splice(solutionSize - 1);
  keys.push(...possibleKeys.map(k => k[0]));
  return keys;
};
