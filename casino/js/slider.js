const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

setInterval(() => {
  currentSlideIndex += 1;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  slider.style.transform = `translateX(-${100 * currentSlideIndex}%)`;
}, 6000);
