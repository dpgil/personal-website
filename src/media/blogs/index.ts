import arreglos from "./2020-03-31-arreglos";
import busqueda from "./2020-04-26-busqueda";
import hack from "./2020-05-01-hack";
import { Language } from "./language";

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

export const blogs: Blog[] = [hack, busqueda, arreglos];
