/// /
//    1. Фу-и экспортируемые из файла:
//       * getTitleElement - ищет класс в документе
//       * getInputElement - ищет input по type в документе.
//    2. Консолить и вернуть элемент

export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

getTitleElement();
console.log(getTitleElement());

export const getInputElement = () => {
  const textEl = document.querySelector(`input[type=text]`);
  console.dir(textEl);
  return textEl;
};

getInputElement();
console.log(getInputElement());
