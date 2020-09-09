// Altura de la ventana

console.log(window.innerHeight, "alto");
console.log(window.innerWidth, "ancho");

//altura completa de la ventana del navegador

console.log(window.outerHeight);
console.log(window.outerWidth);

//Informacion sobre la URL

console.log(window.location); // objeto con informacon sobre la url
console.log(window.location.href); // Url completa

//Podremos cambiar la url
/*
window.location.href = "https://google.com"; */

console.log(window.navigator);
console.log(window.navigator.vendor);

if (window.navigator.vendor.indexOf(`Google`) > -1) {
  console.log("estas usando google");
} else {
  console.log("estas usando otro navegador");
}

//Informacion sobre el scroll
console.log(window.scrollY);
console.log(window.scrollX);
