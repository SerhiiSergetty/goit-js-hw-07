const inputEl = document.querySelector("#name-input"); // шукаємо input
const outputEl = document.querySelector("#name-output"); // шукаємо output

inputEl.addEventListener("input", () => {
  const cleanValue = inputEl.value.trim();
  outputEl.textContent = cleanValue === "" ? "Anonimous" : cleanValue;
});
