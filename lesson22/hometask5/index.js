//      1.  переменная с эл. single-use-btn
//      2.  фу-я вывода в консоль 'clicked' и отключение event
//      3.  event для кнопки

const buttonClick = document.querySelector('.single-use-btn');

const getClickRemoveEvent = () => {
  console.log('clicked');

  buttonClick.removeEventListener('click', getClickRemoveEvent);
};

buttonClick.addEventListener('click', getClickRemoveEvent);
