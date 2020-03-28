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

export type Image = { name: string; src: string };

export const images: Image[] = [
  { name: "Ava", src: ava },
  { name: "Chimpanzee", src: chimpanzee },
  { name: "Cockatoo", src: cockatoo },
  { name: "Crow", src: crow },
  { name: "Body", src: femaleBody },
  { name: "Gaze", src: femalePortrait },
  { name: "Flower", src: flower },
  { name: "Frog", src: frog },
  { name: "Hand", src: hand },
  { name: "Jellyfish", src: jellyfish },
  { name: "Mask", src: mask },
  { name: "Mushroom", src: mushroom },
  { name: "Fungi", src: mushrooms },
  { name: "Orange", src: orange },
  { name: "Owl", src: owl },
  { name: "Peacock", src: peacock },
  { name: "Skull", src: skull }
];
