// //requirement
//
// input: [array]
// output: integer number

// algorithm
//
// _1. если инпут не массив, вернуть null;
//
// _2. среднее арифм. всех эл. массива.
//
// _3.  вернуть результат number

//    Draft solution    //

// function arrAverage(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   let average = null;

//   for (let index = 0; index < array.length; index += 1) {
//     average += array[index];
//   }
//   return average / array.length;
// }

//    Refactoring    //

const arrAverage = inpArray =>
  Array.isArray(inpArray) ? inpArray.reduce((acc, num) => acc + num) / inpArray.length : null;

// testData
console.log(arrAverage([3, 2, 3]));
console.log(arrAverage([3, NaN, 3]));
console.log(arrAverage([3, 2, undefined]));
console.log(arrAverage([3, null, 3]));
console.log(arrAverage(2));
