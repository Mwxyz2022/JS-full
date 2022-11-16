//        1.  Переменные Элементов search__input, search__btn
//        2.  фу-я для ел search__input
//        3.  event for search__btn 'click'

const searchInpElem = document.querySelector('.search__input');
const searchBtnElem = document.querySelector('.search__btn');

const getInputContent = () => {
  console.log(searchInpElem.value);
};

searchBtnElem.addEventListener('click', getInputContent);
