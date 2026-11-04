# 🎓 Nour Academy — Espace Enseignant

> Une plateforme web dédiée aux enseignants pour gérer leurs élèves, consulter leurs résultats et suivre leur progression scolaire.

## 📌 Présentation

**Nour Academy – Espace Enseignant** est une application web développée dans le cadre d'un projet de formation chez YouCode.

L'objectif est de simplifier le suivi pédagogique en permettant aux enseignants de consulter les informations de leurs élèves, filtrer les groupes et rechercher rapidement un étudiant.

## ✨ Fonctionnalités

### US1 — Consulter les élèves
- Affichage de la liste des élèves.
- Consultation des informations principales.
- Calcul automatique de la moyenne.
- Identification des élèves ayant plusieurs absences.
- Alerte pour prévenir les parents.

### US2 — Choisir un groupe et rechercher
- Filtrage des élèves par groupe.
- Recherche instantanée par prénom ou nom.
- Recherche insensible aux majuscules et minuscules.
- Combinaison du filtre et de la recherche.
- Affichage du nombre de résultats.
- Message lorsqu'aucun élève ne correspond.

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure de l'application |
| CSS3 | Mise en forme |
| JavaScript | Logique et interactions |
| Tailwind CSS v4 | Design et composants |
| Vite | Environnement de développement |

## 📁 Structure du projet

```text
Nour-Academy-espace-enseignant/
│
├── index.html
├── package.json
├── vite.config.js
│
├── src/
│   ├── main.js
│   ├── script.js
│   ├── data.js
│   └── style.css
│
├── test/
│   └── test1.html
│
└── README.md
```

## 🚀 Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/ben-anass/Nour-Academy-espace-enseignant.git
```

### 2. Accéder au dossier

```bash
cd Nour-Academy-espace-enseignant
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

### 5. Créer une version de production

```bash
npm run build
```

## 🧪 Tests manuels

| Test | Résultat attendu |
|---|---|
| Ouvrir l'application | Afficher 15 élèves |
| Choisir un groupe | Afficher uniquement ses élèves |
| Rechercher un prénom | Afficher les élèves correspondants |
| Rechercher un nom | Afficher les élèves correspondants |
| Combiner recherche et filtre | Afficher les résultats correspondants |
| Recherche sans résultat | Afficher un message informatif |

## 🎨 Identité visuelle

- Interface moderne et épurée.
- Design responsive.
- Palette de couleurs douce et professionnelle.
- Typographies : Inter et Newsreader.
- Interface pensée pour faciliter le travail quotidien des enseignants.

## 👨‍💻 Auteur

**Anass Ben Abou**

Étudiant en formation — YouCode  
Parcours : Full Stack Web Development

---

*Projet pédagogique — Nour Academy © 2026*