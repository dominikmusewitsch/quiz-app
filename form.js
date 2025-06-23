console.clear();

const MAX_CHARACTERS = 150;

const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

const questionField = document.querySelector('[data-js="question"]');
const questionCounter = document.querySelector('[data-js="counter-question"]');

const answerField = document.querySelector('[data-js="answer"]');
const answerCounter = document.querySelector('[data-js="counter-answer"]');

// ---v---ab hier kommt der Zähler---v---

// input event weil die zahl sich beim eintippten der wörter schon verändern soll:
// questionField.addEventListener("input", () => {
//   const remaining = maxCharacters - questionField.value.length;
//   questionCounter.textContent = `${remaining} characters left`;
// });

// // dann muss man die verbleibenden zeichen errechnen => maximale zeichen - eingegebene zeichen
// // eingabefeld soll dann die verbleibenden zeichen anzeigen

// answerField.addEventListener("input", () => {
//   const remaining = maxCharacters - answerField.value.length;
//   answerCounter.textContent = `${remaining} characters left`;
// });

// zusammengefasste version:
function counterForBothFields(elementField, elementCounter) {
  elementCounter.textContent = `${MAX_CHARACTERS} characters left`;

  elementField.addEventListener("input", () => {
    const remaining = MAX_CHARACTERS - elementField.value.length;
    elementCounter.textContent = `${remaining} characters left`;
  });
}

counterForBothFields(questionField, questionCounter);
counterForBothFields(answerField, answerCounter);

// submit button für das formular:
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log("formular abgeschickt!");

  const formElements = event.target.elements;

  // unten stehende variablen speichern den eingegebenen text als string
  const question = formElements.question.value;
  const answer = formElements.answer.value;
  const tag = formElements.tag.value;

  //   console.log(question, answer, tag);

  // neue elemente kreieren die dann später in der html auftauchen: (vom gröten zum kleinsten)
  const card = document.createElement("section");
  card.classList.add("cards");

  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("question");
  newQuestion.textContent = question;

  // ---v---hier alles für safe button---v---
  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("safe");

  const imgInactive = document.createElement("img");
  imgInactive.classList.add("img");
  imgInactive.setAttribute("src", "./assets/save-instagram.png");

  // setAtribute fügt einen neuen attribut inkl. wert hinzu

  const imgActive = document.createElement("img");
  imgActive.classList.add("img", "hidden");
  imgActive.setAttribute("src", "./assets/bookmark.png");

  bookmarkButton.append(imgInactive);
  bookmarkButton.append(imgActive);

  // append damit die kreierten elemente angedockt und dargstellt werden

  bookmarkButton.addEventListener("click", () => {
    imgInactive.classList.toggle("hidden");
    imgActive.classList.toggle("hidden");
  });
  // ---^---hier alles für safe button---^---

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer", "hidden");
  newAnswer.textContent = answer;

  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle-answer");
  toggleButton.textContent = "Show Answer";

  toggleButton.addEventListener("click", () => {
    newAnswer.classList.toggle("hidden");
    if (toggleButton.innerText === "Show Answer") {
      toggleButton.textContent = "Hide Answer";
    } else {
      toggleButton.textContent = "Show Answer";
    }
  });

  const newTag = document.createElement("li");
  newTag.classList.add("tag");
  newTag.textContent = tag;

  const tagList = document.createElement("ul");
  tagList.classList.add("tag-list");

  tagList.append(newTag);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("card-content");

  contentContainer.append(newQuestion);
  contentContainer.append(newAnswer);
  contentContainer.append(toggleButton);

  card.append(contentContainer);
  card.append(tagList);
  card.appendChild(bookmarkButton);

  cardContainer.append(card);

  form.reset();
  questionCounter.textContent = `${MAX_CHARACTERS} characters left`;
  answerCounter.textContent = `${MAX_CHARACTERS} characters left`;

  // beim laden soll das formular sich resetten und und die maximalen zeichen wieder zurückspringen auf deren maximum
});
