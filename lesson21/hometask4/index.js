//      1. (Экспортируемая) Фу-я setTitile("text")
//          * найти на странице селектор ".title"
//          * установить в него текст textContent

export const setTitle = text => {
  document.querySelector('.title').textContent = text;
};

setTitle('op op op');
