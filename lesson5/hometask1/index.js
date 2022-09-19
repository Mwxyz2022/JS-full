function getSum(firstNum, secondNum) {
    let result = 0;
    for (let i = firstNum; i <= secondNum; i += 1) {
        if (i % 2 === 0) result += i;
    }
    return result;
}