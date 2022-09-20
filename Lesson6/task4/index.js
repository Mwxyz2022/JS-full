'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
    const [a, ...arr] = numbers;
    return [...arr, a];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
    let destrArr = [];

    for (let i = 1; i < numbers.length; i += 1) {
        destrArr.push(numbers[i]);
    }
    destrArr.push(numbers[0]);

    return destrArr;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]