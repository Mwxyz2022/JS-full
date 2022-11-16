// 1. переменная с эл.text - input
// 2. фу-я,которая показывает статус Эл. из входящего ивента, и консолит его
// 3. добавить эл. event change

const checkboxEl = document.querySelector('.task-status');

const getStatus = event => {
  console.log(event.target.checked);
};

checkboxEl.addEventListener('change', getStatus);
