const someText = 'abcdfdasfdfsfadfqd efgh';

const splitText = (str, el) => {
  if (typeof str !== 'string') return null;
  const element = el || 10;
  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = str.substr(startPosition, element);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += element;
  }
  return strArr.join('\n');
};

console.log(splitText(someText, 4));
console.log(splitText(someText));
