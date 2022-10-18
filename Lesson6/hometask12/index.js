function removeDuplicates(array) {
  if (!array.length) return null;
  const getNewArr = [];

  for (let i = 0; i < array.length; i += 1) {
    if (!getNewArr.includes(array[i])) {
      getNewArr.push(array[i]);
    }
  }
  return getNewArr;
}

console.log(removeDuplicates([434, 434, 234, 34, 43, 34, 34, 232, 54, 1, 3, 7]));
