import {
  getCurrentIndex,
  getCurrentSlide,
  getSlidesCount,
  goToSlide,
  nextSlide,
  previousSlide,
} from "./model.js";

const updateCarousel = () => {
  console.log("[CONTROLLER] updateCarousel() - index :", getCurrentIndex());
  console.log("[CONTROLLER] données reçues du model - slide :", getCurrentSlide().image);
  renderSlide(getCurrentSlide(), getCurrentIndex());
};

export const initCarousel = () => {
  console.log("[CONTROLLER] initCarousel()");
  createDots(getSlidesCount());
  updateCarousel();

  onNextClick(() => {
    console.log("[CONTROLLER] onNextClick() - clic reçu");
    nextSlide();
    updateCarousel();
  });

  onPreviousClick(() => {
    console.log("[CAROUSEL] onPreviousClick()");
    previousSlide();
    updateCarousel();
  });

  onDotClick((index) => {
    goToSlide(index);
    updateCarousel();
  });
};

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

let dots;

//Créer les points de navigation
const createDots = (numberOfSlides) => {
  for (let index = 0; index < numberOfSlides; index++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }

  dots = document.querySelectorAll(".dot");
};

//Afficher la slide actuelle utilisation de toggle pour gérer la classe dot_selected
const renderSlide = (slide, currentIndex) => {
  console.log("[CONTROLLER] renderSlide() -> DOM - index :", currentIndex, "- slide :", slide.image);
  image.src = "./assets/images/slideshow/" + slide.image;
  tagLine.innerHTML = slide.tagLine;

  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
};

const onNextClick = (handler) => {
  arrowRight.addEventListener("click", handler);
  console.log("[CONTROLLER] event listener enregistré - bouton suivant");
};

const onPreviousClick = (handler) => {
  arrowLeft.addEventListener("click", handler);
  console.log("[CONTROLLER] event listener enregistré - bouton précédent");
};

const onDotClick = (handler) => {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => handler(index));
  });
  console.log("[CONTROLLER] event listener enregistré - points de navigation");
};
