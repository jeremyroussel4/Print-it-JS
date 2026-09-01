// Je récupère les éléments HTML.
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

// Je prépare les données des slides.
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlide = 0;

// Je crée les points pour chaque slide.
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

// Je mets à jour l’état visuel du carrousel.
const updateDots = () => {
  const dotElements = document.querySelectorAll(".dot");

  dotElements.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
};

// Je centralise le changement de slide pour éviter la répétition.
const showSlide = (index) => {
  currentSlide = (index + slides.length) % slides.length;
  image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  tagLine.innerHTML = slides[currentSlide].tagLine;
  updateDots();
};

// On initialise le carrousel au chargement.
showSlide(0);

// Je gère les clics sur les flèches.
arrowRight.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

arrowLeft.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});
