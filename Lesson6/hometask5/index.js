function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;
  const reversArr = [];
  for (const num of arr) reversArr.unshift(num);
  return reversArr;
}

console.log(reverseArray([23, 43, 524, 45, 134, 45, 123]));
