// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) return null;
//   return arr.filter(num => num % 2 === 0).map(num => num + delta);
// };

const increaseEvenEl = (arr, delta) =>
  Array.isArray(arr) ? arr.filter(num => !(num % 2)).map(num => num + delta) : null;

// const increaseEvenEl = (arr, delta) =>
//   Array.isArray(arr)
//     ? arr
//         .flat(Infinity)
//         .filter(num => !(num % 2) && !isNaN(num))
//         .map(num => (num !== 'string' ? Number(num) + delta : num + delta))
//     : null;

console.log(increaseEvenEl([12, null, NaN, 24, 15, 22], 20));
console.log(increaseEvenEl([12, 3, '6', undefined, [15, 22]], 20));
console.log(increaseEvenEl([12, 3, 6, '24', 15, 22], 20));
