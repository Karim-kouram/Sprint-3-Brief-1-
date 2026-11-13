
import {
    showLoading,
    hideLoading,
    showMessage,
    afficherPokemon,
    updateTeamButtons
} from "./ui.js";

import {
    chargerPokemon,
    getCreature
} from "./services/api.js";

export let initialcreatures = [];
export let creatures = [];

export function addCreatures(newCreatures) {
    creatures = [...creatures, ...newCreatures];
}

export const setCreatures = (data) => {
    creatures = data;
};

async function main() {
    showLoading();
    try {
        initialcreatures = [...await chargerPokemon(21, 0)];
        creatures = [...initialcreatures];

        // Récupérer la dernière recherche
        const lastSearch = sessionStorage.getItem("lastSearch") || "";

        const searchNom = document.getElementById("search");
        searchNom.value = lastSearch;

        // Rechercher si une ancienne recherche existe
        if (lastSearch) {
            creatures = await getCreature(lastSearch.toLowerCase());
        }

        afficherPokemon(creatures);
        // État initial
        updateTeamButtons();

    } catch (error) {
        console.error("Erreur lors du chargement :", error);

        if (error instanceof TypeError) {
            showMessage("Network error! Please check your internet connection.");
        } else {
            showMessage("Something went wrong. Please try again.");
        }

    } finally {
        hideLoading();
    }
}

main();