console.clear();

const safeCard = document.querySelector('[data-js="safe"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');

// bookmark symbol wird aktiviert/deaktiviert:
safeCard.addEventListener("click", () => {
  const imageInactive = document.querySelector('[data-js="safe-inactive"]');
  const imageActive = document.querySelector('[data-js="safe-active"]');

  imageInactive.classList.toggle("hidden");
  imageActive.classList.toggle("hidden");
});

showAnswer.addEventListener("click", () => {
  const answerText = document.querySelector('[data-js="answer"]');

  answerText.classList.toggle("hidden");

  // text content soll sich ändern - toggle

  // ich habe zuerst showAnswer variable geloggt um zu gucken warum es nicht funktioniert mit innerHTML oder textContent.
  // innerHTML hat den umbruch komisch gespeichert und bei innerText war er richtig dargstellt
  if (showAnswer.innerText === "Show Answer") {
    showAnswer.textContent = "Hide Answer";
  } else {
    showAnswer.textContent = "Show Answer";
  }
});
