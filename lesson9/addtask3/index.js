// requirement
//
// input:___{obj1},{obj2},;
// output:__'boolean'

// algorithm
//
// _1.сравнить количество эл.объекта.
//    * если не = вывести false
//
// _2.если кол. эл. = , сравнить ключи-значение - должны быть одинаковы(значение,количество)
//
// _3.

//    Draft solution    //

function compareObjects(firstObj, secondObj) {
  const firstArray = Object.entries(firstObj).sort().flat();
  const secondArray = Object.entries(secondObj).sort().flat();
  if (firstArray.length !== secondArray.length) return false;
  if (firstArray.join() !== secondArray.join()) return false;
  return true;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

//    Refactoring    //

// testData
console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
