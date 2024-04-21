//Отримуємо доступ до елементів за допомогою методу querySelector
const widgetEl = document.querySelector('.widget');
const spanColorEl = document.querySelector('.color');
const buttonChangeEl = document.querySelector('.change-color');

//Прослуховуємо подію 'click' на кнопці та викликаємо колбек функцію
buttonChangeEl.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();

  //Змінюємо колір фону 'body' на рандомний колір при виклику функції getRandomHexColor()
  document.body.style.backgroundColor = randomColor;

  //Записуємо у вигляді тексту колір у 'span' з класом "color"
  spanColorEl.textContent = randomColor;
  console.log(spanColorEl.textContent);

  //Використовуємо функцію яка генерує випадковий колір
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}
