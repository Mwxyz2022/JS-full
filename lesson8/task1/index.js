// requirement
//
// input: [array]
// output: {obj}

// algorithm
//
// _1. проверить является вход массивом:
//    нет - вернуть пустой obj.
// _2. да - создать в obj key = value = [ell]
//
// _3. вернуть созданный obj.

//    Draft solution    //
// const transformToObject = array => {
//   const obj = {};
//   if (!Array.isArray(array)) return obj;
//   array.forEach(el => {
//     obj[el] = el;
//   });
//   return obj;
// };

//    Refactoring    //
const transformToObject = array => {
  if (!Array.isArray(array)) return {};
  return array.reduce((acc, el) => ({ ...acc, [el]: el }), {});
};

// testData
console.log(transformToObject(['a', 17.1, 'John Doe']));
console.log();
