// 1. Переменные для каждого елемента
//   * фу - я logTarget('text', 'color') => добавляет элемент
//   * Добавление фу-и для каждого элемента (погружение / всплытие)
//
// 2.Clear
//   * переменная для эл кнопки Clean
//   * фу-я очистки event-list
//   * event for CleanBtn
//
// 3.attachBtn
//      (!!! По умолчанию Вкл - Вызов фу-ции!!!)
//   * переменная для эл кнопки attachBtn
//   * фу-я Вкл ивент  Всем  Эл.
//   * Event for attachBtn
//
// 4.removeBtn
//   * переменная для эл кнопки removeBtn
//   * фу-я Выкл ивент  Всем  Эл.
//   * Event for removeBtn

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// clear-btn

const clearButton = document.querySelector('.clear-btn');

const clearEventsList = () => {
  eventsListElem.textContent = '';
};

clearButton.addEventListener('click', clearEventsList);

// attach-handlers-btn

const attachBtn = document.querySelector('.attach-handlers-btn');

const attachEventsElement = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};
attachEventsElement();

attachBtn.addEventListener('click', attachEventsElement);

//

// remove-handlers-btn

const removeBtn = document.querySelector('.remove-handlers-btn');

const removeEventsElements = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

removeBtn.addEventListener('click', removeEventsElements);
