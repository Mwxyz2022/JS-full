// function square(num) {
//   return num * num;
// }

// // console.log(square(3));
// // console.log(square(9));
// // console.log(square(81));
// // console.log(square(25));

// function square2(num) {
//   console.log(num ** 2);
// }

// square2(2);

// function square3(num) {
//   console.log(Math.pow(num, 2);
// }

// // square3(2);
// const arr = [1, 2, 3, 4, 5, 6];
// const [a, s, q, w, e, r, t] = arr;

// console.log(a, s, q, w, e, r, t);

function getPrimes(num) {
  for (let number = 2; number < num; number += 1) {
    let isPrime = true;

    for (let index = 2; index < number; index += 1) {
      if (number % index === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(number);
    }
  }
}

getPrimes(15);
