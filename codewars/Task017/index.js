// DESCRIPTION:
// This kata is about multiplying a given number
//  by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  // if (number % 2 === 0) return number * 8;
  // if (number % 2 !== 0) return number * 9;

  return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(1));
console.log(simpleMultiplication(2));
