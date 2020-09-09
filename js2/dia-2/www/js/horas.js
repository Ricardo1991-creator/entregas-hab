console.log("aqui main");

const now = new Date();

console.log(now);

console.log(now.getTime());

console.log("año", now.getFullYear());

console.log("mes", now.getMonth());

console.log("dia del mes", now.getDate());

console.log(now.getDay());

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getSeconds());

console.log(now.getMilliseconds());

//otras fechas

const fecha2 = new Date("Augost 8 1991");

console.log(fecha2);

const fecha3 = new Date(-20000000);

console.log(fecha3);

//modificar fecha

console.log("_______________");

const ahora = new Date();
ahora.setDate(30);
ahora.setMonth(1);
ahora.setFullYear(1930);

console.log(`${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`);
