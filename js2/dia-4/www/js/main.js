const button = document.querySelector("button");
const p = document.querySelector("p");
const body = document.body;

const newP = document.createElement("p");
newP.textContent = "lorem ipsum sin amet";
console.log(newP);

body.append(newP);

const date = document.createElement("new date");
date.textContent = "new date";

body.append(date);

const handleClick = function () {
  p.textContent = `tweet enviado`;
};

button.addEventListener("click", handleClick);
