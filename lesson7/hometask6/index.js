const sum = arr => {
  if (!Array.isArray(arr)) return null;
  const sumArr = arr.reduce((acc, elem) => acc + elem, 0);
  return sumArr;
};

console.log(sum([23, 4, 2, 3, 134, 34]));
