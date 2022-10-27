const cloneArr = arr => (Array.isArray(arr) ? [...arr] : null);

const testArr = [23, 43, 2, 3, 341];

const testArr2 = cloneArr(testArr);
testArr.push(145);
console.log(testArr);
console.log(testArr2);
// const cloneArr = arr => {
//   if (!Array.isArray(arr)) return null;
//   return [...arr];
// };

console.log(cloneArr([23, 43, 2, 3, 341]));
console.log(cloneArr('d'));
