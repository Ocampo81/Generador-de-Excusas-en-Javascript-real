/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Función para generar excusa aleatoria
  function generateExcuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    // Obtener índices aleatorios para cada arreglo
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    // Construir la excusa aleatoria
    let excuse =
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex];

    return excuse;
  }

  console.log(generateExcuse());
};
