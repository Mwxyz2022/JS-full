//      1. Собрать все селекторы в массив
//      2. Фу-я для изьятия контента Эл.
//      3. Иттер. массив event click на каждый эл.

const buttons = document.querySelectorAll('.btn');
const button = Array.from(buttons);

const handleClick = event => {
  console.log(event.target.textContent);
};

button.forEach(elem => elem.addEventListener('click', handleClick));
