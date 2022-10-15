// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) return 0;
  return array.reduce((acc, num) => acc + num, 0) / array.length;
}

console.log(findAverage([71, 66, 38, 27, 79, 36, 73, 12, 52, 88, 78]));
console.log(findAverage([]));
