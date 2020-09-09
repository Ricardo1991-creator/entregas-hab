const body = document.body;
const h1 = document.querySelector("#principal");

let contador = 10;

function tick() {
  if (contador === 0) {
    console.log("PUUMM");
    clearInterval(interval);
  } else {
    console.log(contador);
  }
  contador--;
}

const interval = setInterval(tick, 1000);
