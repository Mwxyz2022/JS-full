//        1. Переменная с Эл.  .create-btn.
//        2. фу-я вызова alert с текстом ('done');
//        3.  назначение event for Click

const createBtn = document.querySelector('.create-btn');

const alertForBut = () => {
  alert(`done`);
};

createBtn.addEventListener('click', alertForBut);
