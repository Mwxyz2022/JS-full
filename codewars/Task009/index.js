// Given the triangle of consecutive odd numbers:

//                   1
//                3     5
//             7     9    11
//          13    15    17    19
//       21    23    25    27    29
//    31   33     35    37    39     41
//  43  45    47    49    51     53     55 ...
// Calculate the sum of the numbers in the nth row of this
// triangle(starting at index 1) e.g.: (Input-- > Output)

// 1 --> 1
// 2 --> 3 + 5 = 8
// 3 --> 7 + 9 + 11 = 27
// 4 --> 13
// 5 --> 21
// 6 --> 31
// 7 --> 43

function rowSumOddNumbers(n) {
  if (n === 1) return 1;
  const firstNum = n * n - (n - 1);
  let res = null;
  const arrLine = [];
  for (let i = 0; i < n; i += 1) {
    if (i === 0) arrLine.push(firstNum);
    if (i > 0) arrLine.push(firstNum + 2 * i);
  }
  for (let k = 0; k < arrLine.length; k += 1) {
    res += arrLine[k];
  }
  return res;

  // return n * n * n;
}

console.log(rowSumOddNumbers(42));
