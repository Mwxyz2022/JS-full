function checker(arr) {
  if (!Array.isArray(arr)) return null;
  const sortArr = arr.sort((a, b) => a - b);
  const sumMinMax = sortArr[0] + sortArr[sortArr.length - 1];
  if (sumMinMax >= 1000) return true;
  if (sumMinMax < 1000) return false;
}

console.log(checker([323, 43, 23, 24, 5, 134]));
console.log(checker([123, 545, 76, 3413]));
console.log(checker(12, 32, 3));
