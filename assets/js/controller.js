import {
  getCurrentIndex,
  getCurrentSlide,
  getSlidesCount,
  goToSlide,
  nextSlide,
  previousSlide,
} from "./model.js";

import {
  createDots,
  onDotClick,
  onNextClick,
  onPreviousClick,
  renderSlide,
} from "./view.js";

const updateCarousel = () => {
  renderSlide(getCurrentSlide(), getCurrentIndex());
};

export const initCarousel = () => {
  createDots(getSlidesCount());
  updateCarousel();

  onNextClick(() => {
    nextSlide();
    updateCarousel();
  });

  onPreviousClick(() => {
    previousSlide();
    updateCarousel();
  });

  onDotClick((index) => {
    goToSlide(index);
    updateCarousel();
  });
};