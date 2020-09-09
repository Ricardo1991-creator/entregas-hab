const button = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

button.onclick = function () {
  console.log("acabas de clicar el boton");
  p.texContent = "Hubo un clic en el boton";

  document.body.append(p);
};

button.onmouseover = function () {
  console.log("acabas de pasar el raton por el boton");
};

button.onmouseout = function () {
  console.log("acabas de salir de arriba del boton");
};

input.onkeydown = function () {
  h2.textContent = input.value;
};

window.onload = function () {
  console.log("la pagina acabó de cargar");
  document.body.style.background = "lightblue";
};

window.onload = function () {
  if (!this.confirm("estas seguro?")) return false;
};

input.onfocus = function () {
  console.log("hiciste focus en el input");
};
