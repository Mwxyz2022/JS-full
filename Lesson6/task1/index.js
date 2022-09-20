'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getArrayBounds(arr) {
    if (!Array.isArray(arr)) return null;
    const getArr = [arr.length, arr[0], arr[arr.length - 1]];
    return getArr;
}

// examples
console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
console.log(getArrayBounds(10, 12, 14)); // ==> null
console.log(getArrayBounds([1])); // ==> [1, 1, 1]