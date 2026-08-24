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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

let currentSlide = 0;

arrowLeft.addEventListener("click", function () {
  console.log("gauche");
  if (currentSlide > 0) {
    currentSlide--;
    image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
  } else {
    currentSlide = slides.length - 1;
    image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
  }
});

arrowRight.addEventListener("click", function () {
  console.log("droite");
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
  } else {
    currentSlide = 0;
    image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
  }
});

const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
  dots.appendChild(dot);
}
