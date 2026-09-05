const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

let dots;

//Créer les points de navigation
export const createDots = (numberOfSlides) => {
  for (let index = 0; index < numberOfSlides; index++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }

  dots = document.querySelectorAll(".dot");
};

//Afficher la slide actuelle utilisation de toggle pour gérer la classe dot_selected
export const renderSlide = (slide, currentIndex) => {
  image.src = "./assets/images/slideshow/" + slide.image;
  tagLine.innerHTML = slide.tagLine;

  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
};

export const onNextClick = (handler) => {
  arrowRight.addEventListener("click", handler);
};

export const onPreviousClick = (handler) => {
  arrowLeft.addEventListener("click", handler);
};

export const onDotClick = (handler) => {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => handler(index));
  });
};