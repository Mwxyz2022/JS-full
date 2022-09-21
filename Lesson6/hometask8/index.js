function sortAsc(arr) {
  if (!Array.isArray(arr)) return null;
  const ascArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    //
    if (i === 0) ascArr.push(arr[0]);
    //
    if (i === 1) {
      if (arr[0] <= arr[i]) ascArr.push(arr[i]);
      if (arr[0] >= arr[i]) ascArr.unshift(arr[i]);
    }
    if (i > 1) {
      for (let k = 0; k < ascArr.length; k += 1) {
        const elementI = arr[i];
        const elementK = ascArr[k];
        const nextElementK = ascArr[k + 1];
        if (elementI >= elementK && elementI <= nextElementK) {
          ascArr.splice(k + 1, 0, elementI);
          break;
        }
        if (arr[i] <= ascArr[0]) {
          ascArr.unshift(arr[i]);
          break;
        }
        if (arr[i] >= ascArr[ascArr.length - 1]) {
          ascArr.push(arr[i]);
          break;
        }
      }
    }
  }
  return ascArr;
}

function sortDesc(arr) {
  if (!Array.isArray(arr)) return null;
  const descArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    //
    if (i === 0) descArr.push(arr[0]);
    //
    if (i === 1) {
      if (arr[0] >= arr[i]) descArr.push(arr[i]);
      if (arr[0] <= arr[i]) descArr.unshift(arr[i]);
    }
    if (i > 1) {
      for (let k = 0; k < descArr.length; k += 1) {
        const elementI = arr[i];
        const elementK = descArr[k];
        const nextElementK = descArr[k + 1];
        if (elementI <= elementK && elementI >= nextElementK) {
          descArr.splice(k + 1, 0, elementI);
          break;
        }
        if (arr[i] >= descArr[0]) {
          descArr.unshift(arr[i]);
          break;
        }
        if (arr[i] <= descArr[descArr.length - 1]) {
          descArr.push(arr[i]);
          break;
        }
      }
    }
  }
  return descArr;
}

console.log(sortAsc([33, 43, 5442, 4, 2, 34, 431]));
console.log(sortDesc([33, 43, 5442, 4, 2, 34, 431]));
console.log(sortAsc([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10]));
