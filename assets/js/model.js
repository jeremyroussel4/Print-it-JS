export const slides = [
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

export const getCurrentSlide = () => {
  return slides[currentSlide];
};

export const getCurrentIndex = () => {
  return currentSlide;
};

export const getSlidesCount = () => {
  return slides.length;
};

export const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
};

export const previousSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
};

export const goToSlide = (index) => {
  currentSlide = index;
};