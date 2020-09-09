const pokemons = document.querySelectorAll("ul.pokemon li h1");

const handlePokemonClick = function () {
  const title = event.target;

  //Ocultar el resto
  for (const pokemon of pokemons) {
    const li = pokemon.parentElement;
    li.querySelector("p").style.display = "none";
  }

  const p = title.parentElement.querySelector("p");

  p.style.display = "block";
};

for (const pokemon of pokemons) {
  pokemon.addEventListener("click", handlePokemonClick);
}
