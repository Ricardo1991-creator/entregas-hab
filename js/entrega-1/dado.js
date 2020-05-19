"use strict";

const dado = function () {
  return Math.ceil(Math.random() * 6);
};

let rounds = 1;
let puntosAcumulados = 0;
let tiradaDado;

while (puntosAcumulados < 50) {
  tiradaDado = dado();
  puntosAcumulados = puntosAcumulados + tiradaDado;

  console.log(
    `Tirada numero ${rounds++}: sacaste un ${tiradaDado}.Tienes ${puntosAcumulados} puntos`
  );
}
console.log(
  `¡Enhorabuena, ha salido un ${tiradaDado}! ¡Tu numero  total de puntos es ${puntosAcumulados} !`
);
