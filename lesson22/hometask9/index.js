// 1.собрать все эл.в массив
// 2.фу-я консолит атрибут эл., принемаемого ивента
// 3. иттер масив эл. добавляя event-click

const paginatAllEl = document.querySelectorAll('.pagination__page');
const paginatArr = Array.from(paginatAllEl);

const handleClick = event => {
  console.log(event.target.getAttribute('data-page-number'));
};

paginatArr.forEach(elem => elem.addEventListener('click', handleClick));
