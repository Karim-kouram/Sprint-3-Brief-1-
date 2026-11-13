
import {
    showLoading,
    hideLoading,
    showMessage,
    afficherPokemon,
    updateTeamButtons
} from "./ui.js";

import {
    chargerPokemon
} from "./services/api.js";

export let initialcreatures = [];
export let creatures = [];

async function main() {
    showLoading();
    try {
        initialcreatures = [...await chargerPokemon(21, 0)];
        creatures = [...initialcreatures];

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