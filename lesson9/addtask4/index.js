// requirement
//
// input: {{},{}...}
// output: [{},{}...]

// algorithm
//
// _1. создать массив
//
// _2. добавить значение каждого ключа, с соответствующим id,
//
// _3. сортировка масссива

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

//    Draft solution    //
// const getCustomersList = obj => {
//   const res = Object.entries(obj)
//     .reduce((acc, ell) => {
//       const key = ell[0];
//       const value = ell[1];
//       const newObj = {
//         ...value,
//         id: key,
//       };

//       return [...acc, newObj];
//     }, [])
//     .sort((a, b) => a.age - b.age);
//   return res;
// };

//    Refactoring    //

const getCustomersList = obj =>
  Object.entries(obj)
    .reduce((acc, ell) => [...acc, { ...ell[1], id: ell[0] }], [])
    .sort((...arg) => console.log(arg));

// testData
console.log(getCustomersList(customers));
