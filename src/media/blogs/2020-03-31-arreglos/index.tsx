import React from "react";
import { Blog } from "../index";
import { Language } from "../language";
import { Header, Image, Paragraph } from "../tags";
import { TextLink } from "../../../common";
import arr0 from "./arr-0.png";
import arr1 from "./arr-1.png";
import arr2 from "./arr-2.png";
import arr3 from "./arr-3.gif";
import arr4 from "./arr-4.gif";
import arr5 from "./arr-5.gif";

const Content: React.FC = () => {
  return (
    <>
      <Header>Introducción</Header>
      <Paragraph>
        Un arreglo es una estructura de datos homogéneos que se encuentran
        ubicados en forma consecutiva en memoria. Este es un ejemplo de un
        arreglo con los caracteres de mi nombre, Daniel:
      </Paragraph>
      <Image
        src={arr0}
        alt="Una imagen de un arreglo con los caracteres de la palabra Daniel"
      />
      <Paragraph>
        Cada elemento, en este caso cada carácter, tiene su propio espacio, o
        índice, en el arreglo. El primer carácter en el arreglo, D, está en el
        índice 0. El siguiente carácter, A, está en el índice 1. Los índices de
        los elementos en un arreglo incrementan secuencialmente a medida que
        avanzamos por el arreglo, así:
      </Paragraph>
      <Image
        src={arr1}
        alt="Una imagen de un arreglo con índices empezando con 0"
      />
      <Paragraph>
        Cuando el primer elemento en el arreglo está en el índice 0, se llama{" "}
        <b>indexación base-cero</b>. Algunos lenguajes de programación usan{" "}
        <b>indexación base-uno</b>, es decir que el primer elemento en el
        arreglo tiene el índice 1. Así que si usáramos indexación base-uno aquí,
        se vería así:
      </Paragraph>
      <Image
        src={arr2}
        alt="Una imagen de un arreglo con índices empezando con 1"
      />
      <Paragraph>
        <TextLink
          text="Esta"
          link="https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(array)#Array_system_cross-reference_list"
        />{" "}
        es una lista completa de diferentes lenguajes de programación y qué tipo
        de indexación usan. Por simplicidad, usaremos indexación base-cero para
        todo los ejemplos.
      </Paragraph>

      <Header>Buscar</Header>
      <Paragraph>
        Imagina que queremos ver si un elemento existe en el arreglo. En este
        ejemplo, utilizaremos el carácter E. Cómo lo hacemos?
      </Paragraph>
      <Paragraph>
        Una forma en que podemos hacerlo es ver cada carácter en el arreglo, uno
        por uno, y validar si es el carácter E. Empezamos accesando el elemento
        en índice 0, D, pero como no es el elemento que estamos buscando,
        seguimos con el próximo. Vemos el elemento en el índice 1, A, pero
        tampoco es el que queremos. Seguimos con los índices 2, 3, 4, hasta que
        lleguemos a la E en el índice 4.
      </Paragraph>
      <Image src={arr3} alt="Una demostración de la búsqueda lineal" />
      <Paragraph>
        Esta clase de búsqueda se llama <b>búsqueda lineal</b>, que es ver cada
        elemento hasta que encontremos el que estemos buscando o lleguemos al
        final del arreglo. En este ejemplo, tenemos un arreglo con 6 elementos.
        En el peor de los casos, estaríamos buscando algo que no existe en el
        arreglo, y tendríamos que accesar cada uno de los 6 elementos para estar
        seguros que no existe. Si el arreglo fuera el doble de grande,
        tendríamos que accesar el doble de elementos. Si el arreglo tuviera un
        millón de elementos, en el peor de los casos tendríamos que accesar cada
        uno de ellos.
      </Paragraph>
      <Paragraph>
        Por lo tanto, cuando estamos buscando un elemento en un arreglo, el
        número de accesos que tenemos que hacer depende directamente del tamaño
        del arreglo. Un modo técnico de decirlo es que el tiempo que lleva
        buscar un arreglo <b>escala linealmente</b> con el tamaño.
      </Paragraph>

      <Header>Insertar</Header>
      <Paragraph>
        Ahora imagina que queremos insertar un elemento en el arreglo. Por
        ejemplo, supón que queremos insertar el carácter X entre la A y la N.
        Cómo lo podemos hacer?
      </Paragraph>
      <Paragraph>
        No podemos insertarlo directamente en el índice 2, porque la N está ahí.
        Tenemos que hacer el arreglo más grande, para que tengamos espacio para
        el nuevo carácter, y mover las otras letras un espacio a la derecha.
        Después, cuando tengamos un espacio libre para la X, la podemos
        insertar.
      </Paragraph>
      <Image
        src={arr4}
        alt="Una demostración de insertar un elemento en un arreglo"
      />
      <Paragraph>
        Si insertamos un elemento al final de un arreglo, lo podemos hacer en
        una sola operación, porque no tenemos que mover los otros elementos. Si
        queremos insertar algo al inicio de un arreglo, tenemos que mover cada
        elemento en el arreglo un espacio a la derecha para que tengamos espacio
        para el nuevo. Entonces, el número de operaciones que tenemos que
        realizar para insertar un elemento escala linealmente con el tamaño del
        arreglo.
      </Paragraph>

      <Header>Borrar</Header>
      <Paragraph>
        Ahora sabemos cómo accesar elementos en un arreglo y cómo insertarlos,
        pero aún falta algo importante- cómo borrarlos. La forma de borrar es
        similar a la de insertar, excepto en orden inverso. Seguimos con el
        ejemplo de antes para ver por qué.
      </Paragraph>
      <Paragraph>
        Supón que ahora queremos borrar la N del arreglo. No podemos solo borrar
        la N del tercer índice y nada más, porque tendremos un espacio vacío
        entre la X y la I, y el arreglo sería "DAX_IEL". Para borrar la N
        correctamente, tenemos que mover cada elemento después de la N un
        espacio a la izquierda, y finalmente hacer el arreglo un espacio más
        pequeño.
      </Paragraph>
      <Image
        src={arr5}
        alt="Una demostración de borrar un elemento de un arreglo"
      />
      <Paragraph>
        Exactamente como insertar, el peor caso es borrar el primer elemento en
        el arreglo, porque tenemos que mover cada elemento en el arreglo un
        espacio a la izquierda. Y también, el número de operaciones que tenemos
        que realizar para borrar un elemento escala linealmente con el tamaño
        del arreglo.
      </Paragraph>

      <Header>Conclusión</Header>
      <Paragraph>
        Para ver un ejemplo de cuándo y cómo podemos usar arreglos en la
        práctica, intenta resolver el problema en Leetcode,{" "}
        <TextLink
          text="Best Time to Buy and Sell Stock"
          link="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
        />
        .
      </Paragraph>
      <Paragraph>
        Ojalá que te haya ayudado a entender arreglos un poco mejor. Por favor
        deja un comentario si hay algo que omití o si aún tienes alguna
        pregunta.
      </Paragraph>
    </>
  );
};

const arregloBlog: Blog = {
  title: "¿Qué es un arreglo?",
  year: "2020",
  month: "03",
  day: "31",
  description: "Estructuras de datos",
  id: "arreglos",
  content: <Content />,
  language: Language.SPANISH
};

export default arregloBlog;
