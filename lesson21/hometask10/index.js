//        1. экспортируемая ф-я manageClasses():
//          * добавит класс 'selected' эл. с классом 'one'
//          * удалить 'selected' с эл. с классом 'two'
//          * Переключить toggle класс three_done - у эл. с классом three
//          * Добавить класс  another-class для эл. с класом four если some-class
//

export const manageClasses = () => {
  const elOne = document.querySelector('.one');
  elOne.classList.add('selected');

  const elTwo = document.querySelector('.two');
  elTwo.classList.remove('selected');

  const elTree = document.querySelector('.three');
  elTree.classList.toggle('three_done');

  const anothClassFourEl = document.querySelector('.four');
  if (anothClassFourEl.classList.contains('some-class')) {
    anothClassFourEl.classList.add('another-class');
  }
};
