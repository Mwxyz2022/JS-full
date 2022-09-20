'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
    if (!Array.isArray(arr)) return null;
    let getSum = 0;
    for (const num of arr) {
        getSum += num;
    }
    return getSum;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null