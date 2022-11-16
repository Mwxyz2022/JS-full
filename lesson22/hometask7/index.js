// 1. переменная с эл.text - input
// 2. фу-я, вытаскивает переданый контент Эл. из входящего ивента, и консолит его

const textInp = document.querySelector('.text-input');

const textFromInput = event => {
  console.log(event.target.value);
};

textInp.addEventListener('change', textFromInput);
