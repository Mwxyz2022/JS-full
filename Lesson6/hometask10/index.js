const getSubArray = (arr, numberOfElements) => {
  const getNewArrr = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    getNewArrr.push(arr[i]);
  }
  return getNewArrr;
};

console.log(getSubArray([3414, 425, 356, 34, 34, 6535, 34], 4));
