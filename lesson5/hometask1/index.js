// function getSum(firstNum, secondNum) {
//     let result = 0;
//     for (let i = firstNum; i <= secondNum; i += 1) {
//         if (i % 2 === 0) result += i;
//     }
//     return result;
// }

function getSum(num1, num2) {
  let res = null;
  for (let i = num1; i <= num2; i += 1) {
    if (i % 2 === 0) {
      res += i;
    }
  }
  return res;
}

console.log(getSum(2, 6)); //= ==> 12
console.log(getSum(-2, 6)); //= ==> 10
console.log(getSum(-10, null)); //= ==> -30
console.log(getSum(null, undefined)); //= ==> null
