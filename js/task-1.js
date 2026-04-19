const categories = document.querySelector("#categories"); //створюємо змінну/шукаємо за ай ді (#categories) список ul
const items = categories.querySelectorAll(".item"); //створюємо змінну/шукаємо у списку ul елементи li за класом ".item"
console.log(items.length); // виводимо у консоль всю довжину змінної items
for (const item of items) {
  //запускаємо цикл for...of  який переберає item в items
  const title = item.querySelector("h2"); // зберігає у змінну title  знайдений заголовк
  const elements = item.querySelectorAll("li"); // зберігає у змінну elements всі знайдені елементи списку li
  console.log(title.textContent, elements.length); //Повертає текст заголовку та кількість елементів в ньому
}
/* приклад з використанням .forEach()

const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(items.length);

items.forEach(item => {
  const title = item.querySelector("h2");
  const elements = item.querySelectorAll("li");
  console.log(title.textContent, elements.length);
});
*/
