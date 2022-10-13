const splitString = (str, el) => {
  if (typeof str !== 'string') return null;
  const element = el || 10;
  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = str.substr(startPosition, element);

    if (chunk.length === 0) {
      const howManyDot = element - strArr[strArr.length - 1].length;

      for (let i = 1; i <= howManyDot; i += 1) {
        strArr[strArr.length - 1] += '.';
      }
      break;
    }

    strArr.push(chunk[0] + chunk.slice(1));
    startPosition += element;
  }
  return strArr;
};

console.log(splitString('sdfsfsdgsgfsgfsgfgfgdfg', 15));
