const comfortable = require("./comfortable.mp3");

export type Song = { name: string; src: string };

export const songs: Song[] = [
  { name: "comfortable", src: comfortable },
  { name: "comfortable-1", src: comfortable },
  { name: "comfortable-2", src: comfortable }
];
