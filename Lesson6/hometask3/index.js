'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = arr => {
    if (!Array.isArray(arr)) return null;
    let getSumArr = 0;
    for (let num of arr) getSumArr += num;
    if (getSumArr >= 100) return true;
    if (getSumArr < 100) return false;
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true