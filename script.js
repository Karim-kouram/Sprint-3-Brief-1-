// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


import { chargerPokemon, creatures } from "./data.js";

// -------------------------------------------------------------
// 1. afficherPokemon
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------


let section = document.getElementById("grid");
export function afficherPokemon(Tableau) {

    section.innerHTML = "";
    Tableau.forEach((pokemon) => {
        const article = document.createElement("article");

    article.dataset.id = pokemon.id;
    article.className = "card flex flex-col gap-3 rounded-card bg-white p-3 pb-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg";

    const typeColors = {
    fire: "bg-red-500 text-white",
    water: "bg-blue-500 text-white",
    grass: "bg-green-500 text-white",
    electric: "bg-yellow-400 text-black",
    ice: "bg-cyan-300 text-black",
    dark: "bg-gray-800 text-white",
    poison: "bg-purple-500 text-white",
    flying: "bg-sky-300 text-black",
    bug: "bg-lime-500 text-black",
    normal: "bg-stone-400 text-black",
    fighting: "bg-orange-600 text-white",
    psychic: "bg-pink-500 text-white",
    ground: "bg-amber-600 text-white",
    rock: "bg-yellow-700 text-white",
    ghost: "bg-violet-800 text-white",
    dragon: "bg-indigo-600 text-white",
    steel: "bg-slate-400 text-black",
    fairy: "bg-pink-300 text-black"
};

const typeColor = typeColors[pokemon.type] || "bg-gray-200 text-black";


    article.innerHTML = `
    <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
            <img src="${pokemon.image}" alt="logo" class="h-[150px] w-[150px] text-muted">
            <span class="absolute left-3 top-2 font-mono text-sm text-muted">${pokemon.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${pokemon.name}</h3>
            <span class="rounded-full px-3 py-1 text-sm font-bold ${typeColor}">${pokemon.type}</span>
          </div>
          <p class="text-sm text-muted">${pokemon.level} · Total 309</p>
            <button type="button" class="btn-add-team btn-outline hover:bg-yellow-400 hover:text-black hover:border-red-600  hover:shadow-lg transition-all duration-300">
                Ajouter à l'équipe
            </button>`;

    section.append(article);

    })
}
chargerPokemon(21, 0);

const loadButton = document.getElementById("loadButton");
loadButton.addEventListener("click", function(){
    const limit = 21;
    const skip = document.querySelectorAll('article').length;

    if (!skip) return;
    console.log(skip);
    chargerPokemon(limit, skip);
})
// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------

const Section = document.getElementById("detail");
const cardsSection = document.getElementById("grid");
const team = document.getElementById("team");

Section.innerHTML = `
        <div class="text-center">
            <p class="font-display text-xl font-extrabold">
                Aucun Pokémon sélectionné.
            </p>
        </div>
    `;


function afficherDetail(pokemon) {

    const typeColors = {
    fire: "bg-red-500 text-white",
    water: "bg-blue-500 text-white",
    grass: "bg-green-500 text-white",
    electric: "bg-yellow-400 text-black",
    ice: "bg-cyan-300 text-black",
    dark: "bg-gray-800 text-white",
    poison: "bg-purple-500 text-white",
    flying: "bg-sky-300 text-black",
    bug: "bg-lime-500 text-black",
    normal: "bg-stone-400 text-black",
    fighting: "bg-orange-600 text-white",
    psychic: "bg-pink-500 text-white",
    ground: "bg-amber-600 text-white",
    rock: "bg-yellow-700 text-white",
    ghost: "bg-violet-800 text-white",
    dragon: "bg-indigo-600 text-white",
    steel: "bg-slate-400 text-black",
    fairy: "bg-pink-300 text-black"
};

const typeColor = typeColors[pokemon.type] || "bg-gray-200 text-black";

    Section.innerHTML = `
    <article data-id="${pokemon.id}" class="card"> 
        <div class="flex items-center justify-between">
            <span class="font-mono text-sm text-muted">${pokemon.id} · Détail</span>
            <button type="button" aria-label="Fermer le détail"
                class="Annule btn-outline w-11 px-0">✕</button>
        </div>

        <div class="flex h-[155px] items-center justify-center rounded-2xl bg-brand-light">
            <img src="${pokemon.image}" alt="${pokemon.name}"
                class="h-[170px] w-[170px] object-contain">
        </div>

        <div class="flex items-center justify-between">
            <h2 class="font-display text-3xl font-extrabold">${pokemon.name}</h2>
            <span class="rounded-full px-3 py-1 text-sm font-bold ${typeColor}">${pokemon.type}</span>
        </div>

        <p class="text-gray-700">${pokemon.description}.</p>

        <div class="flex flex-col gap-2 text-sm">
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2">
                <span class="font-bold">PV</span>
                <span class="h-3 rounded-full bg-ground">
                    <span class="block h-3 rounded-full ${typeColor}"
                        style="width:${pokemon.stats.hp}%;"></span>
                </span>
                <span class="text-right font-mono">${pokemon.stats.hp}</span>
            </div>

            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2">
                <span class="font-bold">Attaque</span>
                <span class="h-3 rounded-full bg-ground">
                    <span class="block h-3 rounded-full ${typeColor}"
                        style="width:${pokemon.stats.attack}%;"></span>
                </span>
                <span class="text-right font-mono">${pokemon.stats.attack}</span>
            </div>

            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2">
                <span class="font-bold">Défense</span>
                <span class="h-3 rounded-full bg-ground">
                    <span class="block h-3 rounded-full ${typeColor}"
                        style="width:${pokemon.stats.defence}%;"></span>
                </span>
                <span class="text-right font-mono">${pokemon.stats.defence}</span>
            </div>
        </div>
        <div class="flex items-center justify-center">
        <button type="button" class="btn-add-team ${typeColor} px-6 py-3 rounded-xl mt-4">Ajouter à l'équipe</button>
        </div>
    </article>`;
}

function fermerDetail() {
    Section.innerHTML = `
        <div class="text-center">
            <p class="font-display text-xl font-extrabold">
                Aucun Pokémon sélectionné.
            </p>
        </div>
    `;

    document.querySelectorAll(".card.active").forEach(card => {
        card.classList.remove("active");
    });
}

// Événement sur les cards : anciennes et nouvelles
cardsSection.addEventListener("click", function(e) {
    const card = e.target.closest(".card");

    if (!card || !cardsSection.contains(card)) return;

    const id = card.dataset.id;
    const pokemon = creatures.find(p => p.id === id);

    if (!pokemon) return;

    if (e.target.closest(".btn-add-team")) {
        AfficherEquipe(pokemon);
        updateTeamButtons();
        return;
    };

    const isActive = card.classList.contains("active");

    document.querySelectorAll(".card.active").forEach(a => {
        a.classList.remove("active");
    });

    if (isActive) {
        fermerDetail();
    } else {
        card.classList.add("active");
        afficherDetail(pokemon);
    }
});
// État initial
updateTeamButtons();

// Événement du bouton fermer
Section.addEventListener("click", function(e) {

     if (e.target.closest(".Annule")) {
        fermerDetail();
        return;

    }

    const button = e.target.closest(".btn-add-team");
    
    if (!button) return;
    
    const article = e.target.closest(".card");

    if (!article || !Section.contains(article)) return;

    const id = article.dataset.id;
    const pokemon = creatures.find(p => p.id === id);

    if (!pokemon) return;

    const count = document.querySelectorAll("#team article").length;

    if (count >= 6) {
        button.disabled = true;
        return;
    }

   AfficherEquipe(pokemon);
   updateTeamButtons();

   

});



// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------
let searchNom = document.getElementById("search");
searchNom.addEventListener("input", function(){
    let newTableau = creatures.filter((pokemon) => pokemon.name.toLowerCase().includes(searchNom.value.toLowerCase()));
    section.innerHTML = "";
    afficherPokemon(newTableau);
})

let filterType = document.getElementById("filters");
filterType.querySelector(".chip").classList.add("Active");
filterType.addEventListener("click", function(e) {
    const button = e.target.closest(".chip");
    filterType.querySelectorAll("button[type='button']").forEach(a => {
        a.classList.remove("Active");
    });

    if (!button) return;
    const type = button.textContent.toLowerCase();
    if (type == "tous") {
        section.innerHTML = "";
        afficherPokemon(creatures) 
        button.classList.add("Active");
        return;

    }
    let newTableau = creatures.filter((pokemon) => pokemon.type.toLowerCase() == type);
    section.innerHTML = "";
    afficherPokemon(newTableau);
    button.classList.add("Active");

});
// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------
const form = document.getElementById("creature-form");

// Expressions régulières
    const regex_numero = /^#\d{3}$/;
    const regex_nom = /^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/;
    const regex_statistique = /^\d{1,3}$/;
    const regex_image = /^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i;
    const regex_description = /^[\s\S]{10,200}$/;

    // Récupération des éléments
    const id = document.querySelector('[name="id"]');
    const name = document.querySelector('[name="name"]');
    const type = document.querySelector('[name="type"]');
    const level = document.querySelector('[name="level"]');
    const stat = document.querySelectorAll('[name="stat"]');
    const image = document.querySelector('[name="image"]');
    const description = document.querySelector('[name="description"]');

    const errorMessage = document.querySelectorAll(".error-message");

    const button = document.querySelector('button[type="submit"]');
    button.disabled = true;

form.addEventListener("input", function() {

    let notValide = false;

    // Validation du numéro
    if (!regex_numero.test(id.value)) {
        id.style.border = "2px solid red";
        errorMessage[0].textContent = "Numéro invalide (exemple : #001)";
        notValide = true;
    } else {
        id.style.border = "2px solid green";
        errorMessage[0].textContent = "";
    }
    // Validation du nom
    if (!regex_nom.test(name.value)) {
        name.style.border = "2px solid red";
        errorMessage[1].textContent = "nom invalide .";
        notValide = true;
    } else {
        name.style.border = "2px solid green";
        errorMessage[1].textContent = "";
    }
    // Validation du type
    if (type.value === "") {
        type.style.border = "2px solid red";
        errorMessage[2].textContent = "Veuillez sélectionner un type";
        notValide = true;
    } else {
        type.style.border = "2px solid green";
        errorMessage[2].textContent = "";
    }
    // Validation du level
    if (level.value === "") {
        level.style.border = "2px solid red";
        errorMessage[3].textContent = "Veuillez saisir un level";
        notValide = true;
    } else {
        level.style.border = "2px solid green";
        errorMessage[3].textContent = "";
    }
    // Validation du statistique
    if (!regex_statistique.test(stat[0].value)) {
        stat[0].style.border = "2px solid red";
        errorMessage[4].textContent = "statistique invalide (exemple : 0 à 999)";
        notValide = true;
    } else {
        stat[0].style.border = "2px solid green";
        errorMessage[4].textContent = "";
    }
    // Validation du statistique
    if (!regex_statistique.test(stat[1].value)) {
        stat[1].style.border = "2px solid red";
        errorMessage[5].textContent = "statistique invalide (exemple : 0 à 999)";
        notValide = true;
    } else {
        stat[1].style.border = "2px solid green";
        errorMessage[5].textContent = "";
    }
    // Validation du statistique
    if (!regex_statistique.test(stat[2].value)) {
        stat[2].style.border = "2px solid red";
        errorMessage[6].textContent = "statistique invalide (exemple : 0 à 999)";
        notValide = true;
    } else {
        stat[2].style.border = "2px solid green";
        errorMessage[6].textContent = "";
    }
    // Validation du limage
    if (!regex_image.test(image.value)) {
        image.style.border = "2px solid red";
        errorMessage[7].textContent = "limage invalide (ex: https://…/image.png)";
        notValide = true;
    } else {
        image.style.border = "2px solid green";
        errorMessage[7].textContent = "";
    }
    // Validation du description
    if (!regex_description.test(description.value)) {
        description.style.border = "2px solid red";
        errorMessage[8].textContent = "description invalide (exemple: 10 à 200 caractères)";
        notValide = true;
    } else {
        description.style.border = "2px solid green";
        errorMessage[8].textContent = "";
    }

    // Activation / désactivation du bouton
    button.disabled = notValide;
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const articles = section.querySelectorAll(".card");

    if (!articles) return;

    let dejaAjoute = false;
    articles.forEach((article) => {
        if (article.dataset.id === id.value) {
            dejaAjoute = true;
        }
    })
    

    if (dejaAjoute) {
        alert("This Pokémon Already Exist in Page .")
        return;
    }
    creatures.push({
        id: id.value,
        name: name.value,
        type: type.value,
        level: level.value,
        stats: {
            hp: stat[0].value,
            attack: stat[1].value,
            defence: stat[2].value
        },
        image: image.value,
        description: description.value
    });

    afficherPokemon(creatures);

    form.reset();
    button.disabled = true;
});

// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


function AfficherEquipe(pokemon){
    const section = document.getElementById("team");
    
    if (!section) return;

    const articles = section.querySelectorAll("article");;
    let dejaAjoute = false;
    articles.forEach((article) => {
        if (article.dataset.id === pokemon.id) {
            dejaAjoute = true;
        }
    })
    

    if (dejaAjoute) {
        alert("This Pokémon Already Exist in my Team .");
        return;
    }

    const article = document.createElement("article");

    article.className = "flex flex-col gap-3 rounded-card bg-white p-2 pb-4";
    article.dataset.id = pokemon.id;
    
    const typeColors = {
    fire: "bg-red-500 text-white",
    water: "bg-blue-500 text-white",
    grass: "bg-green-500 text-white",
    electric: "bg-yellow-400 text-black",
    ice: "bg-cyan-300 text-black",
    dark: "bg-gray-800 text-white",
    poison: "bg-purple-500 text-white",
    flying: "bg-sky-300 text-black",
    bug: "bg-lime-500 text-black",
    normal: "bg-stone-400 text-black",
    fighting: "bg-orange-600 text-white",
    psychic: "bg-pink-500 text-white",
    ground: "bg-amber-600 text-white",
    rock: "bg-yellow-700 text-white",
    ghost: "bg-violet-800 text-white",
    dragon: "bg-indigo-600 text-white",
    steel: "bg-slate-400 text-black",
    fairy: "bg-pink-300 text-black"
};

const typeColor = typeColors[pokemon.type] || "bg-gray-200 text-black";

    article.innerHTML = `
        <div class="relative flex h-[100px] items-center justify-center rounded-xl bg-brand-light">
            <img src="${pokemon.image}" alt="logo" class="h-[90px] w-[90px] text-muted">
            <span class="absolute left-3 top-2 font-mono text-sm text-muted">${pokemon.id}</span>
            <span class="btn-delete absolute right-3 top-2 font-mono text-sm text-muted cursor-pointer">✕</span>
        </div>
        <div class="flex items-center justify-between gap-1">
            <h3 class="font-display text-base font-semibold">${pokemon.name}</h3>
            <span class="rounded-full px-3 py-1 text-sm font-bold ${typeColor}">${pokemon.type}</span>
        </div>`;

    section.append(article);
    
}

function supprimerEquipe(id) {
    const section = document.getElementById("team");

    const article = section.querySelector(
        `article[data-id="${id}"]`
    );

    if (article) {
        article.remove();
        
    }
}



function updateTeamButtons() {
    const count = team.querySelectorAll("article").length;
    const addButtons = document.querySelectorAll(".btn-add-team");

    addButtons.forEach(btn => {
        btn.disabled = count >= 6;
    });
}

// Supprimer un Pokémon de l'équipe
team.addEventListener("click", function(e) {
    const button = e.target.closest(".btn-delete");
    
    if (!button) return;

    const article = button.closest("article");
    
    if (!article) return;

    supprimerEquipe(article.dataset.id);

    updateTeamButtons();
});




// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
