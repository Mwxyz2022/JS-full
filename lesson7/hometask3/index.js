const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) return null;
  return arr.filter(num => num % 2 === 0).map(num => num + delta);
};

console.log(increaseEvenEl([12, 3, 6, 24, 15, 22], 20));
