const mainTitle = document.getElementById("principal");

console.log(mainTitle);

//Selecciono VARIOS elementos por .calssname
const contentSections = document.getElementsByClassName("content");
//El resultado es un HTMLCollection que es como un array
console.log(contentSections);
//Recorro el HTMLCollection como si fuera un for..of
for (const section of contentSections) {
  //Asigno un color aleatorio a los sections
  section.style.color = `rgba(${rn(255)},${rn(255)},${rn(255)}`;
}

const allSections = document.getElementsByTagName("section");

console.log(allSections);

//Seleccionaos el elemento con las class.other
const otherClass = documen.getElementsByClassName("other");
