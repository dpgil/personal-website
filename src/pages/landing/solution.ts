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
  let oysterState = 0x0;

  key.forEach((k, i) => {
    if (boardState[k]) {
      oysterState |= 2 << i;
    }
  });

  return oysterState;
};

export const generateKey = (
  possibilities: number,
  solutionSize: number
): number[] => {
  return [0, 1, 2, 3, 4, 5];

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
