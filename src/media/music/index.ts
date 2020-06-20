const blue = require("./blue.wav");
const comfortable = require("./comfortable.mp3");
const escritorio = require("./escritorio.wav");
const finding = require("./finding.wav");
const flying = require("./flying.wav");
const glass = require("./glass.wav");
const lost_illusions = require("./lost-illusions.wav");
const maybe_let = require("./maybe_let.wav");
const shine = require("./shine.wav");
const wall = require("./wall.wav");

export type Song = { name: string; src: string };

export const songs: Song[] = [
  { name: "escritorio", src: escritorio },
  { name: "wall", src: wall },
  { name: "finding", src: finding },
  { name: "lost illusions", src: lost_illusions },
  { name: "blue", src: blue },
  { name: "comfortable", src: comfortable },
  { name: "flying ft. chet", src: flying },
  { name: "maybe let", src: maybe_let },
  { name: "shine", src: shine },
  { name: "glass", src: glass }
];
