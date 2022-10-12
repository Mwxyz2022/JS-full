const testArr = [17, 17.0, 17.17, '17', Infinity, NaN, undefined, null];

const getParsedIntegers = arr => {
  const resArr = [];
  arr.forEach(num => {
    resArr.push(Number.parseInt(num));
  });
  return resArr;
};

const getParsedIntegersV2 = arr => {
  const resArr = [];
  arr.forEach(num => {
    resArr.push(parseInt(num));
  });
  return resArr;
};

const getParsedFloats = arr => {
  const resArr = [];
  arr.forEach(num => {
    resArr.push(Number.parseFloat(num));
  });
  return resArr;
};

const getParsedFloatsV2 = arr => {
  const resArr = [];
  arr.forEach(num => {
    resArr.push(parseFloat(num));
  });
  return resArr;
};

console.log(getParsedIntegers(testArr));
console.log(getParsedIntegersV2(testArr));
console.log(getParsedFloats(testArr));
console.log(getParsedFloatsV2(testArr));
