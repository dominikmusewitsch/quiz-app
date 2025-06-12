const main = document.querySelector(`[data-js="main"]`);
const btnDarkMode = document.querySelector(`[data-js="btn-dark-mode"]`);

btnDarkMode.addEventListener("click", () => {
  main.classList.toggle("dark");
});
