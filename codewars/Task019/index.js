// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const emptyArr = [];
  const arrNum = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 !== 0) {
      emptyArr.push('odd');
      arrNum.push(array[i]);
    }
    if (array[i] % 2 === 0) {
      emptyArr.push(array[i]);
    }
  }
  const sortArrNum = arrNum.sort((a, b) => a - b);

  let counter = 0;
  for (let k = 0; k < emptyArr.length; k += 1) {
    if (emptyArr[k] === 'odd') {
      emptyArr[k] = sortArrNum[counter];
      counter += 1;
    }
  }

  return emptyArr;
}

console.log(sortArray([3, 3, 2, 1]));
