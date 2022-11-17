// // так можно получить данные формы - ВАРИАНТ 1:
// // eslint-disable-next-line no-undef
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// // более простой формат считывания формы - ВАРИАНТ 2:
// // const formData = Object.fromEntries(new FormData(formElem));

// Эл.в переменные
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErorElem = document.querySelector('.error-text_email');
const passwordErorElem = document.querySelector('.error-text_password');

// Проверка валидации
const isRequired = value => (value ? undefined : 'Required');
const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

// объект к проверками по эл.
const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

// фу-я проверки
const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

// проверка поля email
const onEmailChange = event => {
  const errorText = validate('email', event.target.value);

  emailErorElem.textContent = errorText;
};

// проверка поля password
const onPasswordChange = event => {
  const errorText = validate('password', event.target.value);

  passwordErorElem.textContent = errorText;
};

// ивенты элементов
emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

// эл. формы
const formElem = document.querySelector('.login-form');

// фу-я  Отмена дефолтного поведения браузера, сборка объекта формы, выводим в алерт.
const onFormSubmit = event => {
  event.preventDefault(); // отмена Дефолт поведения браузера
  // const formData = [...new FormData(formElem)].reduce(
  //   (acc, [field, value]) => ({ ...acc, [field]: value }),
  //   {},
  // );

  const formData = Object.fromEntries(new FormData(formElem));

  alert(JSON.stringify(formData));
};

// ивент Submit
formElem.addEventListener('submit', onFormSubmit);
