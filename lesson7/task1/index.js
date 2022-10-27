// const getSpecialNumbers = arr => arr.slice().filter(num => num % 3 === 0);
// console.log(getSpecialNumbers([43, 32, 3, 1, 33, 4314, 43]));

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 18];
const getSpecialNumbers = arr => arr.filter(num => !(num % 3));

console.log(arr);

console.log(getSpecialNumbers(arr));
console.log(getSpecialNumbers([12, 3, undefined, null, NaN]));
console.log(getSpecialNumbers([15, '12', 17, '21']));
