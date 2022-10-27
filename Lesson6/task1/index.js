// 'use strict';

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// function getArrayBounds(arr) {
//     if (!Array.isArray(arr)) return null;
//     const getArr = [arr.length, arr[0], arr[arr.length - 1]];
//     return getArr;
// }

// // examples
// console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
// console.log(getArrayBounds(10, 12, 14)); // ==> null
// console.log(getArrayBounds([1])); // ==> [1, 1, 1]

function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}
const emptyArr = [];
emptyArr.length = 3;

console.log(emptyArr); //= ==>[empty × 3]

console.log(getArrayBounds([2, 14, 3, 34, 5, 3, 223])); //= ==>[7, 2, 223]
console.log(getArrayBounds([2])); //= ==>[1, 2, 2]
console.log(getArrayBounds(emptyArr)); //= ==>[3, undefined, undefined]
console.log(getArrayBounds([2])); //= ==>[1, 2, 2]
console.log(getArrayBounds([null])); //= ==> [1, null, null]
console.log(getArrayBounds([NaN])); //= ==>[1, NaN, NaN]
console.log(getArrayBounds(null)); //= ==>null
console.log(getArrayBounds(NaN)); //= ==>null
