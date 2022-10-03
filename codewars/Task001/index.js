const pigIt = str => {
  const res = str.split(' ').map(ell => {
    const splited = ell.split('');
    const firstLetter = splited[0];
    splited.splice(0, 1);
    const newWords = [...splited, firstLetter];
    if (firstLetter !== '!' && firstLetter !== '?') {
      newWords.push('ay');
    }
    return newWords.join('');
  });
  return res.join(' ');
};

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
