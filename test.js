function saveFuncCalls(func) {
  const callsHistory = [];
  return function withMemory(...arg) {
    callsHistory.push(arg);
    withMemory.callsHistory = callsHistory;
    return func.call(this, ...arg);
  };
}

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
sumWithMemory(4, 2); // ===> 6
sumWithMemory(9, 1); // ===> 10

sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]
