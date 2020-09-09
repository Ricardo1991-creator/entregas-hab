import todayDate from "/js/helpers.js";

import { add as suma, PI } from "/js/helpers.js";

const today = "hoy";
const add = "Suma";

function principal() {
  console.log(`Bienvenidos a js2, hoy es ${todayDate()}`);

  console.log(`la suma de 3 mas PI es ${suma(3, PI)}`);
}

principal();
