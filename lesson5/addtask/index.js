// /**
//  * @param {number} num
//  * @return {undefined}
//  */
// function getPrimes(num) {
//   for (let i = 2; i <= num; i += 1) {
//     let count = 0;
//     for (let k = 2; k <= i; k += 1) {
//       if (i % k === 0) {
//         count += 1;
//       }
//       if (count > 1) {
//         break;
//       }
//     }
//     if (count === 1) {
//       console.log(i);
//     }
//   }
// }

// getPrimes(122);

// _1._Learn requirement(WHAT?)
// _2._Create step by step algo (& input/output for function) (HOW?)
// _3._Write draft solution & testing
// _4._Refactoring & final testing -> final solution

// requirement
//
// input: integer 'number'
// output: undefined

// algorithm
//
// _1. iterate from 2 to num
//
// _2. check if prime
//    2_1. iterate from 2 to N
//    2_2. if N % iterator ===0 then NOT prime +++
//
// _3. if prime - print it

//      draft solution    //

// function getPrimes(num) {
//   for (let number = 2; number < num; number += 1) {
//     let isPrime = true;

//     for (let index = 2; index < number; index += 1) {
//       if (number % index === 0) {
//         isPrime = false;
//       }
//     }

//     if (isPrime) {
//       console.log(number);
//     }
//   }
// }

// Refactoring //

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
// console.log();

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

// // testData

getPrimes(15);
getPrimes(7);
getPrimes(90);
// // console.log()
