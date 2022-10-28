// requirement
//
// input:{obj}
// output:[array]

// algorithm
//
// _1. проиттерироваться по ключам входящего obj;
//
// _2.сложить их в массив;
//
// _3. вывести полученный массив;

//    Draft solution    //
const concatProps = obj => {
  const arr = [];
  for (const key in obj) {
    if (!key) return arr;
    arr.push(obj[key]);
  }
  return arr;
};

//    Refactoring    //

// testData
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));
console.log(concatProps({}));
// ==> ['John Doe', 17, 'football']
console.log(concatProps({ NaN: 'John Doe', undefined, interest: 'football' }));
