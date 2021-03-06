import React from "react";
import {
  pathlinker,
  pente,
  personalWebsite,
  truthFiddle,
  typeMaster
} from "../../media/code";
import { TextLink } from "../../common";

export type Project = {
  title: string;
  description: JSX.Element;
  link: string;
  github: string;
  imgSrc: string;
};

export const projects: Project[] = [
  {
    title: "Truth Fiddle",
    description: (
      <span>
        truth fiddle is a boolean expression parser and truth table generator.
        enter any boolean expression and the application will show all
        permutations of the possible input values for each variable and the
        result for each of those possibilities. made with my friend{" "}
        <TextLink text="joe" link="https://github.com/jbadlato" />
      </span>
    ),
    link: "https://truthfiddle.com",
    github: "https://github.com/avadavat/truth-fiddle",
    imgSrc: truthFiddle
  },
  {
    title: "Personal Website",
    description: (
      <span>
        i got tired of paying for my old personal website built with a wysiwyg
        editor, so i built this one from scratch with react. i have a strong
        affinity for sleek, minimal, colorless designs (as seen by my art), but
        really i suck at color and it makes the design process so much easier
      </span>
    ),
    link: "https://dpgil.github.io",
    github: "https://github.com/dpgil/personal-website",
    imgSrc: personalWebsite
  },
  {
    title: "Type Master",
    description: (
      <span>
        minimialist's whack-a-mole. this is a game of endurance, raw talent, and
        simplistic design appreciation. there's no back end whatsoever so if you
        think you got a really high score, take a screenshot and send me an
        email
      </span>
    ),
    link: "https://type-master.herokuapp.com",
    github: "https://github.com/dpgil/type-master",
    imgSrc: typeMaster
  },
  {
    title: "Pente",
    description: (
      <span>
        i implemented an online version of the board game{" "}
        <TextLink text="pente" link="https://en.wikipedia.org/wiki/Pente" />. i
        built it when i was first learning how to navigate the world of
        javascript, so don't look at the code too closely. the back end was
        implemented using socket.io
      </span>
    ),
    link: "https://pente-online.herokuapp.com",
    github: "https://github.com/dpgil/pente",
    imgSrc: pente
  },
  {
    title: "PathLinker",
    description: (
      <span>
        back in college i built a CytoScape application that implements the{" "}
        <TextLink
          text="PathLinker"
          link="https://www.nature.com/articles/npjsba20162"
        />{" "}
        algorithm. it's used to reconstruct interactions in signaling pathways
        in protein-protein interaction networks in cells. check out the paper{" "}
        <TextLink text="here" link="https://f1000research.com/articles/6-58" />.
        i learned a lot about graph theory, but still know nothing about biology
      </span>
    ),
    link: "https://apps.cytoscape.org/apps/pathlinker",
    github: "https://github.com/Murali-group/PathLinker-Cytoscape",
    imgSrc: pathlinker
  }
];
