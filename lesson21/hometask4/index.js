//      1. (Экспортируемая) Фу-я setTitile("text")
//          * найти на странице селектор ".title"
//          * установить в него текст textContent

export const setTitle = text => {
  const titleElem = document.querySelector('.title');

  titleElem.textContent = text;
};

setTitle('some text');
