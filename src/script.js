import { groupes, eleves } from "./data.js";

const listeEleves = document.querySelector("#liste-eleves");
const compteur = document.querySelector("#compteur");

const filtreGroupe = document.querySelector("#filtre-groupe");
const recherche = document.querySelector("#recherche");
const aucunResultat = document.querySelector("#aucun-resultat");



// Cal la moyenne 
function calculerMoyenneNombre(notes) {
    if (notes.length === 0) {
        return null;
    }

    const somme = notes.reduce((total, note) => total + note, 0);

    return somme / notes.length;
}




// Affi  moyenne
function formatMoyenne(notes) {
    const moyenne = calculerMoyenneNombre(notes);

    if (moyenne === null) {
        return "—";
    }

    return `${moyenne.toFixed(1).replace(".", ",")} / 20`;
}




// Cre   chaque eleve
function creerLigne(eleve) {
    const li = document.createElement("li");

    li.classList.add(
        "rounded-2xl","border", "border-line","bg-card","p-3"
    );

    const nom = document.createElement("p");
    nom.classList.add("font-medium");
    nom.textContent = eleve.prenom + " " + eleve.nom;

    const absences = document.createElement("p");
    absences.classList.add("text-sm", "text-muted");
    absences.textContent = eleve.absences + " absences";

    const moyenne = document.createElement("p");
    moyenne.classList.add("font-serif", "text-xl");
    moyenne.textContent = formatMoyenne(eleve.notes);

    if (eleve.absences >= 3) {
        li.classList.add("alerte");

        const badge = document.createElement("span");
        badge.classList.add( "ml-2",  "rounded-full", "bg-alert",  "px-2", "py-1",  "text-xs", "text-white"
        );

        badge.textContent = "Prévenir les parents";
        absences.append(badge);
    }

    li.append(nom, absences, moyenne);

    return li;
}




// Affi t élèves
function afficherEleves(liste) {
    listeEleves.replaceChildren();

    const lignes = liste.map(creerLigne);

    lignes.forEach((ligne) => {
        listeEleves.append(ligne);
    });

    compteur.textContent = `${liste.length} élèves`;
    aucunResultat.hidden = liste.length !== 0;
}



//affi group
function afficherGroupes() {
    filtreGroupe.replaceChildren();

    const optionTous = document.createElement("option");
    optionTous.value = "";
    optionTous.textContent = "Tous les groupes";
    filtreGroupe.append(optionTous);

    groupes.forEach((groupe) => {
        const option = document.createElement("option");
        option.value = groupe.id;
        option.textContent = groupe.nom;
        filtreGroupe.append(option);
    });
}



// filtre elev
function filtrerEleves() {
    const groupeSelectionne = filtreGroupe.value;
    const texteRecherche = recherche.value.trim().toLowerCase();

    const resultats = eleves.filter((eleve) => {
        const correspondGroupe =
            groupeSelectionne === "" ||
            eleve.groupeId === Number(groupeSelectionne);

        const correspondRecherche =
            eleve.prenom.toLowerCase().includes(texteRecherche) ||
            eleve.nom.toLowerCase().includes(texteRecherche);

        return correspondGroupe && correspondRecherche;
    });

    afficherEleves(resultats);
}

filtreGroupe.addEventListener("change", filtrerEleves);

recherche.addEventListener("input", filtrerEleves);

afficherGroupes();
afficherEleves(eleves);