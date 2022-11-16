//        1.  переменная для text-input
//        2.  фу-я вывода значения text-input
//        3.  event elem change

const inputTextEl = document.querySelector('.text-input');

// const getInputText = () => {
//   const inpText = inputTextEl.value;
//   console.log(inpText);
// };

const getInputText = () => {
  console.log(inputTextEl.value);
};

inputTextEl.addEventListener('change', getInputText);
