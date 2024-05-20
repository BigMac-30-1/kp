const spinBtn = document.querySelector(".js-spin-btn");
const slots = document.querySelectorAll(".slot");
const count = 9;
let winCombination = [];

spinBtn.addEventListener("click", ({ target }) => {
  winCombination = [];
  target.disabled = true;
  slots.forEach((slot) => {
    const { offsetWidth } = slot;
    const spriteHeight = offsetWidth * count;
    const winIndex = Math.floor(Math.random() * (count - 1));
    // const winIndex = -1;
    const initTranslate = parseInt(slot.style.backgroundPositionY) || 0;
    const decorateTurns = initTranslate > spriteHeight ? 1 : 5;
    const translate = (decorateTurns - (winIndex + 1) / count) * spriteHeight;
    slot.style.backgroundPositionY = `${translate}px`;
    slot.classList.remove("win");
    winCombination.push(winIndex);
  });
});

slots[slots.length - 1].addEventListener("transitionend", () => {
  const bigWinIndex = 2;
  spinBtn.disabled = false;
  if (winCombination.includes(bigWinIndex)) {
    showCustomAlert("Победааа!!!!", true);
  }
  if (winCombination.every((item) => item === winCombination[0])) {
    slots.forEach((slot) => slot.classList.add("win"));
    showCustomAlert("Победааа!!!!", true);
  }
});
