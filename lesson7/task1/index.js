const getSpecialNumbers = arr => arr.slice().filter(num => num % 3 === 0);
console.log(getSpecialNumbers([43, 32, 3, 1, 33, 4314, 43]));
