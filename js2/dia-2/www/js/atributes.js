const section = document.querySelector("section.content");

const p = document.querySelector("p");

const button = document.querySelector("button");

console.log(section.getAttribute("class"));
console.log(section.getAttribute("id"));
console.log(p.getAttribute("data-berto"));
console.log(button.getAttribute("disabled"));

// cambiar valor de los atributos

section.setAttribute("class", "green");
section.setAttribute("id", "secundario");

//QUitar atributo

button.removeAttribute("disabled");
button.setAttribute("disabled", "yes");

if (p.hasAttribute("data-berto")) {
  console.log("el parrafo tiene el atributo escogido");
}

//data atributes
// DAta-algo

console.log(p.dataset);

p.dataset.rating = "***";
p.dataset.year = "1970";

console.log(p.dataset);
