# OpenClassrooms - Print-it

---

## 📖 Description

Print-it est le troisième projet de la formation **Développeur Web OpenClassrooms**.

L'objectif est de dynamiser le site web statique d'une petite imprimerie familiale en développant un **carrousel interactif en JavaScript**.

---

## 🚀 Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🎯 Compétences développées

- Comprendre les bases du langage JavaScript
- Manipuler le DOM
- Utiliser les variables, tableaux et conditions
- Gérer les événements et les clics utilisateur
- Modifier dynamiquement le contenu d'une page web
- Créer un carrousel interactif
- Organiser le JavaScript avec des modules ES6 (`import` et `export`)
- Séparer les responsabilités entre la gestion de l'état et la manipulation du DOM
- Utiliser Git et GitHub pour versionner un projet

## ✨ Fonctionnalités

Le carrousel permet de :

- naviguer vers la slide suivante avec la flèche droite ;
- revenir à la slide précédente avec la flèche gauche ;
- naviguer directement vers une slide en cliquant sur un dot ;
- identifier la slide active grâce au dot sélectionné ;
- boucler automatiquement de la dernière slide vers la première et inversement.

## 🧱 Architecture JavaScript

Le carrousel sépare la gestion de l'état de l'interface :

- `model.js` contient les données des slides et l'état courant du carrousel ;
- `controller.js` gère les interactions utilisateur, manipule le DOM, crée les dots et affiche les slides ;
- `main.js` initialise le carrousel ;
- `archive/script.js` conserve l'ancienne version du carrousel avant la refactorisation.

Pour ce carrousel, l'affichage et la coordination sont réunis dans le contrôleur afin de garder une structure simple. Le modèle reste responsable des données et de la navigation entre les slides.

## 📂 Installation

Clonez le dépôt :

```bash
git clone git@github.com:jeremyroussel4/Print-it-JS.git
cd Print-it-JS
```

Le projet ne nécessite aucune dépendance supplémentaire. Pour lancer le site localement, utilisez un serveur local afin que les modules JavaScript soient chargés correctement :

```bash
python3 -m http.server 8000
```

Puis ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.

## 🗂️ Structure principale

```text
Print-it-JS/
├── index.html
├── ReadMe.md
└── assets/
	├── style.css
	├── images/
	│   └── slideshow/
	└── js/
		├── controller.js
		├── main.js
		├── model.js
		└── archive/
			└── script.js
```

## 🔄 Fonctionnement général

Lorsqu'une flèche ou un dot est cliqué :

1. le Controller détecte l'événement ;
2. le Controller demande au Model de modifier la slide courante ;
3. le Controller relit l'état du Model ;
4. le Controller actualise l'image, le texte et le dot sélectionné dans le DOM.
