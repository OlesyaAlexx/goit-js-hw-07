// Отримуємо доступ до форми за допомогою методу querySelector
const registerForm = document.querySelector('.login-form');

// Прослуховуємо подію 'submit' на формі та викликаємо колбек функцію
registerForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  // використовуємо метод preventDefault(), щоб під час відправлення форми сторінка не перезавалась
  event.preventDefault();

  // Викоистовуємо властивість elements для доступу до елементів форми
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  // Перевіряємо чи правильно заповненні поля форми, якщо ні то виводими попередження в alert
  if (mail === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  // Якщо форму відправили, створюємо обєкт з якого в консоль будуть виводитись
  // заповнені поля та їх значення (ключ-значення)
  const formData = {
    mail,
    password,
  };

  console.log(formData);

  // Очищаємо значення полів форми
  registerForm.reset();
}
