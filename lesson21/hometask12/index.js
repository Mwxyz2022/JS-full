//      1.Экспортируемая ф-я getSection(num)
//        * num - значение атрибута data-number эл.
//        * вернет значение атрибута data-section родителя.

export const getSection = num =>
  document.querySelector(`span[data-number="${num}"]`).closest('.box').getAttribute('data-section');

// console.log(getSection('3'));
// console.log(getSection('2'));
// console.log(getSection('5'));
