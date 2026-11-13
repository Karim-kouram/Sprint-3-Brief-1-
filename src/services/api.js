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






export async function chargerPokemon(limit, skip) {
    const loadButton = document.getElementById("loadButton");
    loadButton.disabled = true;
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${skip}`
        );

        const data = await response.json();


        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            //console.log(details)

            return {
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
            };
        });

        const results = await Promise.all(promises);

        return results;


    } catch (error) {
        console.log("Erreur lors du chargement :", error);
    } finally {
        loadButton.disabled = false;
    }
}






export async function getCreature(name) {
    const BASE_URL = "https://pokeapi.co/api/v2";
    try {

        const response = await fetch(`${BASE_URL}/pokemon/${name}`)

        const details = await response.json();

        //console.log(details)

        return [{
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
        }];


    } catch (error) {
        console.log("Erreur lors du chargement :", error);
    }
}