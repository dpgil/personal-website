const comfortable = require("./comfortable.mp3");

export type Song = { name: string; src: string };

export const songs: Song[] = [
  { name: "Comfortable", src: comfortable },
  { name: "Comfortable-1", src: comfortable },
  { name: "Comfortable-2", src: comfortable }
];
