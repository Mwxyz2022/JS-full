/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
function compareObjects(firstObj, secondObj) {
  const fobj = Object.entries(firstObj);
  const sobj = Object.entries(secondObj);

  if (fobj.length !== sobj.length) return false;
  if (fobj.flat().sort().join() === sobj.flat().sort().join()) return true;

  return false;

  // console.log(fobj.flat().sort().join());
  // console.log(sobj.flat().sort().join());

  // for (const key in firstObj) {
  //   if (firstObj[key] !== secondObj[key]) return false;
  // }

  // for (const key in secondObj) {
  //   if (secondObj[key] !== firstObj[key]) return false;
  // }
  // return true;
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

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true

const firstObj = {
  name: 'Bob',
  age: 17,
  isStudent: true,
};

const secondObj = {
  name: 'Tom',
  age: 35,
  isStudent: true,
};

console.log(compareObjects(firstObj, secondObj)); // ==> true
