const logForm = document.querySelector(".login-form"); // пошук елемента в документі
logForm.addEventListener("submit", (event) => {
  //оголошення слухача подій
  event.preventDefault(); // зупиняє перезавантаження

  const email = event.currentTarget.elements.email; // знаходимо елемент email
  const password = event.currentTarget.elements.password; // знаходимо елемент password

  const cleanEmail = email.value.trim(); // прибираємо пробіли
  const cleanPassword = password.value.trim(); // прибираємо пробіли

  if (cleanEmail === "" || cleanPassword === "") {
    alert("All form fields must be filled in "); // перевірка, якщо email або password порожні
    return;
  }
  const formData = {
    email: cleanEmail, // створюємо об'єкт
    password: cleanPassword,
  };

  console.log(formData); // виводимо в консоль
  logForm.reset(); // гчищаємо форму
});
