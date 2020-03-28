import ava from "./ava_square.png";
import chimpanzee from "./chimpanzee_square.jpeg";
import cockatoo from "./cockatoo_square.jpeg";
import crow from "./crow_square.jpeg";
import femaleBody from "./female-body_square.jpeg";
import femalePortrait from "./female-portrait_square.jpeg";
import flower from "./flower_square.png";
import frog from "./frog_square.jpeg";
import hand from "./hand2_square.jpeg";
import jellyfish from "./jellyfish_square.jpeg";
import mask from "./mask_square.jpg";
import mushroom from "./mushroom_square.jpg";
import mushrooms from "./mushrooms_square.jpg";
import orange from "./orange_square.jpg";
import owl from "./owl_square.jpg";
import peacock from "./peacock_square.jpg";
import skull from "./skull_square.jpg";

export type Image = { name: string; src: string; year: number };

export const images: Image[] = [
  { name: "Ava", src: ava, year: 2019 },
  { name: "Chimpanzee", src: chimpanzee, year: 2018 },
  { name: "Cockatoo", src: cockatoo, year: 2019 },
  { name: "Crow", src: crow, year: 2018 },
  { name: "Body", src: femaleBody, year: 2019 },
  { name: "Gaze", src: femalePortrait, year: 2018 },
  { name: "Flower", src: flower, year: 2019 },
  { name: "Frog", src: frog, year: 2019 },
  { name: "Hand", src: hand, year: 2018 },
  { name: "Jellyfish", src: jellyfish, year: 2018 },
  { name: "Mask", src: mask, year: 2019 },
  { name: "Mushroom", src: mushroom, year: 2019 },
  { name: "Fungi", src: mushrooms, year: 2019 },
  { name: "Orange", src: orange, year: 2019 },
  { name: "Owl", src: owl, year: 2018 },
  { name: "Peacock", src: peacock, year: 2019 },
  { name: "Skull", src: skull, year: 2019 }
];
