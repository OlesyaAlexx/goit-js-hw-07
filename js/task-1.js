const categoriesListEl = document.querySelector('#categories');
const categoriesItemsEl = categoriesListEl.querySelectorAll('.item');

//Виводимо в консоль кількість елементів li що є дітьми списку ul з id = #categories
console.log(`Number of Categories: ${categoriesItemsEl.length}`);

// Перебираємо всі елементи списку ul(#categories) за допомогою методу forEach, створюємо
// змінну categoryTitleName в яку буде входити тег h2 з текстовим контентом, та
// змінну categoryElements в яку відберемо всіх нащадків ul(#categories), теги li
// (створиться псевдомасив)
categoriesItemsEl.forEach(category => {
  const categoryTitleName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');

  // Виводимо в консоль текстовий контент тегу h2
  console.log(`Category: ${categoryTitleName}`);

  // Виводимо  в консоль значення кількості елементів li, використовуючи метод довжини(length)
  console.log(`Elements: ${categoryElements.length}`);
});
