//Отримуємо доступ до елементів
const controlsEl = document.getElementById('controls');
console.log(controlsEl);
const numberInputEl = document.querySelector('input');
console.log(numberInputEl);
const buttonCreateEl = document.querySelector('button[data-create]');
console.log(buttonCreateEl);
const buttonDestroyEl = document.querySelector('button[data-destroy]');
console.log(buttonDestroyEl);
const boxesEl = document.getElementById('boxes');
console.log(boxesEl);

//Прослуховуємо подію 'click' на кнопці та викликаємо колбек функцію
buttonCreateEl.addEventListener('click', () => {
  //Перевіряємо валідність введеного числа в поле 'input'
  const amount = Number(numberInputEl.value);
  if (amount < 1 || amount >= 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 99');
    return;
  }
  createBoxes(amount);
});

//Прослуховуємо подію 'click' на кнопці та викликаємо колбек функцію
buttonDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  // Викликаємо функцію clearBoxes(), щоб очистити контейнер перед створенням нових блоків
  clearBoxes();

  //Створюємо нові бокси і додаємо їх в 'div' зі значенням id boxes
  for (let i = 0; i < amount; i++) {
    const divBoxElement = document.createElement('div');
    const size = 30 + i * 10;
    const randomColor = getRandomHexColor();
    divBoxElement.style.width = `${size}px`;
    divBoxElement.style.height = `${size}px`;
    divBoxElement.style.backgroundColor = randomColor;
    divBoxElement.style.marginBottom = '10px';
    boxesEl.appendChild(divBoxElement);
  }

  // Очищаємо значення в інпуті
  numberInputEl.value = '';
}

//Оголошуємо функцію, яка буде очищати вміст div#boxes
function clearBoxes() {
  boxesEl.innerHTML = '';
}

//Функція destroyBoxes(), викликає функцію clearBoxes(),
//щоб видалити всі створені елементи в div#boxes
function destroyBoxes() {
  clearBoxes();
}

//Використовуємо функцію для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
