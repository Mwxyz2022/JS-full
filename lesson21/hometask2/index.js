//      1. экспортируемые функции:
//          * getItemList - найти все эл. классы .technology => в консоль (elementList) & return
//          * getItemArray - найти все эл. класcы .tool => в консоль (elementsArray) & return
//      ** преобразовать с помощью NodeList => Array.from

export const getItemsList = () => {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);
};

getItemsList();

export const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(elementsArray);
};

getItemsArray();
