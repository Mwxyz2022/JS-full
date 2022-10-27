/// Method 1

// function getEvenOdd(num) {
//   if (num % 2 === 0) return 'even';
//   if (num % 2 === 1) return 'odd';
// }

/// Method 2

function getEvenOdd(num) {
  return num % 2 ? 'odd' : 'even';
}

console.log(getEvenOdd(2)); //= ==>        even        //     even
console.log(getEvenOdd(-3)); //= ==>       undefined   //     odd
console.log(getEvenOdd(null)); //= ==>     even        //     even
console.log(getEvenOdd(undefined)); //= ==> undefined  //     even
console.log(getEvenOdd(NaN)); //= ==>      undefined   //     even
