//      1. Экспортируемая фу-я clearList
//         *  найти в док селектор .categories
//         *  заменить его содержимое => "" с помощью innerHTML

export const clearList = () => {
  const searchList = document.querySelector('.categories');

  searchList.innerHTML = '';
};
clearList();
