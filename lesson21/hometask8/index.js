//      1. Экспортируемая фу-я finishList()
//         * создать недостоющие элементы

export const finishList = () => {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const createLiEight = document.createElement('li');
  createLiEight.textContent = '8';
  list.append(createLiEight);

  const createLiFirst = document.createElement('li');
  createLiFirst.textContent = '1';
  list.prepend(createLiFirst);

  const createLiSix = document.createElement('li');
  createLiSix.textContent = '6';
  special.after(createLiSix);

  const createLiFour = document.createElement('li');
  createLiFour.textContent = '4';
  special.before(createLiFour);
};

finishList();
