//      1.  Пременые  элементы
//          * - блока с кнопками
//          * - значения счетчика
//      2.  Подписываемся на cобытие клика на кнопку.
//        *КБ
//          * Пооверяем: на кнопке ли событие ?
//          * берем значение атрибута data
//          * определяем на какой кнопке произошел ивент
//          * меняем значение счетчика
//          * записываем новое значение в localStorage
//      3.  Подписываемся на событие Storage
//          * Меняем значение у источника на новое
//      4.  Подписываемся на событие полной загрузки
//          *меняем значения счетчика из localStorage => DOM El
//
//

const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }

  const { action } = e.target.dataset;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);
