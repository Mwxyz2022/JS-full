// input: [array];
// output:'number'

//  1. Написать ф-ю,
//  2. Экпортировать ее для проверки
//  3. Проверить jest-ом

// D solution //

// const getMinSquaredNumbers = array => {
//   const squaredArray = array.map(num => Math.abs(num ** 2));
//   return Math.min(...squaredArray);
// };

export const getMinSquaredNumbers = arrayNum =>
  Array.isArray(arrayNum) ? Math.min(...arrayNum.map(num => Math.abs(num ** 2))) : null;

// console.log(getMinSquaredNumbers([-777, 3, -2, 6, 45, -20]));
