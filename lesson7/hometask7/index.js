// const filterNames = (arr, text) => {
//   const filterArr = [];
//   arr.forEach(name => {
//     if (name.includes(text)) {
//       if (name.length > 5) filterArr.push(name);
//     }
//   });

//   return filterArr;
// };

const filterNames = (arr, text) => arr.filter(name => name.includes(text) && name.length > 5);

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
