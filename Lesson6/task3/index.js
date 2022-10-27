/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
function getSpecialNumbers(from, to) {
  const getArrNum = [];
  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) getArrNum.push(i);
  }
  return getArrNum;
}

// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> []

console.log(getSpecialNumbers(NaN, 10)); // ==> []
console.log(getSpecialNumbers(null, 10)); //= => [null, 3, 6, 9]
console.log(getSpecialNumbers(undefined, 10)); // ==> []
