const sortDesc = arr => arr.slice().sort((a, b) => b - a);

console.log(sortDesc([43, 34, 2, 4, 6, 124, 65, 876, 23, 5]));
console.log(sortDesc([43, NaN, 2, null, 6, 124, undefined, 876, 23, 5]));
const array = new Array(5);
console.log(array);
array[2] = -3;
array[3] = 1;
console.log(array);
console.log(sortDesc(array));
