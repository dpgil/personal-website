const chimes = require("./chimes.wav");
const comfortable = require("./comfortable.mp3");
const flying = require("./flying.wav");
const glass = require("./glass.wav");
const maybe_let = require("./maybe_let.wav");
const shine = require("./shine.wav");

export type Song = { name: string; src: string };

export const songs: Song[] = [
  { name: "comfortable", src: comfortable },
  { name: "flying ft. chet", src: flying },
  { name: "maybe let", src: maybe_let },
  { name: "shine", src: shine },
  { name: "glass", src: glass },
  { name: "chimes (demo)", src: chimes }
];
