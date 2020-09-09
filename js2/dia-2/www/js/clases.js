const p1 = document.querySelector("p.important");
const p2 = document.querySelector("p.secundary");

console.log(p1.classList);

p1.classList.add("highlight");
p2.classList.remove("secundary");
p2.classList.add("important");
p1.classList.toggle("highlight");
p1.classList.toggle("highlight");
p1.classList.toggle("highlight");
p1.classList.toggle("highlight");

if (p2.classList.contains("important")) {
  console.log("el parrafo 2 tiene la class important");
}
