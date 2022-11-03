//  input: "number"
//  output: [f(),f(),f()...].

//  1.Экспортируемая ф-я
//  2.Каждый э-т - функция  возвращающая свой индекс.
//    * если не число принимает => null.
//    * если ничего не принемает => [].

//    code          /

// export const createArrayOfFunctions = num => {
//   if (!num) return [];
//   if (typeof num !== 'number') return null;
//   const array = new Array(num)

//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = function () {
//       return i;
//     };
//   }

//   return array;

// };

//   refactoring   /

export const createArrayOfFunctions = num => {
  if (!num) return [];
  if (typeof num !== 'number') return null;

  const array = new Array(num).fill(null);
  return array.map(
    (ell, i) =>
      function () {
        return i;
      },
  );
};

// testdata
console.log(createArrayOfFunctions(10)[4]());
console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions(9));
console.log(createArrayOfFunctions('ds'));
console.log(createArrayOfFunctions());
