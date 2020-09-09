const mainContent = document.querySelector("div.content");

//Hijos de body
console.log(mainContent.children);

//Primer hijo de div.content
console.log(mainContent.firstElementChild);

//Ultimo hijo
console.log(mainContent.lastElementChild);

const lastP = mainContent.lastElementChild.lastElementChild;

const h1 = lastP.parentElement.parentElement.children[0].children[0];

console.log(h1);

//Entre hermanos

const previousP = lastP.previousElementSibling;

console.log(previousP);

previousP.nextElementSibling;
