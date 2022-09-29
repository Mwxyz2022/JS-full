const cloneArr = arr => {
  if (!Array.isArray(arr)) return null;
  return [...arr];
};

console.log(cloneArr([23, 43, 2, 3, 341]));
console.log(cloneArr('d'));
