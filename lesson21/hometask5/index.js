//      1. Экспортируемая фу-я setButton('buttonText')
//        * найти эл. <body>.
//        * добавить button с buttonText

//= ========v1
// //
export const setButton = buttonText => {
  const elBody = document.querySelector('body');

  elBody.innerHTML = `<button>${buttonText}</button>`;
};
// //
//= ======v2
//

// const setButton2 = buttonText => {
//   const elBody = document.querySelector('body');

//   elBody.textContent = `<button>${buttonText}</button>`;
// };

setButton('but1');
setButton('Supper button!!!!');
// setButton2('where is button?');
