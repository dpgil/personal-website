import { Language } from "./language";
import arreglos from "./2020-03-31-arreglos";
import busqueda from "./2020-04-26-busqueda";
import hack from "./2020-05-01-hack";
import gambling from "./2020-05-02-gambling";
import observability from "./2020-05-25-observability";
import darts from "./2020-06-04-darts";

export type Blog = {
  title: string;
  year: string;
  month: string;
  day: string;
  description: string;
  id: string;
  content: JSX.Element;
  language: Language;
};

export const blogs: Blog[] = [
  darts,
  observability,
  gambling,
  hack,
  busqueda,
  arreglos
];
