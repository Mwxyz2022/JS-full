/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    let count = 0;
    for (let k = 2; k <= i; k += 1) {
      if (i % k === 0) {
        count += 1;
      }
      if (count > 1) {
        break;
      }
    }
    if (count === 1) {
      console.log(i);
    }
  }
}

getPrimes(122);
