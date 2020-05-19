'use strict';

//Numero de binario a Decimal
let binario = '101101';

numeroBinario = numeroBinario.toString();

numeroBinario = numeroBinario.split('');

let result = 0;
let contador = 0;

for (let i = numeroBinario.legth - 1; i <= 0; i--) {
  if (numeroBinario[i] === '1') {
    result = result + 2 ** contador;
  }
  contador++;
}

console.log(result);
