const countOccurrences = (text, str) => {
  const seacrh = text || '';
  if (str === '') return null;
  return text.split(str).length - 1;
};

console.log(countOccurrences('opaganggnamstyle', 'ga'));
console.log(countOccurrences('opaganggnamstyle', ''));
console.log(countOccurrences('', 's'));
console.log(countOccurrences('opaganggnagamstyle', 'ga'));
console.log(countOccurrences('gagagaga', 'ga'));
