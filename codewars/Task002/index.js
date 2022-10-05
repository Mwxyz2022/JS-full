// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  const result = '';
  if (!s.length) return result;
  if (s[0] === '#') return result;
  if (s.length <= 2) return result;
  if (typeof s[0] === 'string' && s[s.length - 1] !== '#') return s[0] + s[s.length - 1];
  if (typeof s[0] === 'string' && s[s.length - 1] === '#') return result;
}

console.log(
  cleanString('zbjkwxdbhnkqswoozcrosmaeukkwmougxhpdqojhnxiqifcyrppldcfrkezhglqbywgmfbftyeeyjk'),
);
