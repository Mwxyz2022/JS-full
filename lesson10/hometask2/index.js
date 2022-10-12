/**
 * @param {number} length
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

const getRandomNumbers = (length, from, to) => {
  if (from > to || Math.floor(from) - Math.floor(to) === 0) return null;
  const min = Math.ceil(from);
  const max = Math.floor(to);
  const resArr = new Array(length);
  resArr.fill(0);
  return resArr.map(el => {
    const randomNumber = +(Math.random(min, max) * (max - min) + min).toFixed();
    return el + randomNumber;
  });
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null

console.log(getRandomNumbers(50, 90.5, 95));
