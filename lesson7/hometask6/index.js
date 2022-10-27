const sum = arr => (Array.isArray(arr) ? arr.reduce((acc, num) => acc + num, 0) : null);
//
// const sum = arr => {
//   if (!Array.isArray(arr)) return null;
//   const sumArr = arr.reduce((acc, elem) => acc + elem, 0);
//   return sumArr;
// };

console.log(sum([23, 4, 2, 3, 134, 34, 1]));
console.log(sum(2));
