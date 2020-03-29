import truthFiddle from "./truth-fiddle.png";

export type Project = {
  title: string;
  description: string;
  link: string;
  github: string;
  src: string;
};

export const projects: Project[] = [
  {
    title: "Truth Fiddle",
    description: "Made with my buddy joe",
    link: "https://truthfiddle.com",
    github: "https://github.com/avadavat/truth-fiddle",
    src: truthFiddle
  }
];
