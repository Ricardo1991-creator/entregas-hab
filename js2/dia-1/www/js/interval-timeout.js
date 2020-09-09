//SET timeOut

const delayed = () => console.log("esto aparece con retardo");

const delay = setTimeout(delayed, 5000);

clearTimeout(delay);

//Set Interval

let contador = 10;

const tick = () => {
  if (contador === 0) {
    console.log("BOOM");
    clearInterval(interval);
  } else {
    console.log(contador);
  }

  contador = contador - 1;
};

const interval = setInterval(tick, 1000);
