"use strict";

const number1 = prompt("teclea primer numero");
const number2 = prompt("teclea segundo numero");

const option = prompt("Teclea tipo de operacion");

if (option === "+") {
  console.log(`suma ${number1} + ${number2}:resultado ${number1 + number2}`);
} else if (option === "-") {
  console.log(`resta ${number1} - ${number2}:resultado ${number1 - number2}`);
} else if (option === "*") {
  console.log(
    `multiplica ${number1} * ${number2}:resultado${number1 * number2}`
  );
} else if (option === "/") {
  console.log(`divide ${number1} / ${number2}:resultado ${number1 / number2}`);
} else if (option === "**") {
  console.log(`eleva ${number1} a ${number2}:resultado${number1 ** number2}`);
} else {
  console.log("elige una operacion correcta");
}

//CALCULADORA CON SWITCH

("use strict");

const numberA = prompt("tecla primer numero");
const numberB = prompt("teclea segundo numero");

const option = prompt("Teclea operacion");

switch (option) {
  case "+":
    console.log(
      `suma ${numberA} más ${numberB}: resultado = ${numberA + numberB}`
    );
    break;
  case "-":
    console.log(
      `resta ${numberA} menos ${numberB}: resultado = ${numberA - numberB}`
    );
    break;
  case "*":
    console.log(
      `multiplica ${numberA} por ${numberB}: resultado = ${numberA * numberB}`
    );
    break;
  case "/":
    console.log(
      `divide ${numberA} entre ${numberB}: resultado = ${numberA / numberB}`
    );
    break;
  case "**":
    console.log(
      `eleva ${numberA} a ${numberB}: resultado = ${numberA ** numberB}`
    );
    break;
  default:
    console.log("elige una opcion correcta");
}
