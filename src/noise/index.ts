const comfortable = require("./comfortable.mp3");
const maybe_let = require("./maybe_let.wav");

export type Song = { name: string; src: string };

export const songs: Song[] = [
  { name: "comfortable", src: comfortable },
  { name: "maybe let", src: maybe_let }
];
