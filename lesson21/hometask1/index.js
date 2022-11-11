/// /
//    1.
//
//
//

const classEl = '.title';

export const getTitleElement = clas => {
  const titleElem = document.querySelector(clas);
  console.dir(titleElem);
  return titleElem;
};

getTitleElement(classEl);

const typeEl = 'text';

export const getInputElement = typeElement => {
  const textEl = document.querySelector(`input[type=${typeElement}]`);
  console.dir(textEl);
  return textEl;
};

getInputElement(typeEl);
