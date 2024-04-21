//Створюємо масив посилань для роботи з даними введеними в поле input
// та отримуємо до них доступ за допомогою методу querySelector
const refs = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

console.log(refs.input);
console.log(refs.nameOutput);

//Встановлюємо прослуховувач подій ('input')  на елемент з id #name-input та передаєм колбек функцію
refs.input.addEventListener('input', onInputChange);

//Оголошуємо функцію, яка буде перевіряти значення введені коистувачем в поле "input"
// та виводити його як привітання в span з id #name-output
function onInputChange(event) {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue === '') {
    refs.nameOutput.textContent = 'Anonymous';
  } else {
    refs.nameOutput.textContent = trimmedValue;
  }
}
