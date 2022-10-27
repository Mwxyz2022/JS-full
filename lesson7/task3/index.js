const array = [31, 43, 68, 3, [44, 6, 12], 4, 2, [100, 102]];
const flatArray = arr => {
  const flatArray = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return flatArray.sort((a, b) => a - b);
};

// const arr = [31, 43, 68, 3, [44, 6, 12], 4, 2, [100, 102]];
// console.log(arr);
// console.log(flatArray(arr));

// const flatArray = arr => arr.reduce((acc, elem) => acc.concat(elem), []).sort((a, b) => a - b);

// const flatArray = arr =>
//   arr
//     .flat()
//     .filter(num => typeof num === 'number' && !isNaN(num))
//     .sort((a, b) => a - b);

// const flatArray = arr =>
//   arr
//     .flat()
//     .filter(num => num)
//     .sort((a, b) => a - b);

// console.log(flatArray(array));

console.log(flatArray([NaN, 43, null, 3, [undefined, 6, 12], 4, 2, [100, 102]]));
console.log(flatArray([[undefined, 6, 12], NaN, 43, null, 3, 4, 2, [100, 102]]));
console.log(flatArray([-2, 43, null, NaN, [undefined, 6, 12], '2', 4, 2, [100, 102]]));
