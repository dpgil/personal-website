import React from "react";
import { Blog } from "../index";
import { Language } from "../language";
import { TextLink } from "../../../common";
import bb0 from "./bb-0.png";
import bb1 from "./bb-1.gif";
import bb2 from "./bb-2.gif";

const headerStyle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: "bold",
  paddingTop: 25,
  paddingBottom: 10
};

const Header: React.FC = props => {
  return <div style={headerStyle}>{props.children}</div>;
};

const pStyle: React.CSSProperties = {
  paddingTop: 13,
  paddingBottom: 13
};

// yes i know <p> tag exists
const Paragraph: React.FC = props => {
  return <div style={pStyle}>{props.children}</div>;
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  paddingTop: 5,
  paddingBottom: 5
};

const Image: React.FC<{ src: string; alt: string }> = props => {
  return <img style={imgStyle} src={props.src} alt={props.alt} />;
};

const BusquedaContent: React.FC = () => {
  return (
    <div>
      <Header>Introducción</Header>
      <Paragraph>
        Esta lección asume que sabes qué son arreglos. Si no conoces qué es un
        arreglo, te invito a que leas{" "}
        <TextLink
          text="esta lección"
          link={process.env.PUBLIC_URL + "#/blog/2020/03/31/arreglos"}
        />
        .
      </Paragraph>
      <Paragraph>
        Imagina que tenemos un arreglo ordenado y queremos saber si un elemento
        existe en él. Por ejemplo, supón que queremos saber si el número 8
        existe en el siguiente arreglo:
      </Paragraph>
      <Image src={bb0} alt="Una imagen de un arreglo con elementos ordenados" />
      <Paragraph>Cómo lo podemos hacer?</Paragraph>
      <Paragraph>
        Una forma es empezar al inicio del arreglo, ver cada elemento uno por
        uno, y validar si es el que estamos buscando. Eso funcionaría bien para
        este ejemplo, pero el problema es que en el peor de casos, tendríamos
        que revisar cada uno de los elementos en el arreglo. Qué pasaría si
        tenemos mil millones de elementos? Tendríamos que validar cada uno, lo
        cual puede tomar mucho tiempo.
      </Paragraph>
      <Paragraph>
        Cómo podemos aprovechar el hecho de que el arreglo está ordenado? Hay
        una forma más eficiente de recorrer el arreglo? Sí. Aquí es donde entra
        la búsqueda binaria.
      </Paragraph>
      <Paragraph>
        Es importante resaltar que la búsqueda binaria solamente puede
        utilizarse con arreglos ordenados. Si no sabemos nada del orden de los
        elementos en el arreglo, la búsqueda lineal es la mejor opción.
      </Paragraph>

      <Header>Concepto</Header>
      <Paragraph>
        Si queremos saber si un elemento existe en un arreglo ordenado, podemos
        adivinar y ver el elemento en la mitad del arreglo. Si es el que estamos
        buscando, hemos terminado de buscar. Si no, tenemos dos opciones: seguir
        buscando en los elementos a la izquierda o a la derecha. Como el arreglo
        está ordenado, si el número que estamos buscando es menor que el
        elemento ubicado en la mitad, seguimos con aquellos que están a la
        izquierda de él. Si por el contrario, el número es mayor, seguimos con
        los que están a la derecha.
      </Paragraph>
      <Paragraph>
        Cuando revisemos los elementos a la izquierda o la derecha, hacemos lo
        mismo: ver el elemento en el medio, compararlo con nuestro objetivo, y
        tomar una decisión de qué hacer después.
      </Paragraph>
      <Paragraph>
        Siguiendo con el ejemplo de antes, aquí hay una demostración de cómo
        buscamos el número 8 en el arreglo. En la imagen, los elementos blancos
        son los elementos que queremos buscar, los rojos son elementos que hemos
        eliminado del espacio de búsqueda, y el amarillo es el elemento
        candidato que estamos viendo.
      </Paragraph>
      <Image src={bb1} alt="Una demostración de la búsqueda binaria" />
      <Paragraph>
        Primero, empezamos con el número en la mitad del arreglo, 26. El número
        que estamos buscando, 8, es menor que 26, entonces sabemos que tenemos
        que buscar en los elementos a la izquierda. Después, vemos el elemento
        del medio de los elementos restantes, 6. El objetivo es mayor que 6,
        entonces seguimos buscando en los elementos a la derecha del 6 (y aún a
        la izquierda del 26). Otra vez, vemos el elemento del medio, que es 12,
        así que seguimos buscando en los elementos a la izquierda del 12.
        Finalmente, vemos el elemento en la mitad de los elementos restantes
        (solo el 8), y es así como hemos encontrado nuestro objetivo.
      </Paragraph>

      <Header>Rendimiento</Header>
      <Paragraph>
        La razón por la que la búsqueda binaria es tan eficiente es porque
        podemos eliminar la mitad de los elementos del arreglo en cada
        operación. Si tenemos un arreglo con 16 elementos, el primer chequeo nos
        deja 8 elementos, después 4, después 2, después 1. En el peor de casos,
        tenemos que hacer 4 operaciones.
      </Paragraph>
      <Paragraph>
        Esencialmente, el número de operaciones que tenemos que hacer en el peor
        de casos es{" "}
        <b>cuántas veces podemos dividir el tamaño del arreglo entre dos</b>. Si
        tenemos mil millones de elementos, en el peor de casos tenemos que hacer
        30 operaciones. Esto es comparado a la búsqueda lineal, en la que
        tendríamos que potencialmente hacer mil millones operaciones, porque
        tendríamos que ver cada elemento en el arreglo.
      </Paragraph>
      <Paragraph>
        Si tenemos un arreglo de tamaño n, una ecuación para calcular el número
        de operaciones para la búsqueda binaria es log₂(n). Es súper eficiente.
      </Paragraph>

      <Header>Implementación</Header>
      <Paragraph>
        Esta es una implementación en Python de un algoritmo de búsqueda
        binaria. He incluido algunos comentarios para facilitar la lectura.
      </Paragraph>
      <script src="https://gist.github.com/dpgil/d325b41df9be53c8aec4a7068831e789.js"></script>
      <Paragraph>
        El siguiente GIF puede ayudarte a entender un poco mejor qué está
        pasando:
      </Paragraph>
      <Image src={bb2} alt="Una demostración de la búsqueda binaria" />
      <Paragraph>
        Una línea muy importante que no mencioné antes es la línea 19. Sin esta
        línea, es posible que, cuando no hayamos encontrado el objetivo,
        lleguemos a un bucle infinito.
      </Paragraph>
      <Paragraph>
        Imagina que en el ejemplo de arriba estamos buscando el número 9.
        Después de revisar el medio al índice 4, hacemos lo siguiente:
        <ul>
          <li>Seguimos con mínimo=4 y máximo=5</li>
          <li>
            Calculamos el índice en la mitad, como (mínimo + máximo) // 2 = (4 +
            5) // 2 = 4
          </li>
          <li>
            Revisamos el elemento en el índice 4, que es menor que el objetivo,
            entonces hacemos mínimo = mitad
          </li>
          <li>Seguimos con mínimo = 4 y máximo = 5</li>
        </ul>
        Y lo continuamos por siempre.
      </Paragraph>
      <Paragraph>
        Para evitar el bucle infinito, revisamos si el mínimo ya es la mitad, y
        si lo es, ya sabemos que no hemos encontrado el objetivo y podemos
        terminar el bucle con un break.
      </Paragraph>
      <Paragraph>
        Si quieres practicarlo lo que has aprendido, puedes hacerlo{" "}
        <TextLink
          text="aquí"
          link={"https://leetcode.com/problems/binary-search/"}
        />
        . Para ir un paso más allá, intenta resolver{" "}
        <TextLink
          text="este problema"
          link={"https://leetcode.com/problems/search-in-rotated-sorted-array/"}
        />{" "}
        en Leetcode. Y por favor dime si hay algo que omití o si aún tienes
        alguna pregunta.
      </Paragraph>
    </div>
  );
};

const busquedaBlog: Blog = {
  title: "Búsqueda binaria",
  year: "2020",
  month: "04",
  day: "26",
  description: "Concepto, rendimiento, e implementación",
  id: "busqueda",
  content: <BusquedaContent />,
  language: Language.SPANISH
};

export default busquedaBlog;
