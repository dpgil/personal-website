import pente from "./pente.png";
import truthFiddle from "./truth-fiddle.png";
import typeMaster from "./type-master.png";

export type Project = {
  title: string;
  description: string;
  link: string;
  github: string;
  imgSrc: string;
};

export const projects: Project[] = [
  {
    title: "Truth Fiddle",
    description: "Made with my buddy joe",
    link: "https://truthfiddle.com",
    github: "https://github.com/avadavat/truth-fiddle",
    imgSrc: truthFiddle
  },
  {
    title: "Type Master",
    description: "Minimialist's whack-a-mole",
    link: "https://type-master.herokuapp.com",
    github: "https://github.com/dpgil/type-master",
    imgSrc: typeMaster
  },
  {
    title: "Pente",
    description: "Play Pente online with ur dad",
    link: "https://pente-online.herokuapp.com",
    github: "https://github.com/dpgil/pente",
    imgSrc: pente
  }
];
