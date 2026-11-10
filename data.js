// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.

export const creatures = [];

const response = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=21"
);

const data = await response.json();

for (const pokemon of data.results) {
  const res = await fetch(pokemon.url);
  const details = await res.json();

  creatures.push({
    id: `#${String(details.id).padStart(3, "0")}`,
    name: details.name,
    type: details.types[0].type.name,
    level: "Base",

    stats: {
      hp: details.stats[0].base_stat,
      attack: details.stats[1].base_stat,
      defence: details.stats[2].base_stat
    },

    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(details.id).padStart(3, "0")}.png`,

    description: `Pokémon ${details.name}`
  });
}


