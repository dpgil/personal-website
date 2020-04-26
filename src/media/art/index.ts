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

export type Image = {
  name: string;
  path: string;
  src: string;
  year: number;
};

export const images: Image[] = [
  { name: "Ava", path: "ava", src: ava, year: 2019 },
  { name: "Chimpanzee", path: "chimpanzee", src: chimpanzee, year: 2018 },
  { name: "Cockatoo", path: "cockatoo", src: cockatoo, year: 2019 },
  { name: "Crow", path: "crow", src: crow, year: 2018 },
  { name: "Body", path: "body", src: femaleBody, year: 2019 },
  { name: "Gaze", path: "gaze", src: femalePortrait, year: 2018 },
  { name: "Flower", path: "flower", src: flower, year: 2019 },
  { name: "Frog", path: "frog", src: frog, year: 2019 },
  { name: "Hand", path: "hand", src: hand, year: 2018 },
  { name: "Jellyfish", path: "jellyfish", src: jellyfish, year: 2018 },
  { name: "Mask", path: "mask", src: mask, year: 2019 },
  { name: "Mushroom", path: "mushroom", src: mushroom, year: 2019 },
  { name: "Fungi", path: "fungi", src: mushrooms, year: 2019 },
  { name: "Orange", path: "orange", src: orange, year: 2019 },
  { name: "Owl", path: "owl", src: owl, year: 2018 },
  { name: "Peacock", path: "peacock", src: peacock, year: 2019 }
];
