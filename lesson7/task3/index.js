const flatArray = arr => {
  const flatArray = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return flatArray.sort((a, b) => a - b);
};

const arr = [31, 43, 68, 3, [44, 6, 12], 4, 2, [100, 102]];
console.log(arr);
console.log(flatArray(arr));
