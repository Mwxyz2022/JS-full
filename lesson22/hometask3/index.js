//      1. Переменная с селлектором task-status эл.
//      2. фу-я вызова состояния эл.
//      3. ивент на эл.

const checkboxElem = document.querySelector('.task-status');

// const getCheckStat = () => {
//   const statCheckbox = checkboxElem.checked;
//   console.log(statCheckbox);
// };
const getCheckStat = () => console.log(checkboxElem.checked);

checkboxElem.addEventListener('click', getCheckStat);
