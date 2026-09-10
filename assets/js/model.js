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

//Index de la slide actuellement affichée
let currentSlide = 0;

//Quelle slide doit être affichée actuellement ?
export const getCurrentSlide = () => {
  console.log("[MODEL] getCurrentSlide() -> slide :", slides[currentSlide].image);
  return slides[currentSlide];
};

//Quelle est l'index de la slide actuellement affichée ?
export const getCurrentIndex = () => {
  console.log("[MODEL] getCurrentIndex() -> index :", currentSlide);
  return currentSlide;
};

//Connaître le nombre de slides
export const getSlidesCount = () => {
  console.log("[MODEL] getSlidesCount() -> nombre :", slides.length);
  return slides.length;
};

//Passer à la slide suivante
export const nextSlide = () => {
  console.log("[MODEL] nextSlide() - currentSlide avant :", currentSlide);
  currentSlide = (currentSlide + 1) % slides.length;
  console.log("[MODEL] nextSlide() - currentSlide après :", currentSlide);
};

//Passer à la slide précédente
export const previousSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
};

export const goToSlide = (index) => {
  currentSlide = index;
};