/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
    if (!Array.isArray(arr)) return null;
    let res = [];
    for (let num of arr) res.push(num * num);
    return res;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]