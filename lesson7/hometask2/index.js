const reverseArray = array => {
  if (!Array.isArray(array)) return null;

  const reverseArr = array.slice().reverse();

  // const resArr = [];
  // array.forEach(num => resArr.unshift(num));
  // return resArr;
  return reverseArr;
};

console.log(reverseArray('d'));
console.log(reverseArray([34, 4, 2, 12, 43, 5]));
