// requirement
//
// input: [array],'str';
// output: [array];

// algorithm
//
// _1. перебрать массив, вернуть массив эл.:
//    * в которую входит 'str'
//    * длина которого > 5ти символов.
//

//      draft solution    //
//
// const filterNames = (arr, text) => {
//   const filterArr = [];
//   arr.forEach(name => {
//     if (name.includes(text)) {
//       if (name.length > 5) filterArr.push(name);
//     }
//   });

//   return filterArr;
// };

//    Refactoring    //
const filterNames = (arr, text) => arr.filter(name => name.includes(text) && name.length > 5);

// testData
console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'a'));
console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'san'));
