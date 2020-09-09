const figure = document.createElement("figure");
const img = document.createElement("img");
img.setAttribute("src", "https://source.unplash.com/500x300");
img.setAttribute("alt", "imagen aleatoria");

figure.append(img);

const body = document.body;
const p = document.querySelector("p.medio");

body.insertBefore(figure, p);

// ARRAY DE MOVIDAS

const lista = ["pikachu", "bulbasur", "squirtle", "charmander"];

const pokemonUL = document.createElement("ul");

for (const pokemon of lista) {
  const li = document.createElement("li");
  li.textContent = pokemon;

  pokemonUL.append(li);
}

body.prepend(pokemonUL);
