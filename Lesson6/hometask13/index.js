function uniqueCount(arr) {
  if (!Array.isArray(arr)) return null;
  const unicArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      unicArr.push(arr[0]);
    }
    if (!unicArr.includes(arr[i])) {
      unicArr.push(arr[i]);
    }
  }
  const arrLeng = unicArr.length;
  return arrLeng;
}

console.log(uniqueCount([34, 34, 34, 3432, 324, 34, 4]));
