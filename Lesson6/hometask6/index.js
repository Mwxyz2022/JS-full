function cloneArr(arr) {
  if (!Array.isArray(arr)) return null;
  const newArr = arr.slice();
  return newArr;
}

console.log(cloneArr([32, 43, 13, 23, 13, 23, 4]));
