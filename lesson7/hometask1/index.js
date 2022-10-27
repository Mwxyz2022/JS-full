const squareArray = arr => (Array.isArray(arr) ? arr.map(num => num * num) : null);
//
// function squareArray(arr) {
//   if (!Array.isArray(arr)) return null;
//   return arr.map(num => num * num);
// }

// const squareArray = arr =>
//   Array.isArray(arr) ? arr.filter(num => !isNaN(num)).map(num => num * num) : null;

console.log(squareArray('d'));
console.log(squareArray([null, undefined, NaN, '2', '4']));
console.log(squareArray([0, 0, 1, 3]));
console.log(squareArray([-1, 0, -1, 1]));
