/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const resArr = [];
  const factorArr = ['1'];
  for (let i = 1; i <= prec; i += 1) {
    factorArr.push('0');
  }
  const factor = +factorArr.join('');

  resArr.push(Math.floor(num * factor) / factor);
  resArr.push(Math.trunc(num * factor) / factor);
  resArr.push(Math.ceil(num * factor) / factor);
  resArr.push(Math.round(num * factor) / factor);
  resArr.push(+num.toFixed(prec));

  return resArr;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]

console.log(superRound(6.3431432, 5)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
console.log(superRound(12.32, 5)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
