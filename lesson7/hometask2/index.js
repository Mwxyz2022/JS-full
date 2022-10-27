const reverseArray = arrEll => (Array.isArray(arrEll) ? arrEll.slice().reverse() : null);
// const reverseArray = arr => {
//   if (!Array.isArray(arr)) return null;

//   return array.slice().reverse();
// };

console.log(reverseArray('d'));
console.log(reverseArray([34, 4, 2, 12, 43, 5]));
console.log(reverseArray([34, null, 2, NaN, 43, undefined]));
