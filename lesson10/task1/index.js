const testArr = [17, 17.0, 17.17, '17', Infinity, NaN, undefined, null];

const getFiniteNumbers = arr => {
  const resArr = [];
  arr.forEach(num => {
    if (Number.isFinite(num)) resArr.push(num);
  });
  return resArr;
};
const getFiniteNumbersV2 = arr => {
  const resArr = [];
  arr.forEach(num => {
    if (isFinite(num)) resArr.push(num);
  });
  return resArr;
};

const getNaN = arr => {
  const resArr = [];
  arr.forEach(num => {
    if (Number.isNaN(num)) resArr.push(num);
  });
  return resArr;
};
const getNaNV2 = arr => {
  const resArr = [];
  arr.forEach(num => {
    if (isNaN(num)) resArr.push(num);
  });
  return resArr;
};

const getIntegers = arr => {
  const resArr = [];
  arr.forEach(num => {
    if (Number.isInteger(num)) resArr.push(num);
  });
  return resArr;
};

console.log(getFiniteNumbers(testArr));
console.log(getFiniteNumbersV2(testArr));
console.log(getNaN(testArr));
console.log(getNaNV2(testArr));
console.log(getIntegers(testArr));
